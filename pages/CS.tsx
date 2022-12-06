import Head from "next/head";
import Link from "next/link";
import st from "../styles/CS.module.css";

const CS = () => {
    return (
        <div className={st.main}>
            <Head>
                <title>Dokebi-Coming Soon</title>
            </Head>
            <Link href="/" className={st.CSspan}>
                <span> Many Things Will Come To You</span>
                <br></br>
                <span> Go Back To Home</span>
            </Link>
        </div>
    );
};

export default CS;
