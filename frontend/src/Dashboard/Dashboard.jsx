// import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import  { useState } from 'react';
import pattern from "../assets/pattern.png";
import chat from "../assets/chat.png";
import dashboard from "../assets/dashboard.png";
import videoCall from "../assets/videoCall.png";
import profile from "../assets/avatar-icon.png"
import analysis from '../assets/analysis-removebg-preview.png'
import { IoCall } from "react-icons/io5";


const servicesData = [
    {
      icon: <IoCall />,
      serviceName: "Analysis",
      bgColor: "bg-slate-100",
      textColor: "text-blue-600",
      imageA: "https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg",
      data: "Unlock Data-Driven Insights for Smarter Decisions."
    },
    {
      icon: <i className="fa-solid fa-video"></i>,
      serviceName: "Campaigns",
      bgColor: "bg-slate-100",
      textColor: "text-green-500",
      imageA: "https://img.freepik.com/premium-vector/3d-isometric-flat-vector-illustration-positive-pr-item-2_109064-8780.jpg?w=740",
      data: "Boost Your Brand with Targeted Campaigns that Convert."
    },
    {
      icon: <i className="fa-solid fa-comments"></i>,
      serviceName: "Segmentation",
      bgColor: "bg-slate-100",
      textColor: "text-orange-500",
      imageA: "https://img.freepik.com/free-vector/audience-segmentation-abstract-concept-illustration_335657-1854.jpg?t=st=1729893865~exp=1729897465~hmac=a16db175710deea73d1f80ee3bdbc76508f460bc80ffc855a8f9aacb40e02508&w=740",
      data:"Reach the Right Audience with Precision Segmentation."
    },
    {
      icon: <i className="fa-solid fa-user"></i>,
      serviceName: "Consultation",
      bgColor: "bg-slate-100",
      textColor: "text-red-600",
      imageA: "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?t=st=1729894001~exp=1729897601~hmac=382fbe888442750845660d9dd52ebab9d7a96e0d0c16a7ff7bd3c6cb8c735ef7&w=826",
      data:"Expert Guidance Tailored to Elevate Your Strategy."
    },
    // Add more services here with different bgColor values
  ];

const colorClasses = [
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-purple-500",
    // Add more colors as needed
  ];
