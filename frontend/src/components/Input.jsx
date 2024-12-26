//This is the input component which is to be rendered in the / directory
const Input = ({icon: Icon, event: click, ...props}) => {
  return (
    <div className="relative mb-5 bg-transparent">
        <div className="absolute inset-y-0 flex left-0 pl-3 items-center">
            <Icon className="size-5 text-green-400" onClick={click}/>
        </div>
        <input {...props} className="w-fill pl-10 pr-24 py-4 bg-transparent text-white bg-opacity-50 rounded-xl border-gray-700  placeholder-gray-400 transition duration-200 focus:ring-2 focux:border-green-500 focus:ring-green-500 outline-none border-2 border-solid" />
    </div>
  )
}

export default Input;