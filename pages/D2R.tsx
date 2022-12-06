import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Raffle } from "../components/raffle";
import st from "../styles/D2R.module.css";
import Head from "next/head";

const WalletMultiButtonDynamic = dynamic(async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton, { ssr: false });
const D2R = () => {
    return (
        <div>
            <Head>
                <title>Dokebi-D2R</title>
            </Head>
            {/* header */}
            <header className={st.headerbox}>
                <Link href="/aboutus">Donate Raffle?</Link>
                <Link href="/">Dokebi</Link>
                <WalletMultiButtonDynamic className={st.wallet} />
            </header>
            <div className={st.main}>
                <Raffle daoname={"SMB"}></Raffle>
                <Raffle daoname={"Degod"}></Raffle>
                <Raffle daoname={"FFF"}></Raffle>
            </div>
        </div>
    );
};

export default D2R;
