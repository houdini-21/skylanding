const Footer = () => {
  return (
    <footer className="bg-slate-700 w-full">
      <div className="flex w-full lg:flex-row flex-col justify-center items-center py-12">
        <div className="flex flex-col items-center lg:w-1/2 w-full lg:h-52 h-40">
          <h2 className="text-2xl font-light lg:text-4xl text-gray-100 mb-3 underline">
            CONTACT US
          </h2>
          <p className="text-xl font-medium text-center lg:text-justify text-gray-100 lg:text-xl">
            For more information about our services.
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-1/2 w-full">
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
            className="
                    bg-transparent
                    hover:bg-white
                    hover:text-slate-700
                    text-white
                    border-white
                    border-2	
                    font-bold
                    py-2
                    px-4
                    rounded
                    transition
                    ease-in-out
                    duration-500
                    focus:bg-white
                    focus:text-slate-700
                    mb-5
                    w-8/12
                    mt-5
                    text-center
                    "
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-full bg-slate-800 h-32 flex items-center justify-center lg:justify-start lg:px-40">
        <p className="text-center text-white text-base">
          Copyright © 2022 Skyeports. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
