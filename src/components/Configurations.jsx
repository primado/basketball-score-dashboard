import React,{useState,useEffect} from "react";
var address = import.meta.env.VITE_IP_ADDRESS;
export default function Config() { 
    const [formData, setFormData] = useState({
        Timer: '',
        Perfect_shot: '',
        Miss: '',
        bank_shot: ''
      });
    
      const [socket, setSocket] = useState(null);
    
      useEffect(() => {
        const ws = new WebSocket("ws://"+address+":8082");
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
          ws.close();
        };
      }, []);
    
      // const handleSend = () => {
      //   socket.send(formData);
      // };
    
      
      const handleChange = event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        fetch('http://'+address+':5000/conf', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    
          socket.send(JSON.stringify(formData));
      };

      console.log(formData);

    return (
        <div>
            <section className="bg-home-bg bg-no-repeat bg-center bg-cover w-screen h-screen flex justify-center items-center flex-col md-810:w-screen md-810:h-screen  md-810:flex md-810:justify-start md-810:items-center md-810:py-16">
                <h1 className="text-white text-4xl font-montserrat font-extrabold my-8">CONFIGURATION</h1>

                <div className="bg-white w-7/12 py-16 max-w-4xl max-h-max rounded-lg md-810:w-10/12 md-690:px-10">
                    <div className="container">
                        <form action="" className="font-montserrat" onSubmit={handleSubmit}>
                            <div className="form__group w-full flex justify-end items-end pr-10 mb-7">
                                <input type="submit" value="Save" name="" className="border-2 border-gray-300 font-montserrat w-36 py-2 rounded-lg text-xl font-semibold hover:bg-blue-700 hover:text-white hover:border-none hover:ease-in-out hover:duration-500"/>
                            </div>
                            <div className="form__group flex justify-center items-center flex-row mb-8 gap-14">
                                <label className="font-semibold text-2xl md-690:text-lg" htmlFor="Timer">TIMER SETTINGS</label>
                                <input className="font-roboto form-input font-medium text-base bg-[#D9D9D9] rounded-lg" 
                                type="number" 
                                id="Timer"
                                name="Timer"
                                value={formData.Timer}
                                onChange={handleChange}
                                />
                            </div>

                            <div className=" flex justify-center items-center flex-row mb-8 gap-24">
                                <label htmlFor="" className="font-semibold text-2xl md-690:text-lg">Videos</label>
                                <div className="flex flex-row justify-end w-36 items-end bg-[#D9D9D9]">
                                    <input type="file" id="upload" hidden/>
                                    <label htmlFor="upload" className="bg-black flex justify-center items-center w-10 ">
                                        {/* <img className="" src={plus}  alt="plus" /> */}
                                        <i class="fa-solid fa-plus text-white text-3xl text-center"></i>
                                    </label>
                                </div>
                            </div>

                            <div className="form__group flex justify-center items-center mb-5">
                                <h2 className=" font-semibold text-2xl text-center font-montserrat md-690:text-lg">COLOURS</h2>
                                {/* <div className="hidden">5</div> */}
                            </div>

                            <div className="flex justify-center items-center flex-row gap-16">
                                <div className="p-shot flex flex-col">
                                    <label htmlFor="perfect-shot" className="font-montserrat font-semibold text-xl">Perfect Shot</label>
                                    <select 
                                    id="Perfect_shot"
                                    name="Perfect_shot"
                                    value={formData.Perfect_shot}
                                    onChange={handleChange}
                                    className="font-montserrat font-medium text-base bg-[#D9D9D9] rounded-lg"
                                    >
                                    <option value="">Select an option</option>
                                    <option value="g">Green</option>
                                    <option value="w">White</option>
                                    <option value="v">Violet</option>
                                    </select>
                                </div>
                                <div className="p-shot flex flex-col">
                                    <label htmlFor="Miss" className="font-montserrat font-semibold text-xl">Miss Shot</label>
                                    <select 
                                    id="Miss"
                                    name="Miss"
                                    value={formData.Miss}
                                    onChange={handleChange}
                                    className="font-montserrat font-medium text-base bg-[#D9D9D9] rounded-lg"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="r">Red</option>
                                        <option value="o">Orange</option>
                                        <option value="g">Gray</option>
                                    </select>
                                </div>
                                <div className="p-shot flex flex-col">
                                    <label htmlFor="bank_shot" className="font-montserrat font-semibold text-xl">Bank Shot</label>
                                    <select 
                                    id="bank_shot"
                                    name="bank_shot"
                                    value={formData.bank_shot}
                                    onChange={handleChange}
                                    className="font-montserrat font-medium text-base bg-[#D9D9D9] rounded-lg"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="b">Blue</option>
                                        <option value="y">Yellow</option>
                                        <option value="p">Pink</option>
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