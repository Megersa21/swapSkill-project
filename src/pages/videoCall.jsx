import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./videoCall.css";

function VideoCall() {
  const navigate = useNavigate();

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <div className="video-call-page">
      <div className="video-area">
        {/* Other person's video */}
        <div className="remote-video">
          <div className="remote-avatar">A</div>
          <h2>Abel</h2>
          <p>Waiting for video...</p>
        </div>

        {/* Your video */}
        <div className="your-video">
          {cameraOn ? (
            <div className="camera-placeholder">You</div>
          ) : (
            <div className="camera-off">
              📷
              <p>Camera Off</p>
            </div>
          )}
        </div>

        {/* Call information */}
        <div className="call-info">
          <span>Skill Swap Call</span>
          <p>Abel</p>
        </div>

        {/* Controls */}
        <div className="call-controls">
          <button
            className={micOn ? "control-btn" : "control-btn off"}
            onClick={() => setMicOn(!micOn)}
          >
            {micOn ? "🎤" : "🔇"}
          </button>

          <button
            className={cameraOn ? "control-btn" : "control-btn off"}
            onClick={() => setCameraOn(!cameraOn)}
          >
            {cameraOn ? "📹" : "📷"}
          </button>

          <button
            className="end-call-btn"
            onClick={() => navigate("/messages")}
          >
            ☎ End Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCall;
