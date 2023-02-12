import React, {useState,useEffect} from "react";
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
var conn=1;



export default function Controller_2() {

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Settings");
  const [socket, setSocket] = useState(null);



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
 
  const con = () => {
     formData.game_mode="multi";  
   };
  const co = () => {
     formData.game_mode="single";
    
  };

  const handleStart = () => {
    socket.send(1);
    
  };

    return (

        <div className="controller-2">

            <section className="bg-home-bg bg-no-repeat bg-center bg-cover w-screen h-screen flex flex-col justify-start items-center py-20 gap-8">
                <div className="title">
                    <h1 className="font-montserrat text-white font-bold text-3xl">GAME CONTROLLER</h1>
                </div>

                <div className="bg-white w-2/4 py-8 md-1080:w-4/6 md-810:w-10/12">

                    <div className="settings flex flex-row justify-between px-8 mb-8">
                        
                        <div className="back-btn">
                            <button onClick={() => navigate(-1)} className="flex justify-center items-center gap-2 text-xl">
                                <i class="fa-sharp fa-solid fa-arrow-left text-black text-2xl"></i>
                                Go Back
                            </button>
                        </div>

                        <div className="dropdown">
      <div className="selected-option" onClick={toggleOptions}>
        {selectedOption}
      </div>
      {showOptions ? (
        <ul className="options">
          <li>
            <Link to="/config">
              <div>Configuration</div>
            </Link>
          </li>
          <li onClick={() => selectOption("single")}>Single Player</li>
          <li onClick={() => selectOption("multi")}>MultiPlayer</li>
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
                                        type="submit" 
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