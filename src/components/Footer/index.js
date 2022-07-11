const Footer = () => {
  return (
    <footer className="w-full bg-slate-700">
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
          <div class="mb-5 w-8/12">
            <label for="name" class="form-label inline-block mb-2 text-white">
              Name
            </label>
            <input
              type="text"
              class="
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
          <div class="mb-5 w-8/12">
            <label for="email" class="form-label inline-block mb-2 text-white">
              Email
            </label>
            <input
              type="text"
              class="
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
          <div class="mb-3 w-8/12">
            <label for="name" class="form-label inline-block mb-2 text-white">
              Name
            </label>
            <textarea
              type="text"
              rows="8"
              cols="50"
              class="
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
  );
};

export default Footer;
