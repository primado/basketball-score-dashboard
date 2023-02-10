import React from "react";


//images
import Settings from "../assets/settings.svg";


export default function Controller_2() {

    return (

        <div className="controller-2">
            <section className="bg-home-bg bg-no-repeat bg-center bg-cover w-screen h-screen flex flex-col justify-start items-center py-20">
                <div className="title">
                    <h1 className="font-montserrat text-white font-semibold text-3xl">Game Controller</h1>
                </div>

                <div className="bg-white w-6/12 py-8">

                    <div className="settings flex flex-row justify-end pr-8">
                        <img 
                        src={Settings}
                        alt="settings" 
                        className="w-10 h-10"
                        />
                    </div>

                    <div className="">
                        <form action="#">
                            <div className="form__group flex flex-col border">
                                {/* <label htmlFor="player name">Player Name</label> */}
                                <div className="flex flex-col justify-center items-center gap-8 ">
                                    <input 
                                        type="text"
                                        id="player_name1"
                                        name="player_name1"
                                        value=""
                                        onChange=""
                                        placeholder="Player 1 name"
                                        className="form-input font-montserrat text-base font-medium w-7/12 bg-[#D9D9D9] rounded-lg"
                                    />
                                    <div className="flex flex-row gap-8">
                                        <input 
                                        type="submit" 
                                        name="" 
                                        value="START GAME"
                                        className="bg-black text-white font-montserrat font-bold text-lg w-40 py-2 rounded-lg hover:bg-blue-700 hover:ease-in-out hover:duration-300"
                                        />
                                        <input 
                                        type="submit" 
                                        name="" 
                                        value="START GAME"
                                        className="border-2 border-gray-600 text-black font-montserrat font-bold text-lg w-40 py-2 rounded-lg hover:bg-blue-700 hover:text-white hover:border-white hover:ease-in-out hover:duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </section>

        </div>
    )
}