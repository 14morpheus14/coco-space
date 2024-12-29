import { useState, useEffect } from "react";
import {
  MailOpen,
  Star,
  Search,
  Trash2,
  Settings,
  Clock,
  House,
  LayoutGrid,
  Computer,
  Share,
  CloudAlert,
  Cloudy,
  Plus,
  FilePlus,
  FolderPlus,
  Upload,
} from "lucide-react";
import bg from "../assets/bg.jpeg";
import "react-calendar/dist/Calendar.css";

const EmailHome = () => {
  const [selectedSection, setSelectedSection] = useState("Home");
  const [theme, setTheme] = useState("default");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState("UTC");
  const [menuOpen, setMenuOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const sections = {
    Home: "Welcome to Nimbus.",
    Nimbus: "This is your default storage.",
    Computers: "Changes will automatically sync.",
    Shared: "Shared Nimbuses.",
    Recent: "Recent Engagements.",
    Starred: "Storages that you've starred.",
    Spam: "Spam emails are filtered here.",
    Trash: "Data that you've deleted will appear here.",
    Storage: "All the data will map here.",
  };

  const themes = {
    default: "bg-black/70 text-white",
    light: "bg-gray-200 text-black",
    colorful:
      "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeStyle: "medium",
    dateStyle: "medium",
  }).format(currentTime);

  const handleThemeChange = (newTheme) => setTheme(newTheme);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      type: "file",
    }));
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleNewFolder = () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      setFolders((prevFolders) => [
        ...prevFolders,
        { name: folderName, type: "folder" },
      ]);
    }
  };

  const handleNewFile = () => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      setFiles((prevFiles) => [...prevFiles, { name: fileName, type: "file" }]);
    }
  };

  const handleOpenFile = (file) => {
    setSelectedFile(file);
  };

  const handleDeleteFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleDeleteFolder = (folderName) => {
    setFolders((prevFolders) =>
      prevFolders.filter((folder) => folder.name !== folderName)
    );
  };

  return (
    <div
      className={`h-screen w-full flex flex-col ${themes[theme]}`}
      style={{
        backgroundImage: theme === "default" ? `url(${bg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Header Section */}
      <div className="relative z-10 flex justify-between items-center p-6 bg-black/80 shadow-md">
        <h1 className="text-3xl font-bold text-white">Nimbus Storage</h1>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 p-2 rounded-lg">
          <Search size={24} className="text-gray-300" />
          <input
            type="text"
            placeholder="Search in Nimbus"
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setSelectedSection("Settings")}
          >
            <Settings size={20} className="text-white" />
            <span className="text-white">Settings</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-grow grid grid-cols-4 gap-4 p-6 overflow-y-auto">
        {/* Sidebar */}
        <div className="col-span-1 bg-black/80 rounded-lg p-4 shadow-md text-white">
          {Object.keys(sections).map((section) => (
            <div
              key={section}
              className={`flex items-center gap-2 cursor-pointer ${
                selectedSection === section ? "text-blue-400" : ""
              } mb-3`}
              onClick={() => setSelectedSection(section)}
            >
              {getIcon(section)}
              <span>{section}</span>
            </div>
          ))}
          <hr className="border-gray-600 my-4" />
          <div>
            <p className="text-white font-semibold">Date & Time</p>
            <p className="text-gray-300">{formattedTime}</p>
            <select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              className="bg-black/50 text-white rounded p-2 mt-2 w-full"
            >
              {Intl.supportedValuesOf("timeZone").map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`col-span-3 rounded-lg p-6 shadow-md overflow-y-auto ${themes[theme]}`}
        >
          <h2 className="text-2xl font-semibold mb-4">{selectedSection}</h2>
          <div
            className={`p-4 rounded-lg ${
              selectedSection !== "Compose Email"
                ? "bg-black/50"
                : "bg-transparent"
            }`}
          >
            <span
              className={`text-sm ${
                selectedSection !== "Compose Email"
                  ? "text-gray-400"
                  : "text-black"
              }`}
            >
              {sections[selectedSection]}
            </span>

            <div className="grid grid-cols-2 gap-4">
              {folders.map((folder, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-300 rounded shadow flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <FolderPlus size={20} className="mr-2" />
                    {folder.name}
                  </div>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteFolder(folder.name)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              {files.map((file, index) => (
                <div
                  key={index}
                  className="p-4 bg-green-400 rounded shadow flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <FilePlus size={20} className="mr-2" />
                    {file.name}
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => handleOpenFile(file)}
                    >
                      Open
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDeleteFile(file.name)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {selectedFile && (
              <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                  <h2 className="text-xl font-bold mb-4">
                    {selectedFile.name}
                  </h2>
                  <p>This is a placeholder for file content.</p>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                    onClick={() => setSelectedFile(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {selectedFile && (
              <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                  <h2 className="text-xl font-bold mb-4">
                    {selectedFile.name}
                  </h2>
                  <p>This is a placeholder for file content.</p>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                    onClick={() => setSelectedFile(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {selectedSection === "Settings" && (
              <>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-pink-400">
                    Themes
                  </h3>
                  <div className="flex gap-4">
                    <button
                      className={`p-2 rounded ${
                        theme === "default"
                          ? "bg-gray-800 text-white"
                          : "bg-transparent"
                      }`}
                      onClick={() => handleThemeChange("default")}
                    >
                      Default
                    </button>
                    <button
                      className={`p-2 rounded ${
                        theme === "light"
                          ? "bg-gray-800 text-white"
                          : "bg-transparent"
                      }`}
                      onClick={() => handleThemeChange("light")}
                    >
                      Light
                    </button>
                    <button
                      className={`p-2 rounded ${
                        theme === "colorful"
                          ? "bg-gray-800 text-white"
                          : "bg-transparent"
                      }`}
                      onClick={() => handleThemeChange("colorful")}
                    >
                      Colorful
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-400">
                    Help & Support
                  </h3>
                  <p>
                    If you need assistance, please contact support at
                    support@cocospace.com
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 right-10 z-50">
        <button
          className="p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 group"
          onClick={toggleMenu}
        >
          <Plus size={24} />
          <span className={`absolute bottom-20 right-[-7px] transform -translate-x-1/2 mb-2 hidden group-hover:block text-white bg-black text-xs p-1 rounded-md px-2 outline-none ${theme === "default" ? "border-white border-2 border-solid" : ""}`}>
            Add
          </span>
        </button>
      <div className="fixed bottom-20 right-10 z-50">
        <button
          className="p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 group"
          onClick={toggleMenu}
        >
          <Plus size={24} />
          <span className={`absolute bottom-20 right-[-7px] transform -translate-x-1/2 mb-2 hidden group-hover:block text-white bg-black text-xs p-1 rounded-md px-2 outline-none ${theme === "default" ? "border-white border-2 border-solid" : ""}`}>
            Add
          </span>
        </button>

        {/* File Management Menu */}
        {menuOpen && (
          <div className="absolute bottom-16 right-0 bg-white text-black shadow-lg rounded-lg w-48 p-3">
            <button
              className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-100 rounded"
              onClick={handleNewFile}
            >
              <FilePlus size={20} /> New File
            </button>
            <button
              className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-100 rounded"
              onClick={handleNewFolder}
            >
              <FolderPlus size={20} /> New Folder
            </button>
            <label className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-100 rounded cursor-pointer">
              <Upload size={20} /> Upload File
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );

  function getIcon(section) {
    const icons = {
      Home: <House size={20} className="text-indigo-400" />,
      Nimbus: <LayoutGrid size={20} className="text-yellow-400" />,
      Computers: <Computer size={20} className="text-blue-400" />,
      Shared: <Share size={20} className="text-green-400" />,
      Recent: <Clock size={20} className="text-purple-400" />,
      Starred: <Star size={20} className="text-red-400" />,
      Spam: <CloudAlert size={20} className="text-orange-400" />,
      Trash: <Trash2 size={20} className="text-gray-400" />,
      Storage: <Cloudy size={20} className="text-teal-400" />,
    };
    return icons[section] || <MailOpen size={20} className="text-white" />;
  }
};

export default EmailHome;
