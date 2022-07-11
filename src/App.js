import { LeftParallax, RightParallax } from "./components/Parallax";
import "./App.css";

const App = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const location = document.querySelector("footer").offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };
  return (
    <>
      <div
        className={`w-full h-screen bg-red-800 flex items-center justify-center px-3 bg-space5 bg-cover bg-center bg-fixed flex flex-col`}
      >
        <h2 className="text-xl font-light text-center text-gray-100 lg:text-3xl">
          DESIGNING HUMANITY'S FUTURE INTERPLANETARY LIVING STRUCTURES
        </h2>

        <button
          type="submit"
          className="w-6/12 px-4 py-2 mt-5 mb-5 font-bold text-center text-white bg-transparent border-2 border-white rounded lg:w-2/12 hover:bg-white hover:text-slate-700 transition ease-in-out duration-500 focus:bg-white focus:text-slate-700"
          onClick={handleClick}
        >
          Contact Us
        </button>
      </div>
      <RightParallax
        text="We are a space architecture and engineering company. Our team of professional designers and engineers utilize our patented technology to build humanity's future interplanetary living"
        title="OUR MISSION"
        bg="bg-space1"
      />
      <LeftParallax
        text="From high-tech design, structural engineering, and the use of space composite materials, we specialize in the design and construction of interplanetary living structures to house our future human explorers."
        title="TECHNOLOGY"
        bg="bg-space4"
      />
      <RightParallax
        text="Our mission is to build safer and structurally sound interplanetary structures, designed to protect and house our next human explorers. Our space architects and designers take pride in our experience and professionalism to accomplish our mission."
        title="PHILOSOPHY"
        bg="bg-space2"
      />
      <LeftParallax
        text="We value our team effort to make this vision of interplanetary living a reality. Our partners and clients are our cornerstone. We will continue to push the boundaries of space technology for humanity to enjoy"
        title="INNOVATION"
        bg="bg-space3"
      />
      <RightParallax
        text="Our mission is to look beyond and pursue the impossible. Skyeports patented space high-tech technology will assist our future space explorers to achieve the unthinkable."
        title="SPACE RESOURCES"
        bg="bg-space6"
      />

      <footer className="w-full bg-slate-700" id="footer">
        <div className="flex flex-col items-center justify-center w-full py-12 lg:flex-row">
          <div className="flex flex-col items-center w-full h-40 lg:w-1/2 lg:h-52">
            <h2 className="mb-3 text-2xl font-light text-gray-100 underline lg:text-4xl">
              CONTACT US
            </h2>
            <p className="text-xl font-medium text-center text-gray-100 lg:text-justify lg:text-xl">
              For more information about our services.
            </p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div className="w-8/12 mb-5">
              <label
                htmlFor="name"
                className="inline-block mb-2 text-white form-label"
              >
                Name
              </label>
              <input
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-transparent bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="name"
                placeholder=""
              />
            </div>
            <div className="w-8/12 mb-5">
              <label
                htmlFor="email"
                className="inline-block mb-2 text-white form-label"
              >
                Email
              </label>
              <input
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-transparent bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="email"
                placeholder=""
              />
            </div>
            <div className="w-8/12 mb-3">
              <label
                htmlFor="name"
                className="inline-block mb-2 text-white form-label"
              >
                Name
              </label>
              <textarea
                type="text"
                rows="8"
                cols="50"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-transparent bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="name"
                placeholder=""
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-8/12 px-4 py-2 mt-5 mb-5 font-bold text-center text-white bg-transparent border-2 border-white rounded hover:bg-white hover:text-slate-700 transition ease-in-out duration-500 focus:bg-white focus:text-slate-700"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-32 bg-slate-800 lg:justify-start lg:px-40">
          <p className="text-base text-center text-white">
            Copyright © 2022 Skyeports. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
