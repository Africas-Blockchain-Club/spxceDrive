import React from "react";
import Hero from "./hero";
import Features from "./features";
import Footer from "./ui/footer";


const ConnectButton = (props: {connect: Function}) => {
    return (
        <div className="btn btn-primary" onClick={async () => { props.connect() }}>Connect</div>
    );
}

{/* <ConnectButton  connect={props.connect} />     */}

// return (
//     <section className='bg-indigo-700 py-20 mb-4'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
//         <div className='text-center'>
//           <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
//             {"Become a React Dev"}
//           </h1>
//           <p className='my-4 text-xl text-white'>{"Find the React job that fits your skill set"}</p>
//           <ConnectButton  connect={props.connect} />
//         </div>
//       </div>
//     </section>
//   );



const LandingPage = (props: {connect: Function}) => {

    return (
        <>
        <Hero connect={props.connect}/>
        <Features />
        {/* <Footer /> */}
    
      </>
    );
}


export default  LandingPage;

