const RightParallax = ({ text, title, bg }) => (
  <div
    className={`w-full h-screen bg-red-800 flex items-center justify-center lg:justify-end px-4 lg:px-44 ${bg} bg-cover bg-center bg-fixed`}
  >
    <div className="flex flex-col items-center justify-center w-full lg:w-5/12 lg:justify-end lg:items-start">
      <h2 className="mb-3 text-xl font-light text-gray-100 lg:text-3xl">
        {title}
      </h2>
      <div className="w-4/12 w-full my-4 border-gray-300 border-solid border-1">
        </div>
      <p className="text-sm font-medium text-center text-gray-100 lg:text-justify lg:text-base">
        {text}
      </p>
    </div>
  </div>
);

export default RightParallax;
