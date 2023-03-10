import React, {useState,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";

//images
import Console from "../assets/console.svg";
import Settings from "../assets/settings.svg";
import Afrilogic from "../assets/afrilogic.svg";

var address = import.meta.env.VITE_IP_ADDRESS;


export default function controller() {

    const [selectedOption, setSelectedOption] = useState('');
    const [socket, setSocket] = useState(null);


  const [formData, setFormData] = useState({
    player_name1: '',
    player_name2: '',
    game_mode: '',
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    formData.game_mode=event.target.value;
  };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData)
    fetch('http://'+address+':5000/cont', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response)
      .then(data => {
        if (data.status === 200){
          alert("Player Registration Successful");
        }
       })
      .catch(error => {
        alert(error);
       }); 
  };

  useEffect(() => {
    const ws = new WebSocket("ws://"+address+":8083");
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket connection established");
    }; 

    ws.onmessage = (event) => {
      console.log(`Received data: ${event.data}`);
    };

    ws.onerror = (error) => {
      console.error(`WebSocket error: ${error}`);
    };

    return () => {
     };
  }, []);

  const handleReset = () => {
    socket.send(0);
    
  };
 
  const handleStart = () => {
    socket.send(1);
    
  };
    return (
        <div>

            <section className="bg-home-bg bg-no-repeat bg-center bg-cover pb-20 flex justify-center items-center flex-col w-screen h-screen font-roboto md-810:h-screen md-810:flex md-810:justify-start md-810:items-center md-810:py-16">
                <div>
                    <h1 className="text-white text-4xl font-extrabold my-8 ">GAME CONTROLLER</h1>
                </div>

                <div className="bg-white w-7/12 rounded-xl  md-810:w-10/12 md-690:px-10">
                   
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form__group w-full flex flex-col justify-center items-center mt-16">
                            <label className="font-montserrat font-medium text-2xl mb-2" htmlFor="player name">Player Name</label>
                            <input className="form-input w-7/12 font-normal font-roboto rounded-lg bg-[#D9D9D9]"
                             type="text"
                             id="player_name1"
                             name="player_name1"
                             value={formData.player_name1}
                             onChange={handleChange}
                             placeholder="Player 1"
                            />

                            {selectedOption === 'multi' && (
                                    
                                <div className="form__group w-full flex flex-col justify-center items-center mt-4">
                                    <label className="font-montserrat font-medium text-2xl" htmlFor="player2">Player Name</label>

                                    <input
                                    type="text"
                                    id="player_name2"
                                    name="player_name2"
                                    value={formData.player_name2}
                                    onChange={handleChange}
                                    placeholder="Player 2"
                                    className="form-input w-7/12 font-normal font-roboto rounded-lg bg-[#D9D9D9]"
                                    />
                                </div>
                                )}

                            <input className="bg-black text-white font-montserrat font-bold text-xl w-52 py-3 rounded-lg mt-5 hover:bg-blue-700 hover:ease-in-out hover:duration-300"
                            type="submit" name="" value="Start Game" onClick={handleStart}
                             />
                            <input   className="text-black border-2 border-gray-600 font-montserrat font-bold text-xl w-52 py-3 rounded-lg mt-5 hover:bg-blue-700 hover:text-white hover:border-none hover:ease-in-out hover:duration-300"
                            type="button" name="" value="Reset" onClick={handleReset}
                             />
                        </div>  
                    </form>

                    <div className="mb-10 mt-10">
                        <div className="flex flex-row items-baseline justify-center gap-10">
                            <div className="">
                                <img src={Console} alt="Console" className=" w-32 md-810:w-40 " 
                                />
                                {/* <label className="text-center mt-2 font-montserrat text-md font-semibold md-690:text-xl">Game Mode:</label> */}
                                <select value={selectedOption} onChange={handleOptionChange} name="Game Modes" id="gmodes" className="bg-[#D9D9D9] font-montserrat font-semibold text-sm rounded-lg">
                                    <option value="">--Game Modes--</option>
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