import React from "react";


// images
import crown from "../assets/crown.svg"






export default function Leaderboard() {

    return (
        <div className="leaderboard">
             <section className="bg-home-bg bg-no-repeat bg-center bg-cover py-12  flex flex-col  gap-8 justify-start items-center w-screen h-screen">
                <div className="font-montserrat font-bold text-white text-3xl">
                    <h1>LEADERBOARD</h1>
                </div>
                <div className="bg-white w-3/6 flex justify-center items-center py-12 rounded-lg md-810:w-4/5">
                    <table className="border-collapse w-4/5 font-montserrat ">
                        <thead>
                            <tr className="bg-[#D9D9D9] h-10">
                                <th className="border-r border-black font-semibold">PLAYER</th>
                                <th className="border-r border-black font-semibold">POINTS</th>
                                <th className="border-none border-black font-semibold">PERFECT SHOTS</th>
                            </tr>
                        </thead>
                        <tbody className="font-montserrat">
                            <tr className="text-center h-12 bg-[#CECACA]">
                                <td className="border-r border-slate-700  font-medium">
                                    <div className="flex flex-row justify-center items-center gap-2">
                                        <img src={crown} alt="crown" className="" />
                                        <span className="">Selvien</span>
                                    </div>
                                </td>
                                <td className="border-r border-black font-medium">10</td>
                                <td className="border-none border-black font-medium">5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </section>
            
        </div>
    )
}