const CenterParallax = ({ text }) => (
  <div className="w-full h-screen bg-red-800 flex items-center justify-center px-3 bg-space bg-cover bg-center bg-fixed">
    <h2 className="text-xl font-bold text-center lg:text-3xl text-gray-100">{text}</h2>
  </div>
);

export default CenterParallax
