import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import Logo from "./Logo.jsx";
import yourBackgroundImage from "./assets/background/Home.jpg";

export default function RegisterAndLogiForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }

  const backgroundStyle = {
    backgroundImage: `url(${yourBackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="h-screen flex items-center" style={backgroundStyle}>
      <div className="w-4/5 flex justify-end">
        <div className="w-64 mx-4 flex flex-col items-center">
          <Logo />
          <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
              className="block w-full rounded-sm p-2 mb-2 border"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="block w-full rounded-sm p-2 mb-2 border"
            />
            <button className="bg-yellow-500 text-white block w-full rounded-sm p-2">
              {isLoginOrRegister === "register" ? "Register" : "Login"}
            </button>
            <div className="text-center mt-2">
              {isLoginOrRegister === "register" && (
                <div className="flex justify-center gap-1">
                  Already a member?
                  <button
                    className="underline"
                    onClick={() => setIsLoginOrRegister("login")}>
                    Login
                  </button>
                </div>
              )}
              {isLoginOrRegister === "login" && (
                <div className="flex justify-center gap-1">
                  Don't have an account?
                  <button
                    className="underline"
                    onClick={() => setIsLoginOrRegister("register")}>
                    Register
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
