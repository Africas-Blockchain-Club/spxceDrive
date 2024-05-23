import React from "react";
import Hero from "./hero";
import Features from "./features";
import Footer from "./ui/footer";


const ConnectButton = (props: { connect: Function }) => {
    return (
        <div className="btn btn-primary" onClick={async () => { props.connect() }}>Connect</div>
    );
}



const LandingPage = (props: { connect: Function }) => {

    return (
        <div className=" flex justify-between items-center">

            <section className="w-1/2 bg-blue">
                <p className="text-6xl text-slate-900 font-bold">Decentralized File Sharing</p>
                <p className="text-lg py-4  text-slate-600">In a world where centralized control over data has become the norm, we offer a paradigm shift towards user empowerment and data sovereignty.</p>
                <ConnectButton connect={props.connect} />

            </section>

            <img
                src="serverroom.png"
                className="w-2/5">
            </img>

        </div>
    );
}


export default LandingPage;

