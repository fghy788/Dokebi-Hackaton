import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Raffle } from "../components/raffle";
import st from "../styles/D2R.module.css";
import Head from "next/head";
import { Util } from "../components/util";

const WalletMultiButtonDynamic = dynamic(async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton, { ssr: false });
const D2U = () => {
    return (
        <div>
            <Head>
                <title>Dokebi-D2U</title>
            </Head>
            {/* header */}
            <header className={st.headerbox}>
                <Link href="/aboutus">Donate Raffle?</Link>
                <Link href="/">Dokebi</Link>
                <WalletMultiButtonDynamic className={st.wallet} />
            </header>
            <div className={st.main}>
                <Util daoname={"SMB"}></Util>
                <Util daoname={"Degod"}></Util>
                <Util daoname={"FFF"}></Util>
            </div>
        </div>
    );
};

export default D2U;
