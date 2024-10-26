import { useState } from 'react';
import { IoCall } from "react-icons/io5";

const Dash = () => {
  const [userValues, setUserValues] = useState({
    name: '',
    color: '',
    animal: ''
  });

  const [messages, setMessages] = useState([]); // State to hold chat messages

  const handleInputChange = (e) => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
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
  };

  const fetchGeneratedText = async (prompt) => {
    try {
      const response = await fetch("https://d68b-34-126-162-220.ngrok-free.app/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      return data.generated_text;
    } catch (error) {
      console.error("Error fetching generated text:", error);
      return "hiii"; // Handle error gracefully
    }
  };

  return (
    <div className="flex m-auto bg-white h-screen">
      {/* Left Side - Profile Picture */}
      <div className="flex w-1/3 justify-center p-3 items-top h-screen bg-gray-100">
        <div className="w-[90%] bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-[100px] bg-gradient-to-r from-blue-500 to-orange-300 flex justify-center items-center relative">
            {/* Avatar */}
            <div className="absolute -bottom-10 bg-white p-1 rounded-full border-4 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" className="h-[100px] w-[100px] rounded-full mb-5 object-cover" alt="Avatar" />
            </div>
          </div>
          <div className="pt-16 pb-6 text-center border-b-1">
            <h2 className="text-lg font-semibold text-gray-800">fs20if009@gmail.com</h2>
          </div>
        </div>
      </div>

      {/* Right Side - Chat Application */}
      <div className="w-3/4 flex flex-col justify-between">
        <div className="flex-grow p-6 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`p-4 rounded-lg max-w-xs ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray text-black'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 bg-gray-100 flex items-center">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={userValues.name}
            onChange={handleInputChange}
            className="flex-grow border-b-2 border-dotted border-blue-500 focus:outline-none focus:border-blue-600 text-blue-600 mr-2"
          />
          {/* Uncomment if you want to add more inputs */}
          {/* <input
            type="text"
            name="color"
            placeholder="Color"
            required
            value={userValues.color}
            onChange={handleInputChange}
            className="border-b-2 border-dotted border-blue-500 focus:outline-none focus:border-blue-600 text-blue-600 mr-2"
          /> 
          <input
            type="text"
            name="animal"
            placeholder="Animal"
            required
            value={userValues.animal}
            onChange={handleInputChange}
            className="border-b-2 border-dotted border-blue-500 focus:outline-none focus:border-blue-600 text-blue-600"
          /> */}
          {/* Submit Button */}
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg">
            <i className="fa-solid fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dash;
