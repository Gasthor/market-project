import { Inter } from "next/font/google";
import Head from "next/head";
import { FC } from "react";
import Navbar from "../UI/Navbar";

interface Props {
    children : React.ReactNode | React.ReactNode[]
    title : string
    pageDescription : string
    imgURL: string
}

//const inter = Inter({ subsets: ['latin'] })

export const PrincipalLayout: FC<Props> = ({
    children,
    title,
    pageDescription,
    imgURL
}) => {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={pageDescription}/><meta name="og:title" content={title} />
            <meta name="og:description" content={pageDescription} />
            {imgURL && <meta name="og:image" content={imgURL} />}
        </Head>
        <Navbar/>
        <main className={`flex min-h-screen flex-col items-center justify-between p-2`}>
            {children}
        </main>
    </>;

} 