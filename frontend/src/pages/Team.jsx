import bg from "../assets/bg.jpeg";

const Team = () => {
  return (
    <div
      className="text-white h-screen p-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <h1 className="pl-[50%] font-bold text-4xl">Team</h1>
      <div className="border-white border-2 rounded-lg m-10 bg-transparent border-solid flex flex-col flex-wrap">
        <div className="px-4 py-2">
          Chief Executive Officer & Co-Founder, Karan Surya
        </div>
        <div className="px-4 py-2">
          Chief Scietific Officer & Co-founder, Yamya Reiki
        </div>
        <div className="px-4 py-2">VP Information Security, Yashwant GK</div>
        <div className="px-4 py-2">VP Application Security, Somu Sen</div>
        <div className="px-4 py-2">
          Chief Technology Officer, Biswarup Ghosh
        </div>
      </div>
    </div>
  );
};

export default Team;
