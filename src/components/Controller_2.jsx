import React, {useState,useEffect} from "react";
import useWebSocket from 'react-use-websocket';
import "./controller-2.css";

import { 
    Link,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'



//images

var address = import.meta.env.VITE_IP_ADDRESS;
const WS_URL = 'ws://'+address+':8083'
 


export default function Controller_2() {

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Settings");
 


  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    console.log(option);
    formData.game_mode = option;
    setShowOptions(false);
  };
    //navigate router
    const navigate = useNavigate();


  const [formData, setFormData] = useState({
    player_name1: '',
    player_name2: '',
    game_mode: '',
  });


  //  const handleOptionChange = (event,data) => {
  //   setSelectedOption(data.value);
  //   console.log(`Selected option: ${selectedOption}`);
  //   formData.game_mode=data.target.value;
  // };

 
// const handleOptionChange = (event, data) => {
//     setSelectedOption(data.value);
//     console.log(data.value)
//   };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  console.log(formData);
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


  const {
    sendMessage
  } = useWebSocket(WS_URL, {

    onOpen: () => {
      console.log('WebSocket3 connection established.');
    },
    onMessage:(event)=>{
      console.log(`Received data: ${event.data}`);
    },
    shouldReconnect: (closeEvent) => true,
  });

  const handleReset = () => {
     sendMessage(0);
  };

  const handleStart = () => {
     sendMessage(1);

    
  };

    return (

        <div className="controller-2">

            <section className="bg-home-bg bg-no-repeat bg-center bg-cover w-screen h-screen flex flex-col justify-start items-center py-20 gap-8">
                <div className="title">
                    <h1 className="font-montserrat text-white font-bold text-3xl">GAME CONTROLLER</h1>
                </div>

                <div className="bg-white w-2/4 pt-12 h-96 md-1080:w-4/6 md-810:w-10/12">

                    <div className="settings flex flex-row justify-between px-8 mb-8">
                        
                        <div className="back-btn">
                            <button onClick={() => navigate(-1)} className="flex justify-center items-center gap-2 text-xl">
                                <i class="fa-sharp fa-solid fa-arrow-left text-black text-2xl"></i>
                                Go Back
                            </button>
                        </div>

                        <div className="dropdown">
                          <div onClick={toggleOptions}  className="selected-option rounded-lg border-2 font-montserrat font-semibold text-lg">
                            {selectedOption}
                          </div>
                          {showOptions ? (
                            <ul className="options w-40">
                              <li>
                                <Link to="/config" className="flex flex-row gap-2 justify-start items-center text-base font-montserrat font-semibold text-black hover:text-blue-700">
                                <i class="fa-solid fa-gear"></i>
                                  <span>Configuration</span>
                                </Link>
                              </li>
                              <li onClick={() => selectOption("single")} className="flex flex-row gap-2 justify-start items-center text-base font-montserrat font-semibold hover:text-blue-700">
                              <i class="fa-solid fa-user"></i>
                                <span>Single Player</span> 
                              </li>
                              <li onClick={() => selectOption("multi")} className="flex flex-row gap-2 justify-start items-center text-base font-montserrat font-semibold hover:text-blue-700">
                              <i class="fa-solid fa-user-group"></i>
                                <span> MultiPlayer</span>
                              </li>
                            </ul>
                          ) : null}
                        </div>
                    </div>

                    <div className="">
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="form__group flex flex-col">
                                {/* <label htmlFor="player name">Player Name</label> */}
                                <div className="flex flex-col justify-center items-center gap-8 ">
                                    <input 
                                        type="text"
                                        id="player_name1"
                                        name="player_name1"
                                        value={formData.player_name1}
                                        onChange={handleChange}
                                        placeholder="Player 1 name"
                                        className="form-input font-montserrat text-base font-medium w-7/12 bg-[#D9D9D9] rounded-lg"
                                    />

                                    {selectedOption === 'multi' && (
                                        <input 
                                            type="text"
                                            id="player_name1"
                                            name="player_name2"
                                            value={formData.player_name2}
                                            onChange={handleChange}
                                            placeholder="Player 2 name"
                                            className="form-input font-montserrat text-base font-medium w-7/12 bg-[#D9D9D9] rounded-lg"
                                        />

                                    )}

                                    <div className="flex flex-row gap-8">
                                        <input 
                                        type="submit" 
                                        name="" 
                                        value="Start Game"
                                        onClick={handleStart}
                                        className="bg-black text-white font-montserrat font-bold text-lg w-40 py-2 rounded-lg hover:bg-blue-700 hover:ease-in-out hover:duration-300"
                                        />
                                        <input 
                                                                                type="button" 

                                         name="" 
                                        value="Reset"
                                        onClick={handleReset}
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