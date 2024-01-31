// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Thu, 21 Dec 2023
// Author: LafTools Team - FX <work7z@outlook.com>
// Description: 
// Copyright (C) 2023 - Present, https://laf-tools.com and https://codegen.cc
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package env

import (
	"fmt"
	"os"
	"path"
	"runtime"
)

func GetEnvValueForLafToolsRoot() string {
	a := os.Getenv("LAFTOOLS_ROOT")
	if a != "" {
		return a
	}
	_, file, line, ok := runtime.Caller(0)
	if ok {
		fmt.Printf("File: %s, Line: %d\n", file, line)
		return path.Join(path.Dir(file), "..", "..")
	} else {
		fmt.Println("Could not get location")
	}
	return ""
}
