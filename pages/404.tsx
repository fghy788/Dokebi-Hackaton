import Head from "next/head";
import Link from "next/link";
import st from "../styles/error.module.css";

const page404 = () => {
    return (
        <div className={st.main}>
            <Head>
                <title>Dokebi-404</title>
            </Head>
            <span className={st.span404}>something is wrong</span>
            <Link className={st.link404} href="/">
                Go to Main Page
            </Link>
            <Link className={st.link404} href="/D2E">
                Go To Donate 2 Earn
            </Link>
        </div>
    );
};

export default page404;
