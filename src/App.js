import { useRef, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("Auth-Token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <div> Chat </div>
      ) : (
        <div className="room">
          <label>Enter Room Name</label>
          <input type="text" ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
