import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import SendBtn from "../components/sendbtn";
import st from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Home() {
    const [appnum, setAppnum] = useState(0);
    const name = ["Donate 2 Earn", "Donate 2 Raffle", "Donate 2 Utility", "About Us", "Coming Soon"];
    const link = ["/D2E", "/D2R", "D2U", "/aboutus", "/CS"];
    const [leftname, setleftname] = useState(name[4]);
    const [mainname, setmainname] = useState(name[0]);
    const [rightname, setrightname] = useState(name[1]);
    const [mainlink, setmainlink] = useState(link[0]);
    const [loading, setLoading] = useState(false);

    const plus = () => {
        if (appnum + 1 > 4) {
            return 0;
        } else {
            return appnum + 1;
        }
    };
    const minus = () => {
        if (appnum - 1 < 0) return 4;
        else return appnum - 1;
    };

    const numplus = () => {
        if (appnum + 1 < 5) {
            setAppnum((cur) => cur + 1);
            const left = minus();
            const right = plus();
            if (left !== undefined) setleftname(name[left]);
            if (plus !== undefined) setrightname(name[right]);
            setmainname(name[appnum]);
            setmainlink(link[appnum]);
        } else {
            setAppnum(0);
            const left = minus();
            const right = plus();
            if (left !== undefined) setleftname(name[left]);
            if (plus !== undefined) setrightname(name[right]);
            setmainname(name[appnum]);
            setmainlink(link[appnum]);
        }
    };

    const numminus = () => {
        if (appnum - 1 >= 0) {
            setAppnum((cur) => cur - 1);
            const left = minus();
            const right = plus();
            if (left !== undefined) setleftname(name[left]);
            if (plus !== undefined) setrightname(name[right]);
            setmainname(name[appnum]);
            setmainlink(link[appnum]);
        } else {
            setAppnum(4);
            const left = minus();
            const right = plus();
            if (left !== undefined) setleftname(name[left]);
            if (plus !== undefined) setrightname(name[right]);
            setmainname(name[appnum]);
            setmainlink(link[appnum]);
        }
    };

    const load = () => {
        setLoading((cur) => !cur);
    };

    return (
        <div>
            <Head>
                <title>Dokebi</title>
            </Head>
            <header className={st.header}>
                <Link href="/">Dokebi</Link>
            </header>
            {loading && (
                <div className={st.loading}>
                    <Image src="/loading.png" width={400} height={400} alt="/loading.png" />
                    <span className={st.loadingspan}>Loading...</span>
                </div>
            )}
            <div className={st.main}>
                <div className={st.apps}>
                    <button className={st.appbtn} onClick={numminus}>
                        <span className={st.btnL}>{leftname}</span>
                        <span>{"<"}</span>
                    </button>
                    <Link onClick={load} className={st.app} href={mainlink}>
                        {mainname}
                    </Link>
                    <button className={st.appbtn} onClick={numplus}>
                        <span>{">"}</span>
                        <span className={st.btnR}>{rightname}</span>
                    </button>
                </div>
                <div className={st.links}>
                    <Link className={st.linkT} href="https://twitter.com/Dokebi_sol">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link className={st.linkD} href="/CS">
                        <FontAwesomeIcon icon={faDiscord} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
