import { Cloud, MailOpen, Users } from "lucide-react";
import ServiceBox from "../components/ServiceBox";
import bg from "../assets/bg.jpeg";

const Dashboard = () => {
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
      <div className="relative z-10 flex flex-col items-center justify-center p-10 gap-10">
        <h1
          className="font-bold text-4xl text-white bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Explore Your Space
        </h1>
        <hr className="w-3/4 border-t-2 border-gray-300/50" />
        <div className="flex items-center justify-center gap-10">
          <ServiceBox
            icon={MailOpen}
            heading="Zephyr"
            paragraph="Your privacy-first e-mail."
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 text-white"
            path="../mail"
          />
          <ServiceBox
            icon={Cloud}
            heading="Nimbus"
            paragraph="Stash your stuff on your private cloud."
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 text-white"
            path="../storage"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
