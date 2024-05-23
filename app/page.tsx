"use client";
import { useState } from "react";
import web3Instance from "./web3Utils/webInstance";
import spxceContract from "./web3Utils/contract/contract";
import MainContainer from "./components/Main";
import LandingPage from "./components/LandingPage";


export default function Home() {
  // const [account, setAccount] = useState<string>();
  const [isUser, setIsUser] = useState(false);

  const connect = async () => {
    if (global?.window?.ethereum) {
      console.log("connect")
      web3Instance.eth.requestAccounts().then(async (accounts: Array<string>) => {
        // setAccount(accounts[0])
        await login(accounts[0])
      })
      // console.log(accounts);
      // setAccount(accounts[0]);
      // awailogin()
    }

  }

  const login = async (account: string) => {
    const result = await spxceContract().methods.isUser().call();
    console.log(result);
    if (result) {
      setIsUser(true);
    } else {
      console.log(account);
      await spxceContract().methods.createUser().send({
        from: account,
        gasPrice: '1000000000', // Example gas price in wei (adjust as needed)
        gas: '3000000'
      }).then((error) => { console.log(error) });
    }
  }

  return (
    <main className="flex max-h-screen h-screen flex-col items-center font-mono justify-between p-24 relative w-full  bg-gradient-to-r from-violet-200 to-pink-200">
      {
        (isUser) ? <MainContainer />
          : <LandingPage connect={connect} />
      }
    </main>
  );
}
