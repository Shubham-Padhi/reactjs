import React, { useState } from 'react';


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: 'me' }]);
      setInput('');
      setMessages([...messages, { text: input, user: 'me' }, { text: 'Bot response', user: 'bot' }]);
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header" onClick={toggleChat}>
        Chat with us!
      </div>
      {isOpen && (
        <div className="chatbot-body">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.user}`}>
                {message.text}
              </div>
             ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />   
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
