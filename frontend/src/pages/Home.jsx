import Input from "../components/Input";
import { useState } from "react";
import { LockKeyhole, User } from "lucide-react";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import bg from "../assets/bg.jpeg";

const Home = () => {
  const [signupName, setSignupName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [authType, setAuthType] = useState("password");

  


  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleChangeAuth = () => {
    setAuthType(authType === "password" ? "fingerprint" : "password");    
  }

  return (
    <div className="h-[84vh] w-full flex items-center justify-center -pb-15" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col md:flex-row gap-28 items-center justify-center">
        <form className="flex flex-col items-center justify-center p-7 flex-1 gap-4">
          <h3 className="font-bold text-2xl mb-4 relative bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 text-transparent">Create your Space <div className="absolute left-0 -bottom-2 w-full h-[1px] bg-white"></div></h3>
          <div className="flex flex-col gap-3">
            <Input
              icon={User}
              type="text"
              placeholder="Your username"
              name="username"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
            />
              {authType === "password" ?  <Input
              icon={LockKeyhole}
              event={handleChangeAuth}
              type="text"
              placeholder="************"
              name="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            /> : ""}
            {signupPassword.length > 0 ? <PasswordStrengthMeter password={signupPassword}/> : ""}
            <button className=" text-white px-3 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-bold text-xl">
              Create
            </button>
          </div>
        </form>
        <form className="flex flex-col items-center justify-center p-7 flex-1 gap-4">
          <h3 className="font-bold text-2xl mb-4 relative bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 text-transparent">Log in your space <div className="absolute bg-white left-0 -bottom-2 w-full h-[1px] "></div> </h3>
          <div className="flex flex-col gap-3">
            <Input
              icon={User}
              type="text"
              placeholder="Your username"
              name="username"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
            />
            {authType === "password" ? <Input
              icon={LockKeyhole}
              event={handleChangeAuth}
              type="text"
              placeholder="************"
              name="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            /> : ""}
            <button className="text-white px-3 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-bold text-xl">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
