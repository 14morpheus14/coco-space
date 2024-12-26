//this the component which is to rendered in the dashboard
const ServiceBox = ({ bg = "bg-white", icon:Icon, heading, paragraph }) => {
  return (
    <div
      className={`outline-none bg-gray-200 hover:bg-gray-400 ${bg} rounded-lg px-4 py-5 text-black`}
    >
      <div className="flex flex-row items-start justify-center gap-2">
        <Icon/>
        <div className="flex flex-col -mt-1">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
