import { useState } from "react";

import SecondaryButton from "./secondary-button";

import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

export default function TipButton({ keyboardsContract, index }) {
    const contractAddress = '0x5B262c3d59F61d844f705C23aE7A7e491F2416de';
    const contractABI = abi.abi;

    const [mining, setMining] = useState(false)

    const submitTip = async (e) => {
        if (!keyboardsContract) {
            console.error('KeyboardsContract object is required to submit a tip');
            return;
        }

        setMining(true);
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const keyboardsContract = new ethers.Contract(contractAddress, contractABI, signer);

            const tipTxn = await keyboardsContract.tip(index, { value: ethers.utils.parseEther("0.02") })
            console.log('Tip transaction started...', tipTxn.hash)

            await tipTxn.wait();
            console.log('Sent tip!', tipTxn.hash);
        } finally {
            setMining(false);
        }
    }

    return <SecondaryButton onClick={submitTip} disabled={mining}>
        {mining ? 'Tipping...' : 'Tip 0.02 eth'}
    </SecondaryButton>
}
