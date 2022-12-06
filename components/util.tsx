import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Util = ({ daoname }: any) => {
    return (
        <div className="mainbox">
            <Link href={`/D2U/${daoname}`}>
                <span className="title">{daoname}</span>
                <Image src={`/api/${daoname}`} width={200} height={200} alt="/SMB.avif" priority />
                <span className="title">Go to Suggestion</span>
            </Link>
            <style jsx>
                {`
                    .title {
                        margin: 3px 0px;

                        color: #403b30;
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
                `}
            </style>
        </div>
    );
};
