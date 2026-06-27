import { useState } from "react";
import "./MockInterview.css";

function MockInterview() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm your AI Interview Coach. Tell me the role you're preparing for and I'll start a mock interview."
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { sender: "user", text: input },
      {
        sender: "ai",
        text: "Great answer! Can you explain a challenging project you've worked on?"
      }
    ]);

    setInput("");
  };

  return (
    <div className="mock-container">

      <div className="mock-header">
        <h1>AI Mock Interview</h1>
        <p>
          Practice technical and behavioral interviews with an AI interviewer.
        </p>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user" ? "user-message" : "ai-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type your answer..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>

    </div>
  );
}

export default MockInterview;