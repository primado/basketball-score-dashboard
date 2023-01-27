import React from "react";

//images
import court from "../assets/court.jpg";


export default function Dashboard() {

    return (
        <div>
            <section className="bg-bg_dark_grey py-32 w-screen h-sc h-screen sm-412:px-8 sm-428:px-8 2xl-1440:py-20 lg-1024:py-16">
                <div className="main-container">
                    <h1 className="text-[#fff] text-3xl text-center font-roboto font-extrabold mb-12 sm-375:mb-8 sm-425:text-base 2xl-1440:text-5xl 3xl-2560:text-5xl">Dashboard</h1>

                    <div className="container grid grid-cols-2 gap-20 place-items-center justify-items-center">

                        <div className="img-container">
                            <img className="w-1/4 block border border-[#fff] m-auto sm-412:w-40 md-810:w-52"
                            src={court} alt="Basket Ball Court"/>
                        </div>

                        <div className="shot-container">
                            <div className="shot">
                                <h2 className="text-[#fff] text-xl mb-2 font-roboto font-semibold sm-412:text-lg"
                                > SHOTS
                                </h2>

                                <div 
                                className="shot-data text-[#000] text-center font-black font-roboto text-4xl bg-bg_white flex justify-center items-center w-40 h-20 max-w-[10rem] sm-412:w-28 max-h-20 sm-412:m-w-[7rem] sm-412:h-20 sm-428:w-32 sm-428:max-w-[8rem]"
                                >
                                    3
                                </div>
                            </div>
                        </div>

                        <div className="score-container">
                            <div className="score">

                                <h2 className="text-[#fff] text-xl mb-2 font-roboto font-semibold sm-412:text-lg"
                                > SCORE
                                </h2>

                                <div className="score-data  text-[#000] font-black font-roboto text-center text-4xl  bg-bg_white flex justify-center items-center w-40 h-40  max-w-[10rem] sm-412:w-28 sm-412:max-w-[7rem] sm-412:h-28 sm-428:w-32 sm-428:max-w-[8rem] sm-428:max-h-28"
                                >
                                    00
                                </div>
                            </div>
                        </div>

                        <div className="clock">
                            <h2 className="text-[#fff] text-xl font-roboto font-semibold mb-2 sm-412:text-lg"
                            > SHOT CLOCK
                            </h2>
                            <div className="clock-data text-[#000] font-roboto font-black text-center text-4xl bg-bg_white flex justify-center items-center w-40 h-40 max-w-[10rem] max-h-40 sm-412:w-28 sm-412:max-w-[7rem] sm-428:w-32 sm-428:max-w-[8rem] sm-412:h-28 sm-428:max-h-28"
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