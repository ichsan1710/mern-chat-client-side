import axios from "axios";
import Routes from "./Routes";
import { UserContextProvider } from "./UserContext.jsx";

function App() {
  axios.defaults.baseURL = "https://mern-chat-d384dcd3ca9f.herokuapp.com";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
