const CenterParallax = ({ text, bg }) => (
  <div
    className={`w-full h-screen bg-red-800 flex items-center justify-center px-3 ${bg} bg-cover bg-center bg-fixed`}
  >
    <h2 className="text-xl font-light text-center text-gray-100 lg:text-3xl">
      {text}
    </h2>
  </div>
);

export default CenterParallax;
