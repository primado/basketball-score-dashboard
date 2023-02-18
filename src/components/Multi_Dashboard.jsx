import React from "react";





export default function Multi_Dashboard() {

    return (
        <div>
            <div>
                <div className="bg-home-bg w-screen h-screen font-montserrat py-16">

                    <div className="desc text-white flex justify-center items-center place-items-center w-full">
                        {/* <div className="uppercase font-bold text-5xl">Player 1</div> */}
                        <div className="uppercase font-bold text-5xl">Smart Hoop</div>
                        {/* <div className="uppercase font-bold text-5xl">Player 2</div> */}
                    </div>  
                    <div className="">
                        <div className="play-shots flex flex-row justify-between items-center mt-16  px-20">
                            {/* <div className="uppercase text-white text-center"> */} 
                                {/* Score */}
                                <div className="flex flex-col gap-4">
                                    <label className="uppercase text-white font-bold text-center text-5xl">Player 1</label>
                                    <div className="player1 text-black bg-white flex justify-center items-center font-montserrat font-black text-9xl w-60 ">
                                        10
                                    </div>
                                </div>
                            {/* </div> */}
{/* 
                            <div className="text-white font-bold  text-6xl">
                                <span>Scores</span>
                            </div> */}
                            <div className="flex flex-col gap-4">
                                <label htmlFor="Player 2" className="uppercase text-white font-bold text-center text-5xl">Player 2</label>
                                <div className="player2 col-span-3 text-black bg-white flex justify-center items-center font-montserrat font-black text-9xl w-60 ">
                                    10
                                </div>
                            </div>
                        </div>

                        <div className=" fixed bottom-10  w-full md-810:bottom-60 ">
                            <div className=" flex flex-row justify-between gap-16 mt-12 px-20">
                                <div className="player1-shots flex flex-col gap-4">
                                    <label htmlFor="Player 1 shots" className="text-white uppercase text-center font-bold text-5xl">
                                        Shots
                                    </label>
                                    <div className="bg-white flex justify-center items-center text-black font-black text-9xl w-64 h-60">
                                        20
                                    </div>
                                </div>

                                    {/* 
                                <div className="player1-shots flex flex-col gap-4">
                                    <label htmlFor="Player 1 shots" className="text-white uppercase text-center font-bold text-5xl">
                                        Timer
                                    </label>
                                    <div className="bg-white flex justify-center items-center text-black font-black text-9xl w-64 h-60">
                                        20
                                    </div>
                                </div> */}



                                <div className="player2-shots flex flex-col gap-4">
                                    <label htmlFor="player 2 shots" className="text-white uppercase text-center font-bold text-5xl">
                                        Shots
                                    </label>
                                    <div className="bg-white flex justify-center items-center text-black font-black text-9xl w-64 h-60">
                                        20
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}