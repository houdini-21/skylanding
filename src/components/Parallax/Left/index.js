const LeftParallax = ({ text, title }) => (
  <div className="w-full h-screen flex items-center justify-center lg:justify-start px-4 lg:px-44 bg-space1 bg-cover bg-center bg-fixed">
    <div className="flex flex-col lg:w-3/6 lg:justify-start justify-center w-full items-center lg:items-start">
      <h2 className="text-xl font-bold lg:text-3xl text-gray-100 mb-3 underline">{title}</h2>
      <p className="text-sm font-medium text-center lg:text-justify text-gray-100 lg:text-base">{text}</p>
    </div>
  </div>
);

export default LeftParallax;
