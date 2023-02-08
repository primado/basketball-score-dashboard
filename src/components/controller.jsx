import React from "react";
import { Outlet, Link } from "react-router-dom";

//images
import Console from "../assets/console.svg";
import Settings from "../assets/settings.svg";
import Afrilogic from "../assets/afrilogic.svg";




export default function controller() {
    return (
        <div>

            <section className="bg-home-bg bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col w-screen h-screen font-roboto md-810:h-screen md-810:flex md-810:justify-start md-810:items-center md-810:py-16">
                <div>
                    <h1 className="text-white text-4xl font-extrabold my-8 ">Game Controller</h1>
                </div>

                <div className="bg-white w-7/12 rounded-xl  md-810:w-10/12 md-690:px-10">
                   
                    <form action="">
                        <div className="form__group w-full flex flex-col justify-center items-center mt-20">
                            <label className="font-montserrat font-medium text-2xl mb-2" htmlFor="player name">Player Name</label>
                            <input className="form-input w-7/12 font-normal font-roboto rounded-lg bg-[#D9D9D9]"
                             type="text"  placeholder="Player Name" 
                            />

                            <input   className="bg-black text-white font-montserrat font-bold text-xl w-52 py-3 rounded-lg mt-5 hover:bg-blue-700 hover:ease-in-out hover:duration-300"
                            type="button" name="" value="Start Game"
                             />
                            <input   className="text-black border-2 border-gray-600 font-montserrat font-bold text-xl w-52 py-3 rounded-lg mt-5 hover:bg-blue-700 hover:text-white hover:border-none hover:ease-in-out hover:duration-300"
                            type="button" name="" value="Reset"
                             />
                        </div>  
                    </form>

                    <div className="mb-10 mt-10">
                        <div className="flex flex-row items-baseline justify-center gap-10">
                            <div className="">
                                <img src={Console} alt="Console" className=" w-32 md-810:w-40 " 
                                />
                                {/* <label className="text-center mt-2 font-montserrat text-md font-semibold md-690:text-xl">Game Mode:</label> */}
                                <select name="Game Modes" id="gmodes" className="bg-[#D9D9D9] font-montserrat font-semibold text-sm rounded-lg">
                                    <option value="label">--Game Modes--</option>
                                    <option value="single" className="">Single Player</option>
                                    <option value="multi" className="">Multi Player</option>
                                </select>
                            </div>

                            <div className="">
                                <a href="https://afrilogicsolutions.com" target="_blank">
                                    <img src={Afrilogic} alt="Afrilogic Solutions Logo" className="w-40"/>
                                </a>
                            </div>

                            <div className="">
                                <Link to={`/config`}>
                                    <img src={Settings} alt="Settings" className=" w-20 md-810:w-20 md-690:w-20"
                                    />
                                    <p className="text-center mt-2 font-montserrat text-2xl font-semibold">Settings</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </section>            
        </div>
    )
}