import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Raffle = ({ daoname }: any) => {
    const { publicKey } = useWallet();

    const [walletbalance, setWalletBalance] = useState(0);
    const [raffleamount, setraffleamount] = useState(1);

    const getbal = async () => {
        setWalletBalance(0);
    };

    useEffect(() => {
        getbal();
    }, []);

    const handleraffleamountPlus = () => {
        setraffleamount((cur) => cur + 1);
    };
    const handleraffleamountMinus = () => {
        if (raffleamount != 1) setraffleamount((cur) => cur - 1);
        else setraffleamount(1);
    };
    const handleraffleamountPlusPlus = () => {
        setraffleamount((cur) => cur + 10);
    };
    const handleraffleamountMinusMinus = () => {
        if (raffleamount - 10 < 1) setraffleamount(1);
        else setraffleamount((cur) => cur - 10);
    };
    const onClick = () => {
        setWalletBalance(raffleamount);
        alert(`you bought ${raffleamount} ticket!!`);
    };

    return (
        <div className="mainbox">
            <span className="title">{daoname} Raffle</span>
            <Image src={`/api/${daoname}`} width={200} height={200} alt="/SMB.avif" priority />
            <span className="amount">{walletbalance.toString().slice(0, 4)} ticket</span>
            <span className="time">Remain time : 03:12:15</span>
            <div className="amountbox">
                <div>
                    <button className="pmBtn" onClick={handleraffleamountMinusMinus}>{`<<`}</button>
                    <button className="pmBtn" onClick={handleraffleamountMinus}>{`<`}</button>
                </div>
                <span className="pmfont">{(1 * raffleamount).toString().slice(0, 4)}</span>
                <div>
                    <button className="pmBtn" onClick={handleraffleamountPlus}>{`>`}</button>
                    <button className="pmBtn" onClick={handleraffleamountPlusPlus}>{`>>`}</button>
                </div>
            </div>
            <button className="raffleBtn" onClick={onClick} disabled={!publicKey || daoname === "ComingSoon"}>
                Buy
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
                    .time {
                        font-size: 10px;

                        font-family: montserrat, sans-serif;
                        font-weight: 600;
                        font-style: normal;
                    }
                    .mainbox {
                        margin: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 200px;

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
                    .raffleBtn {
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
                    .raffleBtn:hover {
                        transform: scale(1.1);
                        cursor: pointer;
                    }
                    .raffleBtn:disabled {
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