const Dashboard = () => {

    const [userValues, setUserValues] = useState({
        name: '',
        color: '',
        animal: ''
      });
      const [messages, setMessages] = useState([]);
      const [submitted, setSubmitted] = useState(false);
      const [fullSentence, setFullSentence] = useState('');
      
      const handleInputChange = (e) => {
        setUserValues({
          ...userValues,
          [e.target.name]: e.target.value
        });
      };

      

      const handleSubmit = async () => {
        // Create the sentence based on current input values

        const sentence = `I am ${userValues.name} company owner. I want to promte my new ${userValues.color} over ${userValues.animal}. Generate me the post.`;

        // Add user message to chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: sentence, sender: 'user' }
        ]);
    
        // Fetch generated text from the API
        const generatedText = await fetchGeneratedText(sentence);
        
        // Add API response to chat
        if (generatedText) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: generatedText, sender: 'bot' }
          ]);
        }
    
        // Clear inputs after submission
        setUserValues({
          name: '',
          color: '',
          animal: ''
        });
        setSubmitted(true)
      };

      const handleSubmit1 = async () => {
        // Create the sentence based on current input values
        const sentence = `${userValues.name}`;
    
        // Add user message to chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: sentence, sender: 'user' }
        ]);
    
        // Fetch generated text from the API
        const generatedText = await fetchGeneratedText(sentence);
        
        // Add API response to chat
        if (generatedText) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: generatedText, sender: 'bot' }
          ]);
        }
    
        // Clear inputs after submission
        setUserValues({
          name: '',
          color: '',
          animal: ''
        });
        setSubmitted(true)
      };
    
      const handleEditChange = (e) => {
        setFullSentence(e.target.value);
      };

      const fetchGeneratedText = async (prompt) => {
        try {
          const response = await fetch("https://4527-34-91-90-208.ngrok-free.app/generate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
          });
          const data = await response.json();
          console.log(data.generated_text)
          return data.generated_text;
        } catch (error) {
          
          console.error("Error fetching generated text:", error);
          console.log("HII")
          return "Error"
        }
      };
    
  return (

    <div className="flex m-auto bg-white pb-10">
    {/* Left Side - Profile Picture */}
    {/* <div className=" w-1/3 bg-gray-800 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col shadow-lg h-[95%] bg-neutral-200 rounded-xl w-[100%]">
            <div className="flex flex-col items-center m-auto">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" className= "h-[100px] w-[100px] rounded-full mb-4 object-cover"/>
                <p>Profile Name</p>
            </div>
            <div>

            </div>

        </div>

        
     
     
    </div> */}

    <div className="flex w-1/3 justify-center p-3 items-top h-[85vh] bg-gray-100">
      <div className="w-[90%] bg-white rounded-lg shadow-2xl overflow-hidden">
        
        {/* Header Background */}
        <div className="h-[150px] bg-gradient-to-r from-blue-500 to-orange-300 flex justify-center items-center relative">
          {/* Avatar */}
          <div className="absolute -bottom-10 bg-white p-1 rounded-full border-4 border-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" className= "h-[150px] w-[150px] rounded-full mb-5 object-cover"
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          
        </div>

        {/* Profile Info */}
        <div className="pt-16 pb-2 text-center border-b-1 flex flex-col items-center gap-1 justify-between">
          <h2 className="text-lg font-bold text-gray-800">Benjamin Tennyson</h2>
          <h2 className="text-lg font-semibold text-gray-800">ben@gmail.com</h2>
          <h2 className="text-lg font-semibold text-gray-800">+91 83798309009</h2>
        </div>
        <div className="mt-[10px] md:mt-[10px] p-4 self-end">
                {/* <button
                        className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                      >
                        Create Internship
                      </button> */}
                    <button
                        className="w-full bg-[#181A1E] mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
                    >
                        Logout
                    </button>
                    <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                        Delete account
                    </button>
                </div>
        
      </div>
    </div>

    {/* Right Side - Chat Application */}
    <div className="w-3/4  flex flex-col justify-between overflow-y-auto">
      {/* <div className="flex-grow p-6 overflow-y-auto">
       
        <div className="mb-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs ml-auto">
            Hello! How can I help you?
          </div>
        </div>
        <div className="mb-4">
          <div className="bg-gray-200 text-gray-900 p-4 rounded-lg max-w-xs">
            I'm looking for some assistance with my account.
          </div>
        </div>
      </div> */}

      <div className=" z-10 overflow-y-auto  services flex flex-row mt-10 flex-wrap justify-center items-center text-center ">
      { submitted ? (
        <div className="flex flex-col flex-grow p-6 overflow-y-auto h-[70vh]">
          {messages.map((message, index) => (
            <div key={index} className={`w-[50%] mb-4 ${message.sender === 'user' ? 'text-right self-end' : 'text-left '}`}>
              <div className={`p-4 rounded-lg max-w-xs ${message.sender === 'user' ? 'bg-blue-500 self-end text-white' : 'bg-gray text-black'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
      ) : (
        servicesData.map((service, index) => (
        <div
          key={index}
          className={`flex w-[380px] h-[150px] cursor-pointer m-2 flex-row justify-center items-center gap-5 p-4 rounded-xl ${service.textColor} ${service.bgColor} hover:bg-neutral-200`}
        >
          <div className="servicon w-[40%] flex justify-center items-center">
            <img src={service.imageA} className="h-[120px] w-[120px] rounded-full object-cover"/>
          </div>
          <div className="w-[60%]">
          <h2 className=" text-left mb-3 text-black  text-xl font-bold">
            {service.serviceName}
          </h2>
          <p className="text-black text-left">
            {service.data}
          </p>

          </div>
          
        </div>
      ))
      )
        }


         </div>
      

      {/* Input Box */}
      <div className="p-4 bg-gray-100 flex items-center ">
        {/* <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-3 rounded-lg border border-gray shadow-lg mr-2 focus:outline-none "
        /> */}

        {submitted ? (
            <>
        <input
          type="text"
            name="name"
            placeholder=""
            required
            value={userValues.name}
            onChange={handleInputChange}
          className="flex-grow p-3 rounded-lg border border-gray shadow-lg mr-2 focus:outline-none"
        />

        <button onClick={handleSubmit1} className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg">
            <i className="fa-solid fa-paper-plane" />
        </button>
        </>
      ) : (
        <p className="flex-grow p-3 rounded-lg border border-gray shadow-lg mr-2 focus:outline-none">
          I am 
          <input
            type="text"
            name="name"
            placeholder=""
            required
            value={userValues.name}
            onChange={handleInputChange}
            className="ml-1 border-b-2 border-dotted border-blue-500 focus:outline-none focus:border-blue-600 text-blue-600"
          />
          company owner. I want to promte my new 
          
          <input
            type="text"
            name="color"
            placeholder=""
            required
            value={userValues.color}
            onChange={handleInputChange}
            className="ml-1 border-b-2 border-dotted border-blue-500 focus:outline-none focus:border-blue-600 text-blue-600"
          />, over  
          <input
            type="text"
            name="animal"
            placeholder=""
            required
            value={userValues.animal}
            onChange={handleInputChange}
            className="ml-1 border-b-2 border-dotted border-blue-500 focus:outline-none focus:border-blue-600 text-blue-600"
          /> . Generate me the post.
        </p>
      )}

      {/* Submit Button */}
      {!submitted && (
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg">
            <i className="fa-solid fa-paper-plane" />
        </button>
      )
      }
      
        
      </div>
    </div>
    {/* <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Fill in the Sentence</h2>

    
      
    </div> */}
  </div>

    
  );
};

export default Dashboard;
