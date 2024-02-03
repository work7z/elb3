
import { Inter } from "next/font/google";
import { getCurrentLang } from "../../utils/TranslationUtils";
import { TopNav } from "../../containers/TopNav";
import CenterPart from "../../containers/CenterPart";
import Footer from "../../containers/Footer";
import { ThemeProvider } from "../../theme-provider";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(props: {
    children,
}) {
    let { children } = props;
    return (
        <html lang={getCurrentLang()}>
            <body className={'  dark:bg-solarized-base03 dark:text-slate-300    ' + inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="w-full h-full">
                        <TopNav></TopNav>
                        <CenterPart children={children as any} />
                        <Footer></Footer>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
