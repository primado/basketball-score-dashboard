import React,{useState,useEffect} from "react";


// images
import crown from "../assets/crown.svg"
var address = import.meta.env.VITE_IP_ADDRESS;





export default function Leaderboard() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      fetch("http://"+address+":5000/players")
        .then(res => res.json())
        .then(data => setPlayers(data));
    }, []);
  
    return (
        <div className="leaderboard">
             <section className="bg-home-bg bg-no-repeat bg-center bg-cover py-12  flex flex-col  gap-8 justify-start items-center w-screen h-full">
                <div className="font-montserrat font-bold text-white text-3xl">
                    <h1>LEADERBOARD</h1>
                </div>
                <div className="bg-white w-3/6 flex justify-center items-center py-12 rounded-lg md-810:w-4/5 lg-1024:w-9/12">
                    <table className="border-collapse w-4/5 font-montserrat ">
                        <thead>
                            <tr className="bg-[#D9D9D9] h-10">
                                <th className="border-r border-black font-semibold">PLAYER</th>
                                <th className="border-r border-black font-semibold">POINTS</th>
                                <th className="border-none border-black font-semibold">PERFECT SHOTS</th>
                            </tr>
                        </thead>
                        <tbody className="font-montserrat">
                        {players.map((player, index) => (
                            <tr className="text-center h-12 bg-[#CECACA]" key={index}>
                                <td className="border-r border-slate-700  font-medium">
                                    <div className="flex flex-row justify-center items-center gap-2">
                                        {/* <img src={crown} alt="crown" className="" />
                                        <span className="">Sylvian</span> */}
                                        {index < 3 && <i className="fas fa-crown" pla />}{player.player_name}
                                    </div>
                                    
                                </td>
                                <td className="border-r border-black font-medium">{player.perfect_shot}</td>
                                <td className="border-none border-black font-medium">{player.score}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
             </section>
            
        </div>
    )
}