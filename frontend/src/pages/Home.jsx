import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center -pt-40">
      <div className="flex border-2 border-emerald-600 p-44 rounded-lg">
        <form className="flex flex-col items-center justify-center p-10 flex-1 gap-4">
          <h3 className="font-bold">Create your space</h3>
          <div className="flex flex-col gap-3">
            <input
              className="outline-none border-2 border-green-500 py-2 px-3 rounded-md"
              type="text"
              placeholder="Your username"
              name="username"
            />
            <input
              className="outline-none border-2 border-green-500 py-2 px-3 rounded-md"
              type="text"
              placeholder="************"
              name="password"
            />
            <button className="px-3 py-2 bg-yellow-500 rounded-md font-semibold">Create</button>
          </div>
        </form>
        <form className="flex flex-col items-center justify-center p-10 flex-1 gap-4">
          <h3 className="font-bold">Log in your space</h3>
          <div className="flex flex-col gap-3">
            <input
              className="outline-none border-2 border-green-500 py-2 px-3 rounded-md"
              type="text"
              placeholder="Your username"
              name="username"
            />
            <input
              className="outline-none border-2 border-green-500 py-2 px-3 rounded-md"
              type="text"
              placeholder="************"
              name="password"
            />
            <button className="px-3 py-2 bg-yellow-500 rounded-md font-semibold">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
