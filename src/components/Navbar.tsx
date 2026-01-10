/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Genres from "./Genres";
import { Input } from "./ui/input";
import ThemeToggle from "./ThemeToggle";
import { Link, useNavigate, useLocation } from "react-router";
import { SearchResultContext } from "@/context/searchResult.context";
import { Search, Bell, User } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchText, setSearchText } = useContext(SearchResultContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 20);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    if (e.target.value.length === 0) {
      navigate("/");
    } else {
      navigate(`/search/${e.target.value}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 h-16 md:h-20 flex items-center 
        ${hasScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b"
          : "bg-gradient-to-b from-background/80 to-transparent"
        }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-14">

        {/* Left Section */}
        <div className="flex items-center gap-10">
          <motion.h1
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer flex items-center"
          >
            <span className="text-red-600">CINE</span>
            <span className="text-foreground">HUB</span>
          </motion.h1>

          <div className="hidden lg:flex items-center gap-8 text-[17px] font-bold">
            {["Home", "TVShows", "Movies", "Admin"].map((item) => {
              const path = item === "Home" ? "/" : `/${item}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`transition-all duration-200 hover:opacity-80 ${isActive
                      ? "text-red-600"
                      : "text-foreground/80"
                    }`}
                >
                  {item === "TVShows" ? "TV Shows" : item}
                </Link>
              );
            })}
            <Genres />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div
            className={`flex items-center transition-all duration-300 p-1.5 rounded-md border ${isSearchOpen
                ? "bg-background border-input w-48 md:w-64 shadow-lg"
                : "bg-transparent border-transparent w-10"
              }`}
          >
            <Search
              className="w-5 h-5 cursor-pointer text-foreground"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <motion.div
              initial={false}
              animate={{ width: isSearchOpen ? "100%" : 0, opacity: isSearchOpen ? 1 : 0 }}
              className="overflow-hidden"
            >
              <Input
                placeholder="Search movies..."
                value={searchText}
                onChange={handleChange}
                autoFocus={isSearchOpen}
                className="bg-transparent border-none focus-visible:ring-0 text-base h-7 w-full text-foreground placeholder:text-muted-foreground"
              />
            </motion.div>
          </div>

          <div className="flex items-center gap-4 text-foreground">
            <ThemeToggle />
            <Bell className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors hidden sm:block" />
            <div
              onClick={() => navigate("/auth")}
              className="w-9 h-9 rounded bg-red-600 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-red-600/20 shadow-lg"
            >
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;