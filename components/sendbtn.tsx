import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SendBtn = ({ daoname }: any) => {
    const { publicKey } = useWallet();

    const [walletbalance, setWalletBalance] = useState(0);
    const [donateAmount, setDonateAmount] = useState(1);

    const getbal = async () => {
        setWalletBalance(0);
    };

    useEffect(() => {
        getbal();
    }, []);

    const handleDonateAmountPlus = () => {
        setDonateAmount((cur) => cur + 1);
    };
    const handleDonateAmountMinus = () => {
        if (donateAmount != 1) setDonateAmount((cur) => cur - 1);
        else setDonateAmount(1);
    };
    const handleDonateAmountPlusPlus = () => {
        setDonateAmount((cur) => cur + 10);
    };
    const handleDonateAmountMinusMinus = () => {
        if (donateAmount - 10 < 1) setDonateAmount(1);
        else setDonateAmount((cur) => cur - 10);
    };
    const onClick = () => {
        setWalletBalance((cur) => cur + 0.1 * donateAmount);
        alert(`you send sol${donateAmount}!!`);
    };

    return (
        <div className="mainbox">
            <span className="title">{daoname}</span>
            <Image src={`/api/${daoname}`} width={150} height={150} alt="/SMB.avif" priority />
            <span className="amount">Wallet {walletbalance.toString().slice(0, 4)} SOL</span>
            <div className="amountbox">
                <div>
                    <button className="pmBtn" onClick={handleDonateAmountMinusMinus}>{`<<`}</button>
                    <button className="pmBtn" onClick={handleDonateAmountMinus}>{`<`}</button>
                </div>
                <span className="pmfont">{(0.1 * donateAmount).toString().slice(0, 4)}</span>
                <div>
                    <button className="pmBtn" onClick={handleDonateAmountPlus}>{`>`}</button>
                    <button className="pmBtn" onClick={handleDonateAmountPlusPlus}>{`>>`}</button>
                </div>
            </div>
            <button className="donateBtn" onClick={onClick} disabled={!publicKey || daoname === "ComingSoon"}>
                Donate
            </button>

            <style jsx>
                {`
                    .title {
                        margin: 3px 0px;

                        font-family: bd-micronfont, sans-serif;
                        font-weight: 400;
                        font-style: normal;
                    }
                    .amount {
                        margin: 3px 0px;

                        font-size: 18px;

                        font-family: montserrat, sans-serif;
                        font-weight: 600;
                        font-style: normal;
                    }
                    .mainbox {
                        margin: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 150px;

                        background-color: #807761;
                        border-radius: 10px;

                        text-align: center;
                        color: #403b30;
                        font-size: 20px;
                        font-weight: 600;
                    }
                    .mainbox:hover {
                        transform: scale(1.05);
                    }
                    .amountbox {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .donateBtn {
                        background-color: #403b30;
                        margin: 10px;
                        height: 30px;

                        border: 0;
                        border-radius: 10px;

                        color: #807761;
                        font-size: 20px;
                        box-shadow: 5px 5px 7px #403b30;

                        font-family: bd-micronfont, sans-serif;
                        font-weight: 300;
                        font-style: normal;
                    }
                    .donateBtn:hover {
                        transform: scale(1.1);
                        cursor: pointer;
                    }
                    .donateBtn:disabled {
                        opacity: 0.3;
                    }
                    .pmBtn {
                        background-color: #403b30;
                        border: 2px;
                        margin: 2px;
                        color: #807761;
                        border-radius: 10px;
                    }
                    .pmBtn:hover {
                        transform: scale(1.1);
                        cursor: pointer;
                    }
                    .pmfont {
                        font-size: 15px;

                        font-family: montserrat, sans-serif;
                        font-weight: 600;
                        font-style: normal;
                    }
                `}
            </style>
        </div>
    );
};

export default SendBtn;
