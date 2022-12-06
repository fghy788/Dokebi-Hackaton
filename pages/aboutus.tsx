import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import st from "../styles/aboutus.module.css";

const AboutUs = () => {
    const [manual, setManual] = useState(0);
    const click1 = () => {
        if (manual !== 1) {
            setManual(1);
        } else {
            setManual(0);
        }
    };
    const click2 = () => {
        if (manual !== 2) {
            setManual(2);
        } else {
            setManual(0);
        }
    };
    const click3 = () => {
        if (manual !== 3) {
            setManual(3);
        } else {
            setManual(0);
        }
    };
    const click4 = () => {
        if (manual !== 4) {
            setManual(4);
        } else {
            setManual(0);
        }
    };
    const click5 = () => {
        if (manual !== 5) {
            setManual(5);
        } else {
            setManual(0);
        }
    };

    return (
        <div>
            <Head>
                <title>Dokebi-Roadmap</title>
            </Head>
            <header>
                <Link className={st.header} href="/">
                    Dokebi
                </Link>
            </header>
            <div className={st.main}>
                <button onClick={click1} className={st.spantitle}>
                    {`What is Dokebi?`}
                </button>
                {manual === 1 && (
                    <div className={st.spandiv}>
                        <span className={st.spannormal}>Dokebi creates a platform for creating NFT Royalty DApps.</span>
                        <span className={st.spannormal}>Dokebi takes 10% Fees for every action from our Platform.</span>
                        <span className={st.spannormal}>The collected fees are distributed on Sunday.</span>
                        <span className={st.spannormal}>60% to Dokebi NFT holders.</span>
                        <span className={st.spannormal}>30% to the Team.</span>
                        <span className={st.spannormal}>10% to One of SMB Holders (Raffle).</span>
                    </div>
                )}
                <button onClick={click2} className={st.spantitle}>
                    {`Donate To Earn`}
                </button>
                {manual === 2 && (
                    <div className={st.spandiv}>
                        <span className={st.spannormal}>About D2E</span>
                        <span className={st.spannormal}>Donate to Earn is literally donate for your dao or favorite daos and earn!</span>
                        <span className={st.spannormal}>How to earn?</span>
                        <br></br>
                        <span className={st.spannormal}>If A DAO donate 2.2sol-A DAO receive 1.1sol</span>
                        <span className={st.spannormal}>If B DAO donate 2sol-B DAO receive 1sol</span>
                        <span className={st.spannormal}>If C DAO donate 3sol-C DAO receive 1.5sol</span>
                        <span className={st.spannormal}>If D DAO donate 2sol-D DAO receive 1sol</span>
                        <span className={st.spannormal}>If E DAO donate 2.4sol-E DAO receive 1.2sol</span>
                        <br></br>
                        <span className={st.spannormal}>
                            leftover SOL going to distribute wallet A DAO 1.1sol + B DAO 1sol + C DAO 1.5sol + D DAO 1sol + E DAO 1.2sol
                        </span>
                        <span className={st.spannormal}>distribute wallet balance going to 5.8SOL</span>
                        <span className={st.spannormal}>
                            Distribute wallet SOL going to distribute to rank 1 donater dao = C DAO donaters will receive 5.8SOL almost 2x porfit
                        </span>
                    </div>
                )}
                <button onClick={click3} className={st.spantitle}>
                    {`Donate to Raffle`}
                </button>
                {manual === 3 && (
                    <div className={st.spandiv}>
                        <span className={st.spannormal}>About D2R</span>
                        <span className={st.spannormal}>Donate Raffle is Raffle DApps for NFTs FP and NFTs Royalty</span>
                        <span className={st.spannormal}>We open Raffle with NFTs like SMB,FFF,Degod</span>
                        <br></br>
                        <span className={st.spannormal}>Every Raffle ticket price is 0.1SOL</span>
                        <span className={st.spannormal}>If someone buy SMB Raffle ticket</span>
                        <span className={st.spannormal}>0.07sol to buy other SMB for raffle</span>
                        <span className={st.spannormal}>0.03sol to SMB DAO</span>
                        <br></br>
                        <span className={st.spannormal}>If someone buy Degod Raffle ticket</span>
                        <span className={st.spannormal}>0.07sol to buy other Degod for raffle</span>
                        <span className={st.spannormal}>0.03sol to Degod DAO</span>
                        <br></br>
                        <span className={st.spannormal}>Donate Raffle mechanism</span>
                        <span className={st.spannormal}>
                            {"Raffle get hyped->Gather more money->Sweep NFTs floor for raffle nfts->FP going high->"}
                        </span>
                        <span className={st.spannormal}>{"Raffle get hyped->Donate more->everyone can earn with this mechanism DAO,NFT Holder"}</span>
                    </div>
                )}
                <button onClick={click4} className={st.spantitle}>
                    {`Donate for Utility`}
                </button>
                {manual === 4 && (
                    <div className={st.spandiv}>
                        <span className={st.spannormal}>About D2U</span>
                        <span className={st.spannormal}>Donate to Utility is Donate DApps for utility what holder want</span>
                        <span className={st.spannormal}>Donate to Utility like crowdfunding</span>
                        <span className={st.spannormal}>{"It has three steps Suggest->Funding->Vote for distirbute"}</span>
                        <br></br>
                        <span className={st.spannormal}>Suggest</span>
                        <span className={st.spannormal}>If some holder suggest Degod need token</span>
                        <br></br>
                        <span className={st.spannormal}>Funding</span>
                        <span className={st.spannormal}>If Holders think they need token for Degod</span>
                        <span className={st.spannormal}>Holders going to donate money for Token-suggestion</span>
                        <br></br>
                        <span className={st.spannormal}>Vote for distirbute</span>
                        <span className={st.spannormal}>Let's assume Donating SOL going to 100sol</span>
                        <span className={st.spannormal}>Let's assume Degod DAO going to made token like $dust</span>
                        <span className={st.spannormal}>Holders vote if they satisfied</span>
                        <span className={st.spannormal}>If satisfied holders over than 50% 90%SOL going to Degod DAO and 10% to suggester</span>
                        <br></br>
                        <span className={st.spannormal}>This prevent projects going to slow rug.</span>
                        <span className={st.spannormal}>And 10% to suggester going to made more suggest for their DAO and for own profit</span>
                        <br></br>
                        <span className={st.spannormal}>Donate participant vote</span>
                    </div>
                )}
                <button onClick={click5} className={st.spantitle}>
                    {`Mobile`}
                </button>
                {manual === 5 && (
                    <div className={st.spandiv}>
                        <span className={st.spannormal}>{"Dokebi Platform AppVersion will come for easy Donate"}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
export default AboutUs;
