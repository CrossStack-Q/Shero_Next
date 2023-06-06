"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
// import { useBoardStore } from "@/store/BoardStore";
import { useEffect, useState } from "react";
import { useBoardStore } from "@/store/BoardStore";
import Button from "./Button";
// import fetchSuggestion from "@/lib/fetchSuggestion";

const Header = () => {

    const [board, searchString, setSearchString] = useBoardStore((state) => [
        state.board,
        state.searchString,
        state.setSearchString,
      ]);
    

  return (
<header>
      <div className="flex flex-col md:flex-row pb-10 h-[10vh] items-center p-5 bg-gray-500/10">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50" />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}

          <form className="flex items-center space-x-5 bg-light-background dark:bg-dark-background rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2 bg-light-background dark:bg-dark-background"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar */}
          <Button/>
          <Avatar name="Anurag Sharma" round size="50" color="#0055D1" />
        </div>
      </div>

  
    </header>
  );
};

export default Header;