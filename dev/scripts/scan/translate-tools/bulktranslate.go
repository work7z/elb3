package main

import (
	"crypto/md5"
	"elb3-go/dev/scripts/scan/translate-tools/env"
	"elb3-go/dev/scripts/scan/translate-tools/log"
	nocycle "elb3-go/dev/scripts/scan/translate-tools/tools"
	"encoding/json"
	"fmt"
	"os"
	"path"
	"strings"
	"time"

	gt "github.com/bas24/googletranslatefree"
	"github.com/dlclark/regexp2"

	"github.com/sirupsen/logrus"
)

var LAFTOOLS_ROOT string = env.GetEnvValueForLafToolsRoot()

type TranslateConfig struct {
	Type    string
	Prefix  string
	Target  string
	Pattern *regexp2.Regexp
	Dir     string
}

func main() {
	// LAFTOOLS_ROOT =
	// get argument xxx from --id=xxx
	// go run ./translate-tools/bulktranslate.go --id=wl
	id := ""
	outputJSONFile := ""
	processArgs := os.Args[1:]
	eachLang := ""
	for _, eachArg := range processArgs {
		fmt.Println("eachArg: ", eachArg)
		if eachArg[:5] == "--lg=" {
			eachLang = eachArg[5:]
			continue
		}
		if eachArg[:5] == "--id=" {
			id = eachArg[5:]
			continue
		}
		if eachArg[:8] == "--output" {
			outputJSONFile = eachArg[9:]
			continue
		}
	}
	outputJSONMap := make(map[string]string)
	if nocycle.IsFileExist(outputJSONFile) {
		outputJSONMapStr, _ := nocycle.ReadFileAsStr(outputJSONFile)
		json.Unmarshal([]byte(outputJSONMapStr), &outputJSONMap)
	}
	log.Ref().Info("LAFTOOLS_ROOT", LAFTOOLS_ROOT)
	// zhCN
	zhCNOverwrittenFile := path.Join(LAFTOOLS_ROOT, "dev", "lang", "overwrriten", "zh_CN-overwrite.json")
	zhCNOverwrittenFileContent, err := nocycle.ReadFileAsStr(zhCNOverwrittenFile)
	if err != nil {
		log.InternalLog.Panic("err", err)
		return
	}
	zhCNOverwrittenMap := make(map[string]string)
	json.Unmarshal([]byte(zhCNOverwrittenFileContent), &zhCNOverwrittenMap)
	fmt.Println(zhCNOverwrittenMap)
	// normal flow
	fmt.Println("id is ", id)
	// current dirname
	log.InternalLog.SetFormatter(&logrus.TextFormatter{})
	translateResultDir := getTranslateResultDir()
	// get raw.json in translateResultDir
	rawJsonPath := path.Join(translateResultDir, "raw-"+id+"-"+eachLang+".json")
	configJsonPath := path.Join(translateResultDir, "config-"+id+"-"+eachLang+".json")
	// unmarshal rawJsonPath as map[string]string
	// key: "en" value: "text"
	rawMap := make(map[string]string)
	configMap := make(map[string]string)
	rawJSONPathStr, _ := nocycle.ReadFileAsBytes(rawJsonPath)
	configJSONPathStr, _ := nocycle.ReadFileAsBytes(configJsonPath)
	json.Unmarshal(rawJSONPathStr, &rawMap)
	json.Unmarshal(configJSONPathStr, &configMap)
	log.Ref().Debug(rawMap)
	cacheDir := nocycle.MkdirDirWithStr(path.Join(translateResultDir, "cache", id))
	crtResultMap := make(map[string]string)
	// for each rawMap
	for k, v := range rawMap {
		fmt.Println("k: ", k+" -> v:", v)
		// get md5 for k+v
		// if md5 file exists, skip
		// if md5 file not exists, translate
		// write md5 file
		// write translate result to file
		md5Str := fmt.Sprintf("%x", md5.Sum([]byte(k+v)))
		nocycle.MkdirDirWithStr(path.Join(cacheDir, eachLang))
		md5FilePath := (path.Join(cacheDir, eachLang, md5Str))
		var resultForCurrentLang string
		fmt.Println("md5FilePath: ", md5FilePath)
		// TODO: oragnize below part as separtate json
		isChinese := strings.Index(eachLang, "zh") == 0
		if val, ok := outputJSONMap[k]; ok {
			resultForCurrentLang = val
		} else if nocycle.IsFileExist(md5FilePath) {
			fmt.Println("result existed already")
			result2, err2 := nocycle.ReadFileAsStr(md5FilePath)
			if err2 != nil {
				log.InternalLog.Panic("err", err2)
			}
			resultForCurrentLang = result2
		} else {
			fmt.Println("new text received, id: " + id)
			var resultForCurrentLang2 string = ""
			for {
				v_resultForCurrentLang2, err2 := translateNow(v, eachLang)
				resultForCurrentLang2 = v_resultForCurrentLang2
				if err2 != nil {
					log.InternalLog.Warn("err", err2)
					nocycle.Sleep(10000)
				} else {
					break
				}
			}
			resultForCurrentLang = resultForCurrentLang2
			fmt.Println(resultForCurrentLang)
			nocycle.WriteStrIntoFile(md5FilePath, resultForCurrentLang)
			if isChinese {
				resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "LafTools", "LafTools工具箱")
				resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, " LafTools工具箱 ", "LafTools工具箱")
			}
		}
		if isChinese {
			resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "拉夫工具", "LafTools")
			resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "Laf Tools", "LafTools")
			resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "Tools ", "LafTools")
			resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "工作空间", "工作区")
			resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "存储库", "仓库")
			resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "LafTools工具箱 ", "LafTools工具箱")
			resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "CodeGen ToolBox", "CodeGen工具箱")
			// resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "你", "您") // 您们? 您们的? haha, it's too courtesy, but it's ok for me at least.
			resultForCurrentLang = strings.ReplaceAll(resultForCurrentLang, "您", "你") // 您们? 您们的? haha, it's too courtesy, but it's ok for me at least.
		}
		if isChinese {
			v = strings.Trim(v, " ")
			if val, ok := zhCNOverwrittenMap[v]; ok {
				resultForCurrentLang = val
			}
		}

		crtResultMap[k] = resultForCurrentLang
	}
	// write crtResultMap to file
	crtResultMapJson, _ := json.MarshalIndent(crtResultMap, "", "    ")
	crtResultMapJsonPath := path.Join(translateResultDir, "result-"+id+"-"+eachLang+".json")

	nocycle.WriteBytesIntoFile(crtResultMapJsonPath, crtResultMapJson)

	fmt.Println("Done.")
}

func getTranslateResultDir() string {
	tmpDir := path.Join(LAFTOOLS_ROOT, "dev", "scripts", "scan", "tmp-translate-result")
	os.MkdirAll(tmpDir, os.ModePerm)
	return tmpDir
}

func translateNow(text, targetLang string) (string, error) {
	if targetLang == "en_US" {
		targetLang = "en"
	}
	if targetLang == "zh_CN" {
		targetLang = "zh-cn"
	}
	if targetLang == "zh_HK" {
		targetLang = "zh-hk"
	}
	time.Sleep(90 * time.Millisecond)
	n, e := gt.Translate(text, "en", targetLang)
	return n, e
}

func __ExampleCall() {
}
