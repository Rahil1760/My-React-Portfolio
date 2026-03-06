
function App() {
  return (
    <div className="bg-black">
      {/* header section */}
      <header className="shadow-xl h-1/6 w-full bg-purple-950">
        <nav>
          <div className="w-full flex py-6 justify-center md:justify-around">
            <div className="flex">
              <div className="mx-4 text-white hover:text-purple-800 self-center hidden md:block">
                <i className="fa-solid fa-at"></i>
              </div>
              <div className="sm:hidden md:block hidden">
                <a href="#" className="text-white hover:text-purple-900">
                  Rahilshaikh931@gmail.com
                </a>
              </div>
            </div>
            <div className="parent_nav hidden sm:flex text-xs sm:text-sm">
              <div className="h-full w-14 border-2 border-green rounded-full px-2 relative bg-gray-400 box-border self-center">
                <div className="h-full w-full rounded-full absolute left-px hover:day_night_mode flex items-center">
                  <img
                    src="/mun.avif"
                    alt="moon"
                    className="h-5 rounded-full absolute left-px movement"
                  />
                </div>
              </div>
              <div className="navbar_element">
                <a href="#Home">Home</a>
              </div>
              <div className="navbar_element">
                <a href="#About">About</a>
              </div>
              <div className="navbar_element">
                <a href="#Skills">Skills</a>
              </div>
              <div className="navbar_element">
                <a href="#Services">Services</a>
              </div>
              <div className="navbar_element">
                <a href="#Portfolio">Portfolio</a>
              </div>
              <div className="navbar_element">
                <a href="#Contact">Contact</a>
              </div>
              <button
                type="button"
                className="hidden lg:block rounded-xl px-4 text-black cursor-pointer bg-gradient-to-r from-purple-500 via-white-900 font-bold self-center"
              >
                Hire Me!
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 sm:hidden relative">
            <div className="sm:hidden -mt-9 self-center">
              <a href="#">
                <img
                  className="h-1/2 w-[80px] m-auto"
                  src="/pngfind.com-about-me-png-6648603.png"
                  alt="hire Me!"
                />
              </a>
            </div>
            <div className="px-4 absolute right-0 -top-8 text-white">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {/* Home Section */}
        <section
          id="Home"
          className="sm:flex flex-col sm:items-center w-full pb-5 bg-gradient-to-tr from-blue-950 via-purple-600 to-black"
        >
          <div className="parent_flex flex flex-col sm:mt-5 sm:w-2/3">
            <div className="image_title flex flex-col text-center sm:flex-row sm:justify-between">
              <div className="sm:text-left">
                <h2 className="font-bold text-white text-2xl font-sans sm:text-3xl mt-5">
                  I am Rahil
                </h2>
                <h1 className="md:w-2/4 pb-8 pt-2 font-bold text-3xl md:text-5xl font-sans bg-gradient-to-r from-white via-black to-teal-400 text-transparent bg-clip-text sm:text-4xl w-full sm:m-0 sm:w-full overflow-visible">
                  MERN Stack Developer
                </h1>
              </div>
              <div className="max-w-44 self-center">
                <img
                  src="/My-image.jpg"
                  alt="My-image "
                  className="w-full border-2 border-purple-950 rounded-2xl rotate-12 hover:-rotate-0 duration-500 hover:border-gray-400"
                />
              </div>
            </div>
            <div className="icons_para sm:-mt-9 lg:-mt-9">
              <div className="text-center mt-4 w-1/2 sm:text-left m-auto sm:m-0 md:mt-2">
                <p className="text-md sm:text-lg text-slate-400">
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>
              </div>
              {/* ICON */}
              <div className="flex text-purple-500 mt-3 w-full text-sm">
                <button
                  type="button"
                  className="border-2 border-purple-700 rounded-3xl px-4 sm:px-0 py-0 hover:bg-purple-950 hover:text-white hover:animate-pulse shadow-[1px_3px_4px_0px_black] w-1/2 box-border sm:text-sm lg:text-lg"
                >
                  Download CV
                </button>
                {/* SocialIcons */}
                <div className="flex w-2/3 justify-around">
                  <div className="social_icons">
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </div>
                  <div className="social_icons">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="social_icons">
                    <a href="#">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center md:w-full md:justify-around">
              <div className="grid grid-cols-2 sm:grid-cols-4 mt-5"></div>
              <div></div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="About">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center splash py-20 bg-black">
            {/* images */}

            <img
              src="/download.png"
              alt="myimage2"
              className="rounded-2xl w-52 mx-auto h-auto border-2 border-purple-900 hover:animate-bounce"
            />
            <div className="uppa">
              <h3 className="text-center bg-gradient-to-r from-purple-500 via-white-900 capitalize font-bold text-4xl text-transparent bg-clip-text h-auto pb-6">
                about me
              </h3>
              <p className="text-center sm:text-left text-sm md:text-lg text-slate-400 w-full sm:px-5 px-2 pt-4">
                Motivated MERN Stack Developer with 1 year of hands-on experience in building scalable backend systems and RESTful APIs. Seeking an opportunity to leverage my expertise in Node.js, Express, MongoDB, and real-time technologies to build efficient and high-performance applications while contributing to the growth of the organization.
              </p>
              <div className="m-auto rounded-3xl px-4 sm:px-0 py-0 hover:bg-purple-950 hover:text-white hover:animate-pulse shadow-[1px_3px_4px_0px_black] w-1/2 sm:w-1/4 box-border sm:text-sm lg:text-lg text-center mt-5 bg-gradient-to-r from-purple-500 via-white-900 ">
                <button type="button" className="text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-3 bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-900"></div>
        </section>
        {/* Skills Section */}
        <section
          className="h-auto w-full border-2 border-l-0 border-r-0 border-t-0 border-b border-purple-900"
          id="Skills"
        >
          <div className="bg-black py-10">
            <h3 className="w-1/2 m-auto text-center bg-gradient-to-r from-purple-500 via-white-900 text-transparent bg-clip-text text-4xl font-bold">
              Skills
            </h3>
          </div>
          {/* Front_end Skills */}
          <div className="parent_skill flex justify-between sm:justify-around flex-wrap bg-black">
            {/* HTML */}
            <div className="ss:w-full p-4 md: bg-transparent hover:bg-gradient-to-tr from-purple-500 via-white-900 rounded-xl hover:shadow-[1px_12px_8px_0px_black] sm:w-1/4 box-border m-4">
              <div>
                <img
                  className="ss:m-auto w-32 h-auto hover:transition hover:scale-125 hover:duration-700 hover:ease-linear"
                  src="/html.png"
                  alt="HTML Logo"
                />
              </div>
              <div className="flex flex-col my-5">
                <div></div>
                <div className="w-full h-6 bg-white rounded-xl">
                  <div className="w-11/12 h-6 bg-green-500 rounded-xl">
                    <p className="text-white flex justify-center items-center">
                      90%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* CSS */}
            <div className="ss:w-full p-4 md: bg-transparent hover:bg-gradient-to-tr from-purple-500 via-white-900 rounded-xl hover:shadow-[1px_12px_8px_0px_black] sm:w-1/4 box-border m-4">
              <div>
                <img
                  className="ss:m-auto w-32 h-auto hover:transition hover:scale-125 hover:duration-700 hover:ease-linear"
                  src="/CSS.png"
                  alt="CSS Logo"
                />
              </div>
              <div className="flex flex-col my-5">
                <div></div>
                <div className="w-full h-6 bg-white rounded-xl">
                  <div className="w-3/4 h-6 bg-green-500 rounded-xl">
                    <p className="text-white flex justify-center items-center">
                      75%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Tailwind */}
            <div className="ss:w-full p-4 md: bg-transparent hover:bg-gradient-to-tr from-purple-500 via-white-900 rounded-xl hover:shadow-[1px_12px_8px_0px_black] sm:w-1/4 box-border m-4">
              <div>
                <img
                  className="ss:m-auto w-32 h-auto hover:transition hover:scale-125 hover:duration-700 hover:ease-linear"
                  src="/free-tailwind-9294852-7577995.webp"
                  alt="Tailwind logo"
                />
              </div>
              <div className="flex flex-col my-5">
                <div></div>
                <div className="w-full h-6 bg-white rounded-xl">
                  <div className="w-1/2 h-6 bg-green-500 rounded-xl">
                    <p className="text-white flex justify-center items-center">
                      50%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* JavaScript */}
            <div className="ss:w-full p-4 md: bg-transparent hover:bg-gradient-to-tr from-purple-500 via-white-900 rounded-xl hover:shadow-[1px_12px_8px_0px_black] sm:w-1/4 box-border m-4">
              <div>
                <img
                  className="ss:m-auto w-32 h-auto hover:transition hover:scale-125 hover:duration-700 hover:ease-linear"
                  src="/JS.png"
                  alt="JavaScript Logo"
                />
              </div>
              <div className="flex flex-col my-5">
                <div></div>
                <div className="w-full h-6 bg-white rounded-xl">
                  <div className="w-4/6 h-6 bg-green-500 rounded-xl">
                    <p className="text-white flex justify-center items-center">
                      66%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* node */}
            <div className="ss:w-full p-4 md: bg-transparent hover:bg-gradient-to-tr from-purple-500 via-white-900 rounded-xl hover:shadow-[1px_12px_8px_0px_black] sm:w-1/4 box-border m-4">
              <div>
                <img
                  className="ss:m-auto w-32 h-auto hover:transition hover:scale-125 hover:duration-700 hover:ease-linear"
                  src="/node-2.png"
                  alt="Node logo"
                />
              </div>
              <div className="flex flex-col my-5">
                <div></div>
                <div className="w-full h-6 bg-white rounded-xl">
                  <div className="w-1/3 h-6 bg-green-500 rounded-xl">
                    <p className="text-white flex justify-center items-center">
                      33%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* MongoDB */}
            <div className="ss:w-full p-4 md: bg-transparent hover:bg-gradient-to-tr from-purple-500 via-white-900 rounded-xl hover:shadow-[1px_12px_8px_0px_black] sm:w-1/4 box-border m-4">
              <div>
                <img
                  className="ss:m-auto w-32 h-auto hover:transition hover:scale-125 hover:duration-700 hover:ease-linear"
                  src="/m3.png"
                  alt="MongoDB logo"
                />
              </div>
              <div className="flex flex-col my-5">
                <div></div>
                <div className="w-full h-6 bg-white rounded-xl">
                  <div className="w-1/6 h-6 bg-green-500 rounded-xl">
                    <p className="text-white flex justify-center items-center">
                      20%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* back_end Skills */}
          </div>
        </section>

        {/* SERVICES SECTION */}

        <section
          id="Services"
          className="bg-black pt-10 border-2 border-l-0 border-r-0 border-t-0 border-b border-purple-900"
        >
          <div className="m-auto">
            <h3 className="text-center bg-gradient-to-r from-purple-500 via-white-900 capitalize font-bold text-4xl text-transparent bg-clip-text h-auto pb-6">
              my quality services
            </h3>
            <p className="text-white text-center sm:w-3/5 w-full m-auto sm:text-xl text:md pb-5 px-8">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </div>
          {/* service item1 */}
          <div className="w-full flex items-center flex-col pb-12 text-white md:text-lg">
            <div className="hover:bg-gradient-to-r from-purple-500 via-white-900 flex flex-col sm:flex-row items-start w-3/4 sm:items-center mt-3 h-auto border border-slate-900 border-t-0 border-l-0 border-r-0 border-b-1">
              <h3 className="sm:text-3xl text-2xl font-bold sm:w-1/2 h-auto w-full">
                <span className="mr-3">01</span>Branding Design
              </h3>
              <p className="mt-3 sm:block sm:w-1/2 w-full text-white">
                Crafting captivating branding designs that resonate with your
                audience, conveying your unique identity and values through logos,
                color schemes, typography, and visuals that leave a lasting
                impression.
              </p>
            </div>
            {/* service item2 */}
            <div className="hover:bg-gradient-to-r from-purple-500 via-white-900 flex flex-col sm:flex-row w-3/4 sm:items-center mt-3 h-auto border border-slate-900 border-t-0 border-l-0 border-r-0 border-b-1">
              <h3 className="sm:text-3xl text-2xl font-bold sm:w-1/2 h-auto">
                <span className="mr-3">02</span>Web Design
              </h3>
              <p className="mt-3 w-full sm:w-1/2">
                Creating visually stunning and user-friendly websites tailored to
                your brand, seamlessly blending creativity with functionality to
                engage visitors and drive conversions effectively across all
                devices and platforms.
              </p>
            </div>
            {/* service item3 */}
            <div className="hover:bg-gradient-to-r from-purple-500 via-white-900 flex flex-col sm:flex-row w-3/4 sm:items-center mt-3 h-auto border border-slate-900 border-t-0 border-l-0 border-r-0 border-b-1">
              <h3 className="sm:text-3xl text-2xl font-bold w-full sm:w-1/2 h-auto">
                <span className="mr-3">03</span>User Experience
              </h3>
              <p className="mt-3 w-full sm:w-1/2">
                Elevate your web applications with React, delivering dynamic,
                responsive, and interactive user experiences. Harness the
                versatility of this cutting-edge library to create engaging
                interfaces that captivate and retain your audience.
              </p>
            </div>
            {/* service item4 */}
            <div className="hover:bg-gradient-to-r from-purple-500 via-white-900 flex flex-col sm:flex-row w-3/4 sm:items-center mt-3 h-auto border border-slate-900 border-t-0 border-l-0 border-r-0 border-b-1">
              <h3 className="sm:text-3xl text-2xl font-bold w-1/2 h-auto">
                <span className="mr-3">04</span>DataBase
              </h3>
              <p className="mt-3 sm:w-1/2 w-full">
                Harness the power of MongoDB for your database needs, offering
                flexibility, scalability, and high performance. Empower your
                applications with a robust and reliable data storage solution
                tailored to your unique requirements
              </p>
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section
          id="Portfolio"
          className="bg-black border-2 border-l-0 border-r-0 border-t-0 border-b border-purple-900 pb-20 scroll-smooth"
        >
          <h3 className="w-1/2 m-auto text-center bg-gradient-to-r from-purple-500 via-white-900 text-transparent bg-clip-text text-4xl font-bold capitalize py-5">
            my recent works
          </h3>
          <div className="parent flex justify-center flex-wrap gap-6">
            {/* Project 1 */}
            <div className="text-white w-11/12 rounded-xl mt-5 sm:w-1/4">
              <div className="parent overflow-hidden rounded-xl">
                <div className="relative overflow-hidden project-container hover:transition hover:scale-110 hover:duration-700">
                  <img
                    src="/p1.jpg"
                    alt="UI Project"
                    className="w-full h-auto overflow-hidden"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-indigo-700 to-transparent flex flex-col justify-center items-center translate-y-full project_outer">
                    <h3 className="sm:text-3xl text-2xl font-bold">Web Design</h3>
                    <p className="text-center sm:px-4 text-sm px-16">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatibus, voluptate.
                    </p>
                    <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center mt-2 hover:shadow-[1px_3px_4px_0px_black]">
                      <a href="#">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="text-white w-11/12 rounded-xl mt-5 sm:w-1/4">
              <div className="parent overflow-hidden rounded-xl">
                <div className="relative overflow-hidden project-container hover:transition hover:scale-110 hover:duration-700">
                  <img
                    src="/p2.jpg"
                    alt="UI Project"
                    className="w-full h-auto overflow-hidden"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-indigo-700 to-transparent flex flex-col justify-center items-center translate-y-full project_outer">
                    <h3 className="sm:text-3xl text-2xl font-bold">Web Design</h3>
                    <p className="text-center sm:px-4 text-sm px-16">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatibus, voluptate.
                    </p>
                    <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center mt-2 hover:shadow-[1px_3px_4px_0px_black]">
                      <a href="#">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="text-white w-11/12 rounded-xl mt-5 sm:w-1/4 self-center">
              <div className="parent overflow-hidden rounded-xl">
                <div className="relative overflow-hidden project-container hover:transition hover:scale-110 hover:duration-700">
                  <img
                    src="/pp3.jpg"
                    alt="UI Project"
                    className="w-full h-auto overflow-hidden"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-indigo-700 to-transparent flex flex-col justify-center items-center translate-y-full project_outer">
                    <h3 className="sm:text-3xl text-2xl font-bold">Web Design</h3>
                    <p className="text-center sm:px-4 text-sm px-16">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatibus, voluptate.
                    </p>
                    <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center mt-2 hover:shadow-[1px_3px_4px_0px_black]">
                      <a href="#">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="text-white w-11/12 rounded-xl mt-5 sm:w-1/4">
              <div className="parent overflow-hidden rounded-xl">
                <div className="relative overflow-hidden project-container hover:transition hover:scale-110 hover:duration-700">
                  <img
                    src="/p4.jpg"
                    alt="UI Project"
                    className="w-full h-auto overflow-hidden"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-indigo-700 to-transparent flex flex-col justify-center items-center translate-y-full project_outer">
                    <h3 className="sm:text-3xl text-2xl font-bold">Web Design</h3>
                    <p className="text-center sm:px-4 text-sm px-16">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatibus, voluptate.
                    </p>
                    <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center mt-2 hover:shadow-[1px_3px_4px_0px_black]">
                      <a href="#">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="text-white w-11/12 rounded-xl mt-5 sm:w-1/4">
              <div className="parent overflow-hidden rounded-xl">
                <div className="relative overflow-hidden project-container hover:transition hover:scale-110 hover:duration-700">
                  <img
                    src="/p5.png"
                    alt="UI Project"
                    className="w-full h-auto overflow-hidden"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-indigo-700 to-transparent flex flex-col justify-center items-center translate-y-full project_outer">
                    <h3 className="sm:text-3xl text-2xl font-bold">Web Design</h3>
                    <p className="text-center sm:px-4 text-sm px-16">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatibus, voluptate.
                    </p>
                    <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center mt-2 hover:shadow-[1px_3px_4px_0px_black]">
                      <a href="#">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 6 */}
            <div className="text-white w-11/12 rounded-xl mt-5 sm:w-1/4">
              <div className="parent overflow-hidden rounded-xl">
                <div className="relative overflow-hidden project-container hover:transition hover:scale-110 hover:duration-700">
                  <img
                    src="/p6.jpg"
                    alt="UI Project"
                    className="w-full h-auto overflow-hidden"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-indigo-700 to-transparent flex flex-col justify-center items-center translate-y-full project_outer">
                    <h3 className="sm:text-3xl text-2xl font-bold">Web Design</h3>
                    <p className="text-center sm:px-4 text-sm px-16">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatibus, voluptate.
                    </p>
                    <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center mt-2 hover:shadow-[1px_3px_4px_0px_black]">
                      <a href="#">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          className="h-auto w-full border border-slate-900 border-t-0 border-l-0 border-r-0 border-b-1"
          id="Contact"
        >
          <h3 className="w-1/2 m-auto text-center bg-gradient-to-r from-purple-500 via-white-900 text-transparent bg-clip-text text-4xl font-bold capitalize py-5">
            Contact
          </h3>
          <div className="parent flex flex-col md:flex-row h-auto justify-around mb-10">
            <div className="p-6">
              <fieldset className="border-1 border-purple-900 border-4 rounded-xl">
                <form className="grid grid-cols-2 gap-4 p-8 w-full">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    name="name"
                    className="bg-transparent text-white outline-none border-1 border-l-0 border-r-0 border-t-0 border-b-2 border-purple-700 text-center"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    name="Last Name"
                    className="bg-transparent text-white outline-none border-1 border-l-0 border-r-0 border-t-0 border-b-2 border-purple-700 text-center"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    name="Email"
                    className="bg-transparent text-white outline-none border-1 border-l-0 border-r-0 border-t-0 border-b-2 border-purple-700 text-center"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    name="Phone"
                    className="bg-transparent text-white outline-none border-1 border-l-0 border-r-0 border-t-0 border-b-2 border-purple-700 text-center"
                  />
                  <label
                    htmlFor="suggestion"
                    className="bg-purple-950 text-transparent bg-clip-text font-bold active:border-purple-900"
                  >
                    Your Suggestion / Feedback
                  </label>
                  <textarea
                    id="suggestion"
                    maxLength="200"
                    className="bg-transparent text-white border-none focus:border-purple-950 col-span-2 h-32 outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="rounded-xl px-4 text-white cursor-pointer bg-gradient-to-r from-purple-500 via-white-900 font-bold self-center hover:text-white hover:animate-pulse w-full "
                  >
                    Send <i className="fa-solid fa-paper-plane text-white"></i>
                  </button>
                </form>
              </fieldset>
            </div>
            <address className="self-center space-y-6">
              <h3 className="text-purple-950 font-bold md:text-2xl underline underline-purple-900 capitalize flex justify-center text-3xl pb-4 md:pb-0">
                lets work together<span className="text-white ml-2">!</span>
              </h3>
              {/* phone number */}
              <div className="parent flex text-white hover:animate-pulse">
                <div className="bg-purple-950 h-14 w-14 flex justify-center items-center rounded-full">
                  <i className="fa-solid fa-phone text-white"></i>
                </div>
                <div className="ml-3 self-center">
                  <p className="flex flex-col">Phone</p>
                  <p>+91 7020471065</p>
                </div>
              </div>
              {/* email */}
              <div className="parent flex text-white hover:animate-pulse">
                <div className="bg-purple-950 h-14 w-14 flex justify-center items-center rounded-full">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="ml-3 self-center">
                  <p className="flex flex-col">Email</p>
                  <p>Rahilshaikh931@gmail.com</p>
                </div>
              </div>
              {/* address */}
              <div className="parent flex text-white hover:animate-pulse">
                <div className="bg-purple-950 h-14 w-14 flex justify-center items-center rounded-full">
                  <i className="fa-solid fa-location-pin"></i>
                </div>
                <div className="ml-3 self-center">
                  <p className="flex flex-col">Adress</p>
                  <p>Saisudarshan Colony, Nasik</p>
                </div>
              </div>
            </address>
          </div>

          {/* Scroller */}
          <div className="fixed h-20 w-10 bg-transparent border-purple-500 border to-black flex justify-center items-center rounded-full top-[300px] right-5">
            <a href="#">
              <i className="fa-solid fa-arrow-up text-white text-2xl"></i>
            </a>
          </div>
        </section>
      </main>
      {/* Footer Section */}
      <footer>
        <div className="parent flex flex-col justify-around items-center h-36 bg-purple-950">
          <div>
            <i className="fa-solid fa-at text-5xl"></i>
          </div>
          <div>
            <nav>
              <ul className="flex justify-center space-x-3 flex-wrap text-white">
                <li className="hover:underline decoration-purple-900">
                  <a href="#Home">Home</a>
                </li>
                <li className="hover:underline decoration-purple-900">
                  <a href="#About">About Me</a>
                </li>
                <li className="hover:underline decoration-purple-900">
                  <a href="#Skills">Skills</a>
                </li>
                <li className="hover:underline decoration-purple-900">
                  <a href="#Services">Services</a>
                </li>
                <li className="hover:underline decoration-purple-900">
                  <a href="#Portfolio">Portfolio</a>
                </li>
                <li className="hover:underline decoration-purple-900">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full text-center">
            <p className="bg-black text-white py-2">
              Copyright © 2024 - 2025 TermsFeed®. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
