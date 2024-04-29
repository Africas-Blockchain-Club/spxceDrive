import { connect } from "http2";
import React from "react";


const ConnectButton = (props: {connect: Function}) => {
    return (
        <div className="btn btn-primary" onClick={async () => { props.connect() }}>Connect</div>
    );
}


const LandingPage = (props: {connect: Function}) => {

    return (
        <ConnectButton  connect={props.connect} />    
    );
}


export default  LandingPage;

