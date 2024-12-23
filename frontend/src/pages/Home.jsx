import Input from "../components/Input";
import { useState } from "react";
import { LockKeyhole, User, Fingerprint } from "lucide-react";  // Imported Fingerprint icon
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
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-center p-10">
        {/* Header */}
        <h1 className="font-bold text-4xl text-white bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Welcome to coco-space...
        </h1>
        
        {/* Tagline */}
        <div className="text-center text-white text-xl font-semibold mb-8 w-3/4 sm:w-1/2 mx-auto" style={{ fontFamily: "'Merriweather', serif", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
          <p>"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."</p>
          <p>- Albert Camus</p>
        </div>

        {/* Sign-up Section */}
        <form className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20">
          <h3 className="font-bold text-3xl text-white bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-4">
            Create your Space
          </h3>
          <div className="flex flex-col gap-4 w-80">
            <Input
              icon={User}
              type="text"
              placeholder="Your username"
              name="username"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
            />
            {authType === "password" && (
              <Input
                icon={LockKeyhole}
                event={handleChangeAuth}
                type="password"
                placeholder="************"
                name="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            )}
            {authType === "fingerprint" && (
              <div 
                className="flex justify-center items-center border border-white/20 rounded-lg px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer"
                onClick={handleChangeAuth}  // Toggle back to password input
              >
                <Fingerprint className="text-white" size={24} />
              </div>
            )}
            {signupPassword.length > 0 && <PasswordStrengthMeter password={signupPassword} />}
            <button className="text-white py-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition">
              Create
            </button>
          </div>
        </form>

        {/* Login Section */}
        <form className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20">
          <h3 className="font-bold text-3xl text-white bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-4">
            Log in your Space
          </h3>
          <div className="flex flex-col gap-4 w-80">
            <Input
              icon={User}
              type="text"
              placeholder="Your username"
              name="username"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
            />
            {authType === "password" && (
              <Input
                icon={LockKeyhole}
                event={handleChangeAuth}
                type="password"
                placeholder="************"
                name="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            )}
            {authType === "fingerprint" && (
              <div 
                className="flex justify-center items-center border border-white/20 rounded-lg px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer"
                onClick={handleChangeAuth}  // Toggle back to password input
              >
                <Fingerprint className="text-white" size={24} />
              </div>
            )}
            <button className="text-white py-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
