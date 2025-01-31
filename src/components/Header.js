"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import AdbIcon from "@mui/icons-material/Adb";
import github from "../../public/github.png";
import leetcode from "../../public/leetcode.png";
import instagram from "../../public/instagram.png";
import linkedin from "../../public/linkedin.png";
import x from "../../public/x.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      setScrollUp(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fullWidth
      className={`fixed top-0 z-50 px-4 py-2 transition-all shadow-none ${
        isScrolled && scrollUp ? " bg-transparent" : "bg-blue-50"
      }`}
    >
      <div className="flex items-center justify-between p-3">
        <div className="hidden sm:flex gap-4">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            {
              href: "https://justskills.in/",
              label: "Articles",
              external: true,
            },
          ].map(({ href, label, external }) => (
            <Typography
              key={label}
              variant="medium"
              className="text-violet-400 font-bold hover:text-violet-600"
            >
              <Link href={href} {...(external ? { target: "_blank" } : {})}>
                {label}
              </Link>
            </Typography>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <AdbIcon className="text-violet-500" />
          <Link href="/">
            <Typography
              variant="h4"
              className="text-violet-500 font-bold cursor-pointer"
            >
              ANUBHAV RAY
            </Typography>
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
          {[github, leetcode, instagram, linkedin, x].map((src, index) => (
            <Link key={index} href="#" target="_blank">
              <Image
                src={src}
                alt="social"
                className="h-8 w-8 rounded-full"
                aria-label={`Social media link ${index + 1}`}
              />
            </Link>
          ))}
        </div>
        <IconButton
          className="sm:hidden flex items-center justify-center bg-transparent shadow-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="text-black" />
          ) : (
            <Menu className="text-black" />
          )}
        </IconButton>
      </div>
      <Collapse
        open={open}
        className="sm:hidden flex flex-col items-center gap-2 mt-2 text-violet-500 font-bold"
      >
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
          {
            href: "https://blog.fastbricks.in/",
            label: "Blog",
            external: true,
          },
        ].map(({ href, label, external }) => (
          <Typography
            key={label}
            variant="small"
            className="text-center hover:text-violet-600"
          >
            <Link
              href={href}
              {...(external ? { target: "_blank" } : {})}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          </Typography>
        ))}
        <div className="flex gap-4 mt-4">
          {[github, leetcode, instagram, linkedin, x].map((src, index) => (
            <Link key={index} href="#" target="_blank">
              <Image
                src={src}
                alt="social"
                className="h-8 w-8 rounded-full"
                aria-label={`Social media link ${index + 1}`}
              />
            </Link>
          ))}
        </div>
      </Collapse>
    </Navbar>
  );
}
