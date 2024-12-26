import { useState, useEffect } from "react";
import {
  MailOpen, Inbox, Star, Send, Search, Trash2, Archive, Edit3, Settings, HelpCircle, AlertCircle, Clock, User, Palette, MessageCircle, Bell, Heart,
  Edit, Bold, Italic, Underline, Strikethrough, Link, Smile, Upload, Paperclip
} from "lucide-react";
import bg from "../assets/bg.jpeg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EmailHome = () => {
  const [selectedSection, setSelectedSection] = useState("Inbox");
  const [theme, setTheme] = useState("default");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState("UTC");
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isContactsVisible, setIsContactsVisible] = useState(false);

  const sections = {
    Inbox: "Your inbox emails appear here.",
    Starred: "Starred emails will be shown here.",
    Sent: "All sent emails are listed here.",
    Drafts: "These are your drafts.",
    Archived: "Archived emails are stored here.",
    Trash: "Deleted emails are available here.",
    Spam: "Spam emails are filtered here.",
    Scheduled: "Scheduled emails will appear here.",
    Social: "Emails from social media platforms appear here.",
    Promotions: "Promotional emails and offers are shown here.",
  };

  const themes = {
    default: "bg-black/70 text-white",
    light: "bg-gray-200 text-black",
    colorful: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white",
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
        <h1 className="text-3xl font-bold text-white">Zaphyr Mail</h1>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 p-2 rounded-lg">
          <Search size={24} className="text-gray-300" />
          <input
            type="text"
            placeholder="Search emails..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
            <Clock size={20} className="text-white" />
            <span className="text-white">Calendar</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsContactsVisible(!isContactsVisible)}>
            <User size={20} className="text-white" />
            <span className="text-white">Contacts</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedSection("Settings")}>
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
              className={`flex items-center gap-2 cursor-pointer ${selectedSection === section ? "text-blue-400" : ""}`}
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
        <div className={`col-span-3 rounded-lg p-6 shadow-md overflow-y-auto ${themes[theme]}`}>
        <h2 className="text-2xl font-semibold mb-4">
            {selectedSection === "Compose" ? (
            "Compose Email"
            ) : (
            sections[selectedSection]  // Render only once
            )}
        </h2>

          <div className="p-4 bg-black/50 rounded-lg">

          {selectedSection === "Compose" ? (
            <div className="bg-gradient-to-t from-black/90 to-transparent p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto text-white">
                
                {/* Subject Field */}
                <div className="mb-6">
                <input
                    type="text"
                    id="subject"
                    className="w-full p-4 bg-black/70 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Subject"
                />
                </div>

                {/* To Field - Multiple Recipients with CC and BCC options */}
                <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-1">
                    <input
                    type="email"
                    id="to"
                    className="p-4 w-full bg-black/70 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="To:"
                    />
                </div>

                {/* Multiple Recipients for CC and BCC */}
                <div className="flex gap-4 flex-wrap">
                    <div className="flex-1">
                    <input
                        type="email"
                        id="cc"
                        className="p-4 bg-black/70 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="CC:"
                    />
                    </div>
                    <div className="flex-1">
                    <input
                        type="email"
                        id="bcc"
                        className="p-4 bg-black/70 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="BCC:"
                    />
                    </div>
                </div>
                </div>

                {/* Body Field */}
                <div className="mb-6">
                <textarea
                    id="body"
                    className="w-full p-6 bg-black/70 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 h-96"
                    placeholder="Write your mail here..."
                />
                </div>

                {/* Action Buttons: Attach, Icons, Save, and Send */}
                <div className="flex justify-between items-center">
                {/* Attach Button */}
                <label htmlFor="file" className="cursor-pointer text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-lg" title="Attach File">
                    <Paperclip size={20} /> {/* Smaller size for the attach icon */}
                </label>

                {/* Text Formatting Icons - Positioned to the right of Attach and left of Save/Send */}
                <div className="flex gap-4 items-center">
                    <button className="text-xl cursor-pointer hover:text-indigo-400" title="Bold">
                    <Bold size={18} />
                    </button>
                    <button className="text-xl cursor-pointer hover:text-indigo-400" title="Italic">
                    <Italic size={18} />
                    </button>
                    <button className="text-xl cursor-pointer hover:text-indigo-400" title="Underline">
                    <Underline size={18} />
                    </button>
                    <button className="text-xl cursor-pointer hover:text-indigo-400" title="Strikethrough">
                    <Strikethrough size={18} />
                    </button>
                    <button className="text-xl cursor-pointer hover:text-indigo-400" title="Insert Link">
                    <Link size={18} />
                    </button>
                    <button className="text-xl cursor-pointer hover:text-indigo-400" title="Insert Emoji">
                    <Smile size={18} />
                    </button>
                    <button className="text-xl cursor-pointer hover:text-indigo-400" title="Insert from Cloud">
                    <Upload size={18} />
                    </button>
                    <button className="text-xl cursor-pointer hover:text-indigo-400" title="Insert Signature">
                    <Edit size={18} />
                    </button>
                </div>

                {/* Action Buttons: Save and Send */}
                <div className="flex gap-6">
                    <button
                    type="button"
                    className="px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-500 transition duration-200"
                    >
                    Save
                    </button>
                    <button
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition duration-200"
                    >
                    Send
                    </button>
                </div>
                </div>
            </div>
            ) : (
            <span>{sections[selectedSection]}</span>
            )}


            {selectedSection === "Settings" ? (
              <>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-pink-400">Themes</h3>
                  <div className="flex gap-4">
                    <button
                      className={`p-2 rounded ${theme === "default" ? "bg-gray-800 text-white" : "bg-transparent"}`}
                      onClick={() => handleThemeChange("default")}
                    >
                      Default
                    </button>
                    <button
                      className={`p-2 rounded ${theme === "light" ? "bg-gray-800 text-white" : "bg-transparent"}`}
                      onClick={() => handleThemeChange("light")}
                    >
                      Light
                    </button>
                    <button
                      className={`p-2 rounded ${theme === "colorful" ? "bg-gray-800 text-white" : "bg-transparent"}`}
                      onClick={() => handleThemeChange("colorful")}
                    >
                      Colorful
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-400">Help & Support</h3>
                  <p>If you need assistance, please contact support at support@cocospace.com</p>
                </div>
              </>
            ) : (
              <span>{sections[selectedSection]}</span>
            )}
          </div>
        </div>
      </div>

      {/* Floating Compose Button */}
      <div className="fixed bottom-20 right-10 z-50">
        <button
          className="p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
          onClick={() => setSelectedSection("Compose")}
        >
          <Edit size={24} />
        </button>
      </div>

      {/* Floating Panel for Calendar */}
      {isCalendarVisible && (
        <div className={`absolute bottom-24 right-4 p-4 shadow-md rounded-lg z-50 w-72 ${themes[theme]}`}>
          <Calendar
            className="react-calendar w-full rounded-lg shadow-md"
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
          />
          <button
            onClick={() => setIsCalendarVisible(false)}
            className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
          >
            X
          </button>
        </div>
      )}

      {/* Floating Panel for Contacts */}
      {isContactsVisible && (
        <div className={`absolute bottom-24 right-80 p-4 shadow-md rounded-lg z-50 w-72 ${themes[theme]}`}>
          <ul>
            <li className="p-2">contact1@example.com</li>
            <li className="p-2">contact2@example.com</li>
            <li className="p-2">contact3@example.com</li>
          </ul>
          <button
            onClick={() => setIsContactsVisible(false)}
            className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
          >
            X
          </button>
        </div>
      )}
    </div>
  );

  function getIcon(section) {
    const icons = {
      Inbox: <Inbox size={20} className="text-indigo-400" />,
      Starred: <Star size={20} className="text-yellow-400" />,
      Sent: <Send size={20} className="text-blue-400" />,
      Drafts: <Edit3 size={20} className="text-green-400" />,
      Archived: <Archive size={20} className="text-purple-400" />,
      Trash: <Trash2 size={20} className="text-red-400" />,
      Spam: <AlertCircle size={20} className="text-orange-400" />,
      Scheduled: <Clock size={20} className="text-gray-400" />,
      Social: <MessageCircle size={20} className="text-teal-400" />,
      Promotions: <Bell size={20} className="text-pink-400" />,
    };
    return icons[section] || <MailOpen size={20} className="text-white" />;
  }
};

export default EmailHome;
