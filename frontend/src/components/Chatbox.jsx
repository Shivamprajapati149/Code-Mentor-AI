import React from "react";
import axios from "axios"
import { useState } from "react";



export default function ChatBox() {
const [question,setQuestion] = useState("");
const [response,setResponse] = useState("Welcome to Coding Instructor AI!")

/*function for ask ai for response */
const askAI = async()=>{
  if(!question) return;

  try{
    
    // debug

    const result = await axios.post("http://127.0.0.1:5000/chat",{
      message:question,
    });

    setResponse(result.data.response);
    setQuestion("");  /*clear all */


  }catch(error){
    console.error(error);
    setResponse("Error: Unable to get response from AI...")

  }

}

  return (
    <div className="chat-container">
      <h2><span>🧑‍💻 </span>Ask a Coding Question</h2>

      <div className="info-box">
        <p>💡 How to use:</p>
        <p>
          Ask any coding-related question in any programming language. The AI
          will help you with coding concepts and problems!
        </p>
      </div>

      <textarea
        className="input-box"
        placeholder="Type your question here..."
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}

      ></textarea>

      <button onClick={askAI} className="ask-btn">Ask Coding Instructor</button>

      <div className="response-box">
        <h3>Instructor’s Response</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}
