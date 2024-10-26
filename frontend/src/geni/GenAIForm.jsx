import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown"; // Import react-markdown

const GenAIForm = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "AIzaSyCr7AInuaKWhq8zfcgnduyxVReHOY_KB4Y"; // Ensure this is correctly set

  const genAI = new GoogleGenerativeAI(apiKey); // Initialize with your API key
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Construct the prompt based on user input
    const fullPrompt = `Analyze the customer base likely to purchase [Product Name], considering the socio-economic and demographic characteristics of Indian consumers. Identify distinct customer segments that are most likely to show interest in this product and suggest optimal marketing approaches for each segment.provide the content precise and give in pts.Given that [Product Name] is a [Product Category, e.g., luxury item, daily essential, seasonal product], profile the ideal customer persona in the Indian market, including age, gender, income level, and lifestyle preferences. Identify the top segments for targeted marketing.Based on historical data and product trends, analyze which regions in India show the highest potential for sales of [Product Name]. Include metropolitan, urban, and rural areas, specifying regions likely to have higher demand for this product.
Analyze how the sales of [Product Name] may be impacted by upcoming Indian festivals, including Diwali, Dussehra, and Navratri. Provide recommendations on when and how to increase marketing efforts to leverage festive demand.Perform  market analysis on "${prompt}" with respect to India.keep the content small`;

    try {
      const result = await model.generateContent(fullPrompt); // Use the constructed prompt
      setResponse(result.response.text());
    } catch (error) {
      console.error("Error generating content:", error);
      setResponse("An error occurred while generating content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'start', 
      minHeight: '100vh', 
      backgroundColor: '#fff', 
      margin: '3rem auto',
      padding: '20px' 
    }}>
      <div style={{ 
        maxWidth: '600px', 
        backgroundColor: '#fff', 
        padding: '30px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
      }}>
        <h2 style={{ textAlign: 'center',fontSize: '24px',padding:10 }}>Get Market Analysis of Your Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt"
            required
            style={{ 
              width: "100%", 
              padding: "10px", 
              borderRadius: "4px", 
              border: "1px solid #ccc", 
              marginBottom: "10px", 
              
              boxSizing: "border-box" 
            }}
          />
          <button 
            type="submit" 
            disabled={loading} 
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '4px', 
              border: 'none', 
              backgroundColor: '#579ffb', 
              color: '#fff', 
              fontSize: '16px', 
              cursor: 'pointer' 
            }}
          >
            {loading ? "Analyzing..." : "Find trends and insights"}
          </button>
        </form>
        {response && (
          <div style={{ marginTop: "20px" }}>
            <h3>Analysis:</h3>
            <ReactMarkdown>{response}</ReactMarkdown> {/* Render Markdown content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenAIForm;
