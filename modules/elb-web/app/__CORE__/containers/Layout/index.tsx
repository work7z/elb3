
import { Inter } from "next/font/google";
import { getCurrentLangWithServerMode } from "../../utils/TranslationUtils";
import { TopNav } from "../TopNav";
import CenterPart from "../CenterPart";
import Footer from "../Footer";
import { ThemeProvider } from "../../../theme-provider";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(props: {
    children,
}) {
    let { children } = props;
    return (
        <html lang={getCurrentLangWithServerMode()}>
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
