import React,{useState,useEffect} from "react";
import court from "../assets/court.jpg";
import Popup from "reactjs-popup";
import "./dashboard.css"
import 'reactjs-popup/dist/index.css';
var d;
var shot = 0;
var color ='';
var score = 0;
var perfectShot=0;
 var address = import.meta.env.VITE_IP_ADDRESS;

export default function Dashboard() {

    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const [data, setData] = useState([]);
    const [socket, setSocket] = useState(null);
 
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);





    useEffect(() => {
      const intervalId = setInterval(() => {
        fetch('http://'+address+':5000/cont_data/')
          .then((res) => res.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error));
      }, 25);

      return () => clearInterval(intervalId);
    }, []);


   d = data;
 
    useEffect(() => {
      let intervalId = null;
      if (isActive && seconds > 0) {
        intervalId = setInterval(() => {
          setSeconds(seconds - 1);
          setShowPopup1(false);
          setShowPopup2(false);
          setShowPopup3(false);


        }, 1000);
      } else if (!isActive && seconds === 0) {
          setSeconds(60);
      }
      else if (seconds === 0) {
        setShowPopup(true);

        fetch('http://'+address+':5000/score', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              player_name: d.player_name1,
              shot: perfectShot,
              score: score    
          })
      })
      .then((response) => {
       })
      .catch((error) => {
       });
 
       }
      return () => clearInterval(intervalId);
    }, [isActive, seconds]);

    useEffect(() => {
       const ws = new WebSocket("ws://"+address+":8083");
      setSocket(ws);
  
      ws.onopen = () => {
        console.log("WebSocket connection established");
       }; 
  
      ws.onmessage = (event) => {
        console.log(`Received data: ${event.data}`);
        if(event.data == 0){
          handleStop();
        }
        else if(event.data == 1){
          handleStart();
        }
      };
  
      ws.onerror = (error) => {
        console.error(`WebSocket error: ${error}`);
      };
  
      

      return () => {
        
       };
    }, []);

    const handleStart = () => { 
      setIsActive(!isActive);
    };

    const handleStop = () => { 
       shot = 0;
       score = 0;
       perfectShot = 0;
      setIsActive(isActive);
      setShowPopup(false);
    };

        

     
      useEffect(() => {
         const ws = new WebSocket("ws://"+address+":8081");
        setSocket(ws);
    
        ws.onopen = () => {
          console.log("WebSocket connection established");
 
        };
    
        ws.onmessage = (event) => {
          
            const data = JSON.parse(event.data);
            shot = data['shot'];
            color = data['color'];
            if(color === "blue" && shot > 0){
                score = score + 2;
                setShowPopup2(true);
            }
            else if(color === 'green' && shot > 0){
              score = score + 3;
              perfectShot = perfectShot + 1;
              setShowPopup1(true);
            }
            else if(color === 'red'){
              console.log("Miss");
              setShowPopup3(true);
               
            }
          
        };
    
        ws.onerror = (error) => {
          console.error(`WebSocket error: ${error}`);
        };
        
         
        return () => {
           
         };
      }, []);

       

    return (
        <div>
            <section className="bg-home-bg bg-no-repeat bg-center bg-cover py-14 min-h-screen w-full sm-412:h-screen sm-412:w-screen sm-412:px-12 sm-412:py-20 sm-428:px-12 sm-428:py-20 sm-428:w-screen sm-428:h-screen md-810:h-screen md-768:w-screen md-768:h-screen md-900:w-screen md-900:h-screen md-810:py-20 md-1080:py-20">
                <div className="main-container">
              <h1 className="text-[#fff] text-6xl text-center font-roboto font-extrabold mb-12 sm-375:mb-8 sm-425:text-base 2xl-1440:text-5xl 3xl-2560:text-5xl">SMART HOOP 
               {showPopup ? (
              <Popup open={showPopup} position="center" >
                <div className="gameover" >GAMEOVER</div>
              </Popup>
              ) : null}
               {showPopup1 ? (
                      <Popup open={showPopup1} position="center" >
                        <div className="execellent" >Execellent Shot</div>
                      </Popup>
              ) : null}
              {showPopup2 ? (
                      <Popup open={showPopup2} position="center" >
                        <div className="execellent" >Bank Shot</div>
                      </Popup>
              ) : null}
              {showPopup3 ? (
                      <Popup open={showPopup3} position="center" >
                        <div className="execellent" >MISS</div>
                      </Popup>
              ) : null}
      
                    {/* <button onClick={handleStartStop}>
                        {isActive ? "." : "."}
                    </button> */}
                    </h1>

                    <div className="flex flex-col gap-20">

                       <div className="flex justify-between mx-32 sm:gap-10">
                       <div className="img-container">
                            <img className="w-40 sm:w-25 md:bg-red-400 block border border-[#fff] m-auto sm-360:w-48 sm-412:w-48 md-810:w-52"
                            src={court} alt="Basket Ball Court"/>
                        </div>

                        <div className="shot-container">
                            <div className="shot">
                                <h2 className="text-[#fff] text-3xl text-center mb-2 font-roboto font-semibold sm-412:text-xl sm-428:text-xl"
                                > SHOTS
                                </h2>

                                <div 
                                className="shot-data text-[#000] text-center font-black font-roboto text-7xl bg-bg_white flex justify-center items-center w-40 h-24 max-w-[10rem] max-h-24 sm-412:w-36 sm-412:h-40 sm-412:text-5xl sm-428:w-36 sm-428:h-40 sm-428:text-5xl"
                                >
                                    {shot}
                                </div>
                            </div>
                        </div>
                       </div>
                      <div className="flex justify-between mx-16 items-center" >  
                          
                      <div className="score-container">
                            <div className="score">

                                <h2 className="text-[#fff] text-3xl text-center mb-2 font-roboto font-semibold sm-412:text-xl sm-428:text-xl"
                                > SCORE
                                </h2>

                                <div className="score-data  text-[#000] font-black font-roboto text-center text-9xl  bg-bg_white flex justify-center items-center w-72 h-60 max-w-[18rem] max-h-60 sm-412:w-36 sm-412:h-40 sm-412:text-5xl sm-428:w-36 sm-428:h-40 sm-428:text-5xl"
                                >
                                    {score}
                                </div>
                            </div>
                        </div>
                       
                                    <p className="font-semibold text-4xl text-white">{data.player_name1}</p>
                        <div className="clock">
                            <h2 className="text-[#fff] text-3xl text-center font-roboto font-semibold mb-2 sm-412:text-xl sm-428:text-xl"
                            > SHOT CLOCK
                            </h2>
                            <div className="clock-data text-[#000] font-roboto font-black text-center text-9xl bg-bg_white flex justify-center items-center w-72 h-60 max-w-[18rem] max-h-60 sm-412:w-36 sm-412:h-40 sm-412:text-5xl sm-428:w-36 sm-428:h-40 sm-428:text-5xl"
                            >
                                {seconds}
                            </div>
                        </div>

                      </div>
                    </div>
                
                </div>
            </section>

        </div>
    );
}