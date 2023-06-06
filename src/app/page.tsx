import Image from "next/image";
import Logo from "../images/logo.png";
import Boot from "../images/air force cano alto.png";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="block ">
        <nav className='font-sans border-gray-200 px-2 lg:px-2 py-2.5 bg-white "'>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl mt-20 gap-42">
            <Image
              src={Logo}
              alt="logo da nike"
              width={100}
              height={52}
              className="cursor-pointer transform hover:rotate-180 transition duration-500 ease-in-out 
              text-white font-bold rounded-lg z-30"
            ></Image>
            <li
              className="list-none text-bgcolor text-4xl transform 
                                transition duration-500 hover:scale-125 cursor-pointer z-30 "
            >
              View
            </li>
            <li
              className="list-none text-bgcolor text-3xl  transform 
                                transition duration-500 hover:scale-125 cursor-pointer  z-30 "
            >
              Sale
            </li>
            <li
              className="list-none text-bgcolor text-3xl  transform 
                                transition duration-500 hover:scale-125 cursor-pointer z-30"
            >
              Men
            </li>
            <li
              className="list-none text-bgcolor text-3xl  transform 
                                transition duration-500 hover:scale-125 cursor-pointer  z-30 "
            >
              Woman
            </li>

            <button
              className="rounded-full ring-4 ring-gray-800 ring-inset px-12 py-4 text-2xl
            transform 
            transition duration-500 hover:scale-110 
            cursor-pointer z-30 shadow-2xl"
            >
              Search
            </button>
          </div>
        </nav>
      </header>

      <div className="">
        <h2
          className="text-pink-200  text-5xl absolute opacity-0.1 z-0"
          style={{ writingMode: "vertical-rl" }}
        >
          <div className="flex justify-center items-center ml-64">
            <div className="w-full relative">
              <div className="bg-pink-300  mix-blend-multiply animation-delay-2000 animate-blob absolute filter blur-3xl inset-0 m-auto -bottom-8 h-128 w-128 rounded-full"></div>
            </div>
          </div>
          AIR
        </h2>
      </div>
      <div className="flex justify-center items-center pt-16">
        <h1 className="text-pink-100 text-5xl text-right pl-paddingleft opacity-0.1 z-10 font-sans-light">
          <div className="flex z-20 ml-24 mt-32 ">
            <div className="w-full relative  ">
              <div className="bg-pink-300  mix-blend-multiply absolute animation-delay-2000 animate-blob filter blur-3xl inset-0 m-auto -bottom-8 h-128 w-128 rounded-full "></div>
            </div>
          </div>
          <p className="pl-16 text-justify">JUST</p>
          DO <br />
          IT.
        </h1>

        <Image
          src={Boot}
          alt="nike air force"
          width={986}
          height={456}
          className="z-10 absolute"
        ></Image>
      </div>
      <div></div>
    </main>
  );
}
