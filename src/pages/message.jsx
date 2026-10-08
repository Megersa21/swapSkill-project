import { useState } from "react";
import "./message.css";
import { useNavigate } from "react-router-dom";

function Messages() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    console.log("Message:", message);
    setMessage("");
  };

  return (
    <div className="messages-page">
      <div className="messages-container">
        {/* Conversation list */}
        <aside className="conversation-list">
          <h2>Messages</h2>

          <div className="conversation active">
            <div className="message-avatar">A</div>

            <div className="conversation-info">
              <h3>Abel</h3>
              <p>Let's swap React for UI/UX.</p>
            </div>
          </div>

          <div className="conversation">
            <div className="message-avatar">S</div>

            <div className="conversation-info">
              <h3>Sara</h3>
              <p>Are you available tomorrow?</p>
            </div>
          </div>
        </aside>

        {/* Chat */}
        <main className="chat">
          {/* Chat header */}
          <div className="chat-header">
            <div className="chat-user">
              <div className="message-avatar">A</div>

              <div>
                <h2>Abel</h2>
                <span>● Online</span>
              </div>
            </div>

            <button
              className="video-call-btn"
              onClick={() => navigate("/video-call")}
            >
              🎥 Video Call
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            <div className="message received">
              <p>Hi! I want to learn React.</p>
              <small>10:30 AM</small>
            </div>

            <div className="message sent">
              <p>Sure! I can help you with React.</p>
              <small>10:32 AM</small>
            </div>

            <div className="message received">
              <p>Great! I can teach you UI/UX in exchange.</p>
              <small>10:33 AM</small>
            </div>
          </div>

          {/* Message input */}
          <form className="message-input" onSubmit={handleSend}>
            <button type="button" className="attach-btn">
              📎
            </button>

            <input
              type="text"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Messages;
