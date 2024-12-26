import { Cuboid, Mail, MessageSquare } from "lucide-react";
import ServiceBox from "../components/ServiceBox";

const Dashboard = () => {
  return (
    <div className="h-[620px] bg-white p-10">
      <div className="flex flex-col items-start gap-10">
        <h1 className="text-black font-semibold text-4xl">
          Welcome to coco-space
        </h1>
        <hr className="w-full border-t-2 border-gray-300" />
        <div className="flex items-start justify-center gap-10">
          <ServiceBox
            icon={Mail}
            heading="Email Service"
            paragraph="This is your ultimate email service"
          />
          <ServiceBox
            icon={Cuboid}
            heading="Storage Service"
            paragraph="This is your one step storage service"
          />
          <ServiceBox
            icon={MessageSquare}
            heading="Social media"
            paragraph="Now you can meet new people without worrying"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
