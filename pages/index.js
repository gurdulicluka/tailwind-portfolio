import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tailwind Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition duration-400 ease-in">
        <section className="mb-12">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-400">johndoe</h1>
            <ul className="flex items-center">
              <li>
                <button>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-gray-300 inline"
                  />
                </button>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              John Doe
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-400">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Experienced frontend developer. Providing services for all
              programming needs. Join me down below and let's get started!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="avatar" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-400">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis
              cum velit ratione architecto{" "}
              <span className="text-teal-500">minus</span> voluptate accusamus{" "}
              <span className="text-teal-500">animi</span> fuga laboriosam!
              Laboriosam officiis temporibus facere voluptate id dicta vel
              doloremque natus!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor,
              facere similique quasi asperiores rerum in recusandae itaque
              debitis minima.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-t dark:from-black">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-400">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae, molestias? In consequuntur quaerat suscipit ipsa!
              </p>
              <h4 className="py-4 text-teal-600">Lorem ipsum dolor sit.</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-t dark:from-black">
              <Image src={code} alt="code" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-400">
                Clean Code
              </h3>
              <p className="py-2 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae, molestias? In consequuntur quaerat suscipit ipsa!
              </p>
              <h4 className="py-4 text-teal-600">Lorem ipsum dolor sit.</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-t dark:from-black">
              <Image
                src={consulting}
                alt="consulting"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-400">
                Innovative Consulting
              </h3>
              <p className="py-2 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae, molestias? In consequuntur quaerat suscipit ipsa!
              </p>
              <h4 className="py-4 text-teal-600">Lorem ipsum dolor sit.</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Lorem.</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-400">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis
              cum velit ratione architecto{" "}
              <span className="text-teal-500">minus</span> voluptate accusamus{" "}
              <span className="text-teal-500">animi</span> fuga laboriosam!
              Laboriosam officiis temporibus facere voluptate id dicta vel
              doloremque natus!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor,
              facere similique quasi asperiores rerum in recusandae itaque
              debitis minima.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="project"
                width={"100"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="project"
                width={"100"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="project"
                width={"100"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="project"
                width={"100"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="project"
                width={"100"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="project"
                width={"100"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
