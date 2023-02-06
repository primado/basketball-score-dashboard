import React from "react";

//images
import Console from "../assets/console.svg";
import Settings from "../assets/settings.svg";
import Afrilogic from "../assets/afrilogic.svg";




export default function controller() {
    return (
        <div>

            <section className="bg-home-bg bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col w-screen h-screen font-roboto ">
                <div>
                    <h1 className="text-white text-4xl font-extrabold my-8 ">Game Controller</h1>
                </div>

                <div className="bg-white w-7/12 rounded-xl ">
                   
                    <form action="">
                        <div className="form__group w-full flex flex-col justify-center items-center mt-20">
                            <label className="font-montserrat font-medium text-2xl mb-2" htmlFor="">Player Name</label>
                            <input className="form-input w-7/12 font-normal font-roboto rounded-lg"
                             type="text"  placeholder="Player Name" 
                            />

                            <input   className="bg-black text-white font-montserrat font-bold text-xl w-52 py-3 rounded-lg mt-5 hover:bg-blue-700 hover:ease-in-out hover:duration-300"
                            type="button" name="" value="Start Game"
                             />
                        </div>  
                    </form>

                    <div className="mb-10 mt-10">
                        <div className="flex flex-row items-baseline justify-center gap-10">
                            <div className="">
                                <a href="#">
                                    <img src={Console} alt="Console" />
                                    <p className="text-center mt-2 font-montserrat text-2xl font-semibold">Game Mode</p>
                                </a>
                            </div>

                            <div className="">
                                <a href="#">
                                    <img src={Afrilogic} alt="Afrilogic Solutions Logo" />
                                </a>
                            </div>

                            <div className="">
                                <a href="#">
                                    <img src={Settings} alt="Settings" />
                                    <p className="text-center mt-2 font-montserrat text-2xl font-semibold">Settings</p>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </section>            
        </div>
    )
}