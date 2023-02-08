import React from "react";

//images
import court from "../assets/court.jpg";


export default function Dashboard() {

    return (
        <div>
            <section className="bg-home-bg bg-no-repeat bg-center bg-cover py-24 w-full h-full sm-412:h-screen sm-412:w-screen sm-412:px-12 sm-412:py-20 sm-428:px-12 sm-428:py-20 sm-428:w-screen sm-428:h-screen md-810:h-screen md-768:w-screen md-768:h-screen md-900:w-screen md-900:h-screen md-1080:w-screen md-1080:h-screen">
                <div className="main-container">
                    <h1 className="text-[#fff] text-3xl text-center font-roboto font-extrabold mb-12 sm-375:mb-8 sm-425:text-base 2xl-1440:text-5xl 3xl-2560:text-5xl">Dashboard</h1>

                    <div className="container flex flex-row justify-center items-center mb-16 md-810:gap-40">

                        <div className="img-container">
                            <img className="w-1/4 block border border-[#fff]  sm-360:w-48 sm-412:w-48 md-810:w-52"
                            src={court} alt="Basket Ball Court"/>
                        </div>

                        <div className="shot-container">
                            <div className="shot">
                                <h2 className="text-[#fff] text-3xl mb-2 text-center  font-roboto font-semibold "
                                > SHOTS
                                </h2>

                                <div 
                                className="shot-data text-[#000]  font-black font-roboto text-7xl bg-bg_white flex justify-center items-center w-40 h-24 max-w-[10rem] max-h-24 sm-412:w-36 sm-412:h-40 sm-412:text-5xl sm-428:w-36 sm-428:h-40 sm-428:text-5xl"
                                >
                                    3
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container flex flex-row items-baseline justify-center gap-28 md-810:gap-20 md-690:gap-10">
                        <div className="score-container">
                            <div className="score">

                                <h2 className="text-[#fff] text-3xl text-center mb-2 font-roboto font-semibold  md-690:text-3xl"
                                > SCORE
                                </h2>

                                <div className="score-data  text-[#000] font-black font-roboto  text-9xl  bg-bg_white flex justify-center items-center w-72 h-60 max-w-[18rem] max-h-60 md-810:w-48 md-810:text-9xl md-690:text-8xl md-690:h-48"
                                >
                                    00
                                </div>
                            </div>
                        </div>

                        <div className="username">
                            <h2 className="font-montserrat text-2xl font-semibold text-white">Username</h2>
                        </div>

                        <div className="clock">
                            <h2 className="text-[#fff] text-3xl text-center font-roboto font-semibold mb-2 md-690:text-3xl"
                            > SHOT CLOCK
                            </h2>
                            <div className="clock-data text-[#000] font-roboto font-black text-center text-9xl bg-bg_white flex justify-center items-center w-72 h-60 max-w-[18rem] max-h-60  md-810:w-48 md-810:text-9xl md-690:text-8xl md-690:h-48"
                            >
                                50
                            </div>
                        </div>

                    </div>
                
                </div>
            </section>

        </div>
    );
}