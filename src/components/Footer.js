import Image from "next/image";
import Link from "next/link";

import github from "../../public/github.png";
import leetcode from "../../public/leetcode.png";
import x from "../../public/x.png";
import instagram from "../../public/instagram.png";
import linkedin from "../../public/linkedin.png";
const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-3 gap-0 sm:gap-6 text-center">
            <Link href={"/about"}>
              <h2 className="text-sm font-semibold text-violet-400 hover:text-violet-600">
                About
              </h2>
            </Link>
            <Link href={"/contact"}>
              <div>
                <h2 className="text-sm font-semibold text-violet-400 hover:text-violet-600 ">
                  Contact
                </h2>
              </div>
            </Link>
            <Link href={"https://blog.fastbricks.in"} target="_blank">
              <div>
                <h2 className="text-sm font-semibold text-violet-400 hover:text-violet-600 ">
                  Blog
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex mt-4 justify-center sm:mt-0 gap-3">
            <Link href={"https://github.com/anubhavray678"} target="_blank">
              <Image
                className="rounded-full h-5 w-5 sm:h-8 sm:w-8"
                src={github}
                alt=""
              />
            </Link>
            <Link
              href={"https://leetcode.com/u/anubhavray678/"}
              target="_blank"
            >
              <Image
                className="rounded-full h-5 w-5 sm:h-8 sm:w-8"
                src={leetcode}
                alt=""
              />
            </Link>
            <Link
              href={"https://www.instagram.com/anubhavray.me/"}
              target="_blank"
            >
              <Image
                className="rounded-full h-5 w-5 sm:h-8 sm:w-8"
                src={instagram}
                alt=""
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/anubhavray/"}
              target="_blank"
            >
              <Image
                className="rounded-full h-5 w-5 sm:h-8 sm:w-8"
                src={linkedin}
                alt=""
              />
            </Link>
            <Link href={"https://twitter.com/AnubhavRay_"} target="_blank">
              <Image
                className="rounded-full h-5 w-5 sm:h-8 sm:w-8"
                src={x}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
