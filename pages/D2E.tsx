import Head from "next/head";
//solana
import { Connection } from "@solana/web3.js";
//react
import { useEffect, useState } from "react";
//firebase
//next
import dynamic from "next/dynamic";
//other
import SendBtn from "../components/sendbtn";
import Link from "next/link";
import st from "../styles/D2E.module.css";
import Image from "next/image";

const WalletMultiButtonDynamic = dynamic(async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton, { ssr: false });
const D2E = () => {
    //props
    const [distributeSol, setDistributeSol] = useState(0);
    const [manual, setManual] = useState(false);
    const [time, setTime] = useState(88);
    const [month, setMonth] = useState(87);
    const [days, setdate] = useState(88);
    const [minute, setMinute] = useState(88);
    const [second, setSecond] = useState(88);
    const getbal = async () => {
        setDistributeSol(0);
    };

    useEffect(() => {
        getbal();

        const timer = setInterval(() => {
            const date = new Date();
            setMonth(date.getUTCMonth());
            setdate(date.getUTCDate());
            setTime(date.getUTCHours());
            setMinute(date.getUTCMinutes());
            setSecond(date.getUTCSeconds());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const manualBtnClick = () => {
        setManual((cur) => !cur);
    };

    const timeloading = () => {
        if (time === 88) return false;
        else return true;
    };

    return (
        <div>
            <Head>
                <title>Dokebi-D2E</title>
            </Head>
            {/* header */}
            <header className={st.headerbox}>
                <button className={st.manualBtn} onClick={manualBtnClick}>
                    How To Earn?
                </button>
                <Link href="/">Dokebi</Link>
                <WalletMultiButtonDynamic className={st.wallet} />
            </header>
            {/* <hr></hr> */}
            {/* main */}
            {manual && (
                <div className={st.manualBox}>
                    <button className={st.manualCloseBtn} onClick={manualBtnClick}>
                        X
                    </button>
                    <Image src="/Manual.png" width={800} height={500} alt="/Manual.png" />
                    <Link href="/roadmap" className={st.manualCloseBtn}>
                        More Details
                    </Link>
                </div>
            )}
            <div className={st.distributeBox}>
                <span>Winner DAO Donater Will Receive</span>
                <br></br>
                <span className={st.distributeSOL}>{distributeSol}</span>
                <br></br>
                {timeloading() ? (
                    <div>
                        <span>{`DATE : ${month + 1} / ${days}`}</span>
                        <br></br>
                        <span>{`TIME(UTC) : ${time.toString().padStart(2, "0")} : ${minute.toString().padStart(2, "0")} : ${second
                            .toString()
                            .padStart(2, "0")}`}</span>
                        <br></br>
                        <span className={st.sunday}>DISTRIBUTE AND SNAPSHOT TAKES ON EVERY SUNDAY 00:00:00</span>
                        <br></br>
                    </div>
                ) : (
                    <span>DATE : loading... TIME : loading...</span>
                )}
            </div>
            {/* <hr></hr> */}
            <div className={st.sendBtnBox}>
                <SendBtn daoname={"SMB"} />
                <SendBtn daoname={"GGSG"} />
                <SendBtn daoname={"FFF"} />
                <SendBtn daoname={"Degod"} />
                <SendBtn daoname={"Taiyo"} />
            </div>
            <div className={st.sendBtnBox}>
                <SendBtn daoname={"ComingSoon"} />
                <SendBtn daoname={"ComingSoon"} />
                <SendBtn daoname={"ComingSoon"} />
                <SendBtn daoname={"ComingSoon"} />
                <SendBtn daoname={"ComingSoon"} />
            </div>
        </div>
    );
};

export default D2E;
