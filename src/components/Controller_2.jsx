import React, {useState,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'

//images

var address = import.meta.env.VITE_IP_ADDRESS;




export default function Controller_2() {

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

        <div className="controller-2">
            <section className="bg-home-bg bg-no-repeat bg-center bg-cover w-screen h-screen flex flex-col justify-start items-center py-20">
                <div className="title">
                    <h1 className="font-montserrat text-white font-semibold text-3xl">Game Controller</h1>
                </div>

                <div className="bg-white w-6/12 py-8">

                    <div className="settings flex flex-row justify-end pr-8 mb-8">
                        {/* <img 
                        src={Settings}
                        alt="settings" 
                        className="w-10 h-10"
                        /> */}

                        <Dropdown
                            text='Settings'
                            icon='cog'
                            floating
                            labeled
                            button
                            className='icon'
                            value={selectedOption} onChange={handleOptionChange} name="Game Modes" id="gmodes"
                          >
                            <Dropdown.Menu>
                                <Dropdown.Item icon='cogs' text="Configrations" as={Link} to='/config' />
                                <Dropdown.Item value='single' icon='user' text="Single Player"/>
                                <Dropdown.Item value='multi' icon='users' text="Multi Player"/>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>

                    <div className="">
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="form__group flex flex-col border">
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