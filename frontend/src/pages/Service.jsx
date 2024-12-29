import { useState, useEffect } from "react";
import { Settings, Search, User, Calendar, Info, DollarSign, Lock, CreditCard, AlertCircle } from "lucide-react";
import bg from "../assets/bg.jpeg";

const InfoPage = () => {
  const [selectedSection, setSelectedSection] = useState("Why Register as a Service?");
  const [theme, setTheme] = useState("default");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState("UTC");

  const sections = {
    "Why Register as a Service?": (
      <>
        <p className="text-white text-lg leading-relaxed">
          In today’s digital world, businesses are facing mounting pressure to comply with complex data privacy regulations like GDPR and CCPA. For service providers, navigating these policies can be time-consuming, costly, and risky, especially when dealing with sensitive user information. Registering your service with COCO not only streamlines your compliance efforts but also provides you with a unique competitive advantage.
        </p>
        <p className="text-white text-lg mt-4 leading-relaxed">
          Let’s explore the key reasons why registering as a service on COCO is a game-changer for your business.
        </p>
  
        <h3 className="text-white text-3xl font-semibold mt-6 mb-4 underline decoration-blue-500">
          1. Privacy-Preserving Authentication as a Unique Selling Point
        </h3>
        <p className="text-white text-lg leading-relaxed">
          In an era where user privacy concerns are at an all-time high, offering privacy-preserving authentication is no longer just a trend—it's a necessity. By registering your service with COCO, you can market yourself as a <strong className="text-yellow-400">privacy-first service</strong>, an increasingly vital selling point, especially in industries like <strong className="text-yellow-400">healthcare</strong>, <strong className="text-yellow-400">finance</strong>, and <strong className="text-yellow-400">e-commerce</strong>.
        </p>
        <p className="text-white text-lg leading-relaxed">
          <strong className="text-yellow-400">Why is this valuable?</strong> As privacy-conscious consumers grow in number, they are actively seeking out services that prioritize their data protection. With COCO's privacy-preserving authentication, you offer a seamless and secure way for users to authenticate without exposing their personal information. This sets you apart from competitors still relying on traditional, identity-exposing methods, giving you a significant <strong className="text-yellow-400">competitive advantage</strong> and helping you <strong className="text-yellow-400">build trust</strong> with your customers.
        </p>
  
        <h3 className="text-white text-3xl font-semibold mt-6 mb-4 underline decoration-blue-500">
          2. Reduced Risk of Data Breaches
        </h3>
        <p className="text-white text-lg leading-relaxed">
          One of the biggest liabilities for service providers today is the risk of data breaches. The cost of a breach—both financially and reputationally—can be devastating. But with COCO, this risk is significantly reduced.
        </p>
        <p className="text-white text-lg leading-relaxed">
          COCO <strong className="text-yellow-400">decouples digital identity from real-world identifiers</strong>, meaning your system never stores sensitive personal data, drastically reducing the chances of a breach. Furthermore, by minimizing the amount of sensitive data you store, your compliance with regulations like <strong className="text-yellow-400">GDPR</strong> and <strong className="text-yellow-400">CCPA</strong> becomes much easier, saving you costs associated with fines, penalties, and lawsuits in the event of a data breach.
        </p>
        <p className="text-white text-lg leading-relaxed">
          By adopting COCO, you lower the potential for <strong className="text-yellow-400">costly compliance penalties</strong>, which can often run into the millions. Protecting your customers' data also demonstrates that you take privacy seriously—an essential step in earning their trust.
        </p>
  
        <h3 className="text-white text-3xl font-semibold mt-6 mb-4 underline decoration-blue-500">
          3. Token Economy Participation
        </h3>
        <p className="text-white text-lg leading-relaxed">
          The future of digital services lies in <strong className="text-yellow-400">token economies</strong>. By registering with COCO, you gain access to a <strong className="text-yellow-400">token pool specific to your service</strong> (e.g., $COCO-[ServiceID]), offering you various opportunities to enhance your business.
        </p>
        <ul className="list-disc ml-5 text-white text-lg leading-relaxed">
          <li><strong className="text-yellow-400">Pay Authenticators</strong>: You can use your token pool to pay authenticators for each correct authentication request, ensuring your operations remain seamless.</li>
          <li><strong className="text-yellow-400">Reward Users</strong>: You can reward loyal customers or frequent users with tokens, fostering a sense of loyalty and encouraging more engagement with your service.</li>
        </ul>
        <p className="text-white text-lg leading-relaxed">
          As your ecosystem grows and more users interact with your service, demand for your specific token increases. This can lead to an increase in token valuation, providing you with the option to <strong className="text-yellow-400">sell excess tokens on exchanges</strong> for revenue. Essentially, you gain the power to create your own internal economy that can help drive revenue growth.
        </p>
  
        <h3 className="text-white text-3xl font-semibold mt-6 mb-4 underline decoration-blue-500">
          4. Monetization Opportunities
        </h3>
        <p className="text-white text-lg leading-relaxed">
          COCO’s token economy also opens up new avenues for <strong className="text-yellow-400">monetization</strong>. Here’s how:
        </p>
        <ul className="list-disc ml-5 text-white text-lg leading-relaxed">
          <li><strong className="text-yellow-400">Custom Token-Based Services</strong>: You can offer <strong className="text-yellow-400">premium services</strong> to users that can be redeemed using your service-specific tokens. These might include enhanced account security, access to exclusive content or features, and discounted services for token holders. This adds value to your service offering while also encouraging users to engage more frequently with your platform.</li>
          <li><strong className="text-yellow-400">Marketplace for Tokens</strong>: Your service-specific tokens can be traded on a marketplace for <strong className="text-yellow-400">$COCO</strong> or <strong className="text-yellow-400">fiat currencies</strong>, providing another revenue stream. Each transaction generates fees, helping you capitalize on your users’ interactions in a sustainable way.</li>
        </ul>
        <p className="text-white text-lg leading-relaxed">
          By incorporating a token-based model, you not only engage users but also create new revenue-generating opportunities that go beyond traditional business models.
        </p>
  
        <h3 className="text-white text-3xl font-semibold mt-6 mb-4 underline decoration-blue-500">
          5. User Retention Through Gamification
        </h3>
        <p className="text-white text-lg leading-relaxed">
          The <strong className="text-yellow-400">gamification</strong> of services has been proven to increase user engagement and retention. By integrating COCO’s token system, you can develop <strong className="text-yellow-400">loyalty programs</strong> where users earn tokens for interacting with your service. These tokens can be redeemed for <strong className="text-yellow-400">discounts</strong>, <strong className="text-yellow-400">premium access</strong>, or even exchanged for $COCO tokens.
        </p>
        <p className="text-white text-lg leading-relaxed">
          Additionally, <strong className="text-yellow-400">gamified milestones</strong> (e.g., “Authenticate 5 times and earn 50 tokens”) can make the user experience more fun and interactive, keeping users engaged and coming back for more. These programs incentivize your users to stay active, increasing retention rates and fostering long-term relationships with your platform.
        </p>
  
        <h3 className="text-white text-3xl font-semibold mt-6 mb-4 underline decoration-blue-500">
          The Bottom Line
        </h3>
        <p className="text-white text-lg leading-relaxed">
          By registering as a service with COCO, you’re not just embracing cutting-edge privacy technology; you’re positioning your business to thrive in a rapidly changing digital landscape. With benefits ranging from enhanced privacy compliance and reduced data breach risk to new monetization opportunities and user retention strategies, COCO offers a comprehensive solution for service providers looking to stand out in today’s market.
        </p>
        <p className="text-white text-lg leading-relaxed">
          Incorporating COCO into your service isn’t just an investment in security and privacy—it's an investment in the future of your business. So, take the leap and register today to start reaping the rewards of COCO's token economy!
        </p>
      </>
    ),
    "Participate in $coco tokenomics": "Understand how tokenomics works and how you can participate.",
    "Privacy in COCO": "Learn about how COCO ensures user privacy and data protection.",
    "Create a Verifier and Integrate It": "Learn how to create a service verifier and integrate it into your existing website.",
    "Deposit Stablecoins or Fiat to Register Your Verifier": "Understand how to deposit stablecoins or fiat to register your service verifier.",
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
        <h1 className="text-3xl font-bold text-white">Registering as Service</h1>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 p-2 rounded-lg">
          <Search size={24} className="text-gray-300" />
          <input
            type="text"
            placeholder="Search..."
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
    </div>
  );

  function getIcon(section) {
    const icons = {
      "Why Register as a service?": <Info size={20} className="text-indigo-400" />,
      "Participate in $coco tokenomics": <DollarSign size={20} className="text-yellow-400" />,
      "Privacy in COCO": <Lock size={20} className="text-green-400" />,
      "Create a Verifier and Integrate It": <User size={20} className="text-pink-400" />,
      "Deposit Stablecoins or Fiat to Register Your Verifier": <CreditCard size={20} className="text-blue-400" />,
    };
    return icons[section] || <Info size={20} className="text-white" />;
  }
};

export default InfoPage;
