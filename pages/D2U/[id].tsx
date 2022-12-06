import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import st from "../../styles/id.module.css";
import Head from "next/head";
import { useState } from "react";

const WalletMultiButtonDynamic = dynamic(async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton, { ssr: false });
const Suggestion = () => {
    const [suggest, setsuggest] = useState("");
    const [amount, setamount] = useState(0);
    let [suggestions, setsuggestions] = useState(["How about Token?"]);

    const suggestbinput = (e: any) => {
        setsuggest(e.target.value);
    };
    const suggestbtn = () => {
        setsuggestions((prev) => [...prev, suggest]);
    };
    const donatebtn = () => {
        setamount((cur) => Math.floor((cur + 0.12) * 10) / 10);
        alert("You donate 0.1SOL!");
    };

    return (
        <div>
            <Head>
                <title>Dokebi-D2U</title>
            </Head>
            {/* header */}
            <header className={st.headerbox}>
                <Link href="/aboutus">Donate Utility?</Link>
                <Link href="/">Dokebi</Link>
                <WalletMultiButtonDynamic className={st.wallet} />
            </header>
            <div className={st.main}>
                <div className={st.title}>
                    <span className={st.maintitle}>SMB Suggestion</span>
                </div>
                <div className={st.suggestion}>
                    <input className={st.suggestioninput} onChange={suggestbinput} type="text"></input>
                    <button className={st.suggestionbtn} onClick={suggestbtn}>
                        Suggest
                    </button>
                </div>
                <div className={st.suggestions}>
                    <></>
                    {suggestions.map((e, index) => {
                        return (
                            <div key={index} className={st.suggestionsbody}>
                                <span>{e}</span>
                                <div>
                                    <span className={st.amount}>{amount}</span>
                                    <button onClick={donatebtn} className={st.donateBtn}>
                                        Donate 0.1SOL
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
