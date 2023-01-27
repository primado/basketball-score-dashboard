import React from "react";

//images
import court from "../assets/court.jpg";


export default function Dashboard() {

    return (
        <div>
            <section className="bg-bg_dark_grey py-32 w-screen h-sc h-screen">
                <div className="main-container">
                    <h1 className="text-[#fff] text-3xl text-center font-roboto font-extrabold mb-5">Dashboard</h1>

                    <div className="container grid grid-cols-2 gap-20 place-items-center justify-items-center">

                        <div className="img-container">
                            <img className="w-1/4 block border border-[#fff] m-auto"
                            src={court} alt="Basket Ball Court"/>
                        </div>

                        <div className="shot-container">
                            <div className="shot">
                                <h2 className="text-[#fff] text-xl mb-2 font-roboto font-semibold "
                                > SHOTS
                                </h2>

                                <div 
                                className="shot-data text-[#000] text-center font-black font-roboto text-4xl bg-bg_white w-40 py-10 max-w-[10rem]"
                                >
                                    3
                                </div>
                            </div>
                        </div>

                        <div className="score-container">
                            <div className="score">

                                <h2 className="text-[#fff] text-xl mb-2 font-roboto font-semibold"
                                > SCORE
                                </h2>

                                <div className="score-data  text-[#000] font-black font-roboto text-center text-4xl  bg-bg_white w-40 py-10 max-w-[10rem]">
                                    00
                                </div>
                            </div>
                        </div>

                        <div className="clock">
                            <h2 className="text-[#fff] text-xl font-roboto font-semibold mb-2"
                            > Shot Clock
                            </h2>
                            <div className="clock-data text-[#000] font-roboto font-black text-center text-4xl bg-bg_white w-40 py-10 max-w-[10rem]">
                                50
                            </div>
                        </div>

                    </div>
                
                </div>
            </section>

        </div>
    );
}