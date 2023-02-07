import React from "react";
import { Dropdown } from "flowbite-react";


//images
import plus from "../assets/icons-plus.png";


export default function Config() { 

    return (
        <div>
            <section className="bg-home-bg bg-no-repeat bg-center bg-cover w-screen h-screen flex justify-center items-center flex-col md-810:w-screen md-810:h-screen  md-810:flex md-810:justify-start md-810:items-center md-810:py-16">
                <h1 className="text-white text-4xl font-montserrat font-extrabold my-8">Settings</h1>

                <div className="bg-white w-7/12 py-16 rounded-lg  md-810:w-10/12 md-690:px-10">
                    <div className="container">
                        <form action="" className="font-montserrat">
                            <div className="form__group flex justify-center items-center flex-row mb-8">
                                <label className="font-semibold text-2xl mr-10 md-690:text-lg" htmlFor="">TIMER SETTINGS</label>
                                <input className="font-roboto font-medium text-lg bg-[#D9D9D9]" type="text" placeholder="Time..." />
                            </div>

                            <div className=" flex justify-center items-center flex-row mb-8">
                                <label htmlFor="" className="font-semibold text-2xl mr-14 md-690:text-lg">Videos</label>
                                <div className="flex flex-row justify-end w-36 items-end bg-[#D9D9D9]">
                                    <input type="file" id="upload" hidden/>
                                    <label htmlFor="upload" className="bg-black flex justify-center items-center w-10 ">
                                        {/* <img className="" src={plus}  alt="plus" /> */}
                                        <i class="fa-solid fa-plus text-white text-3xl text-center"></i>
                                    </label>
                                </div>
                            </div>

                            <div className="form__group flex justify-center items-center flex-row mb-10">
                                <h2 className="mr-48 font-semibold text-2xl font-montserrat md-690:text-lg">COLOURS</h2>
                                <div className="hidden">5</div>
                            </div>

                                <div className="flex justify-center items-center flex-row gap-16">


                                    <div className="p-shot flex flex-col">
                                        <label htmlFor="perfect-shot" className="font-montserrat font-semibold text-xl">Perfect Shot</label>
                                        <select name="" id="perfect-shot" className="font-montserrat font-medium text-base bg-[#D9D9D9]">
                                            <option value="1" selected>Red</option>
                                            <option value="2">Yellow</option>
                                            <option value="3">Green</option>
                                        </select>
                                    </div>
                                    <div className="p-shot flex flex-col">
                                        <label htmlFor="perfect-shot" className="font-montserrat font-semibold text-xl">Miss Shot</label>
                                        <select name="" id="perfect-shot" className="font-montserrat font-medium text-base bg-[#D9D9D9]">
                                            <option value="1" selected>Red</option>
                                            <option value="2">Yellow</option>
                                            <option value="3">Green</option>
                                        </select>
                                    </div>
                                    <div className="p-shot flex flex-col">
                                        <label htmlFor="perfect-shot" className="font-montserrat font-semibold text-xl">Bank Shot</label>
                                        <select name="" id="perfect-shot" className="font-montserrat font-medium text-base bg-[#D9D9D9]">
                                            <option value="1" selected>Red</option>
                                            <option value="2">Yellow</option>
                                            <option value="3">Green</option>
                                        </select>
                                    </div>
                                
                                </div>

                            

                        </form>
                    </div>
                </div>

            </section>

        </div>
    )

}