"use client";

import { useState } from "react";
//icons de react-icons
import { ImCross } from "react-icons/im";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineRestartAlt, MdFormatListBulleted } from "react-icons/md";

export default function HomePageClient({ challenges: initialState }) {
  const [challenges, setChallenges] = useState(initialState);
  const [liked, setLiked] = useState([]);
  const [showLiked, setShowLiked] = useState(false);
  const [challenge] = challenges;

  function handleDislike() {
    setChallenges((_challenges) => _challenges.slice(1));
  }
  function handleLike() {
    setLiked((_liked) => _liked.concat(challenge));
    setChallenges((_challenges) => _challenges.slice(1));
  }
  function handleReset() {
    setChallenges(initialState);
    setLiked([]);
  }
  function handleOpenLiked() {
    setShowLiked(!showLiked);
  }
  if (showLiked) {
    return (
      <div className="flex flex-col gap-4">
        <button
          className="self-start bg-zinc-100 text-black p-2 rounded-lg hover:bg-zinc-200 transition-colors"
          onClick={handleOpenLiked}
          type="button"
        >
          ← Volver atrás
        </button>
        <div className="flex flex-col gap-4 overflow-y-auto h-[80vh] snap-y pr-2">
          {liked.length ? (
            liked.map((_challenge) => (
              <div
                key={_challenge.id}
                className="max-w-lg p-6  rounded-lg shadow bg-zinc-800 border-zinc-700 snap-start"
              >
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {_challenge.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 line-clamp-3">
                  {_challenge.description}
                </p>
                <a
                  href={`https://www.frontendmentor.io/challenges/${_challenge.slug}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver challenge →
                </a>
              </div>
            ))
          ) : (
            <div className="max-w-lg p-6 text-center rounded-lg shadow bg-zinc-800 border-zinc-700">
              <p>Cuando des Like a un Challenge, podrás verlo aquí 💪.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col bg-zinc-800 pb-4 rounded-xl justify-self-center">
      <div key={challenge.id} className="rounded">
        <div className="flex flex-col gap-2">
          <img
            src={challenge.heroImage}
            alt={challenge.title}
            className="rounded-t-xl aspect-[15/11]"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-medium p-4">{challenge.title}</h3>
            <p className="line-clamp-6 md:line-clamp-3 text-white/80 p-4 ">
              {challenge.description}
            </p>
          </div>
        </div>
      </div>
      <hr className="opacity-40"/>
      <div className="flex gap-4 mt-2 p-4 items-center justify-center">
        <div className="group flex relative">
          <button
            data-tooltip-target="tooltip-animation"
            className="bg-zinc-700 drop-shadow-lg text-amber-500 p-2 rounded-full hover:scale-110 transition duration-300 ease-in-out"
            onClick={handleReset}
            type="button"
          >
            <MdOutlineRestartAlt size={35} />
          </button>
          <span
            className="group-hover:opacity-100 transition-opacity bg-zinc-700 px-1 text-sm text-zinc-100 rounded-md absolute left-1/2 
            -translate-x-1/2 translate-y-12 opacity-0 m-4 mx-auto"
          >
            Reiniciar
          </span>
        </div>
        <div className="group flex relative">
        <button
          className="bg-zinc-700 drop-shadow-lg text-pink-500 p-4 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          onClick={handleDislike}
          type="button"
        >
          <ImCross size={35} />
        </button>
          <span
            className="group-hover:opacity-100 transition-opacity bg-zinc-700 px-1 text-sm text-zinc-100 rounded-md absolute left-1/2 
            -translate-x-1/2 translate-y-14 opacity-0 m-4 mx-auto"
          >
            Nope
          </span>
        </div>
        <div className="group flex relative">
        <button
          className="bg-zinc-700 drop-shadow-lg text-emerald-500 p-4 rounded-full hover:scale-110 transition duration-300 ease-in-out "
          onClick={handleLike}
          type="button"
        >
          <FaHeart size={35} />
        </button>
          <span
            className="group-hover:opacity-100 transition-opacity bg-zinc-700 px-1 text-sm text-zinc-100 rounded-md absolute left-1/2 
            -translate-x-1/2 translate-y-14 opacity-0 m-4 mx-auto"
          >
            Like
          </span>
        </div><div className="group flex relative">
        <button
          className="bg-zinc-700 drop-shadow-lg text-amber-500 p-2 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          onClick={handleOpenLiked}
          type="button"
        >
          <MdFormatListBulleted size={35} />
        </button>
          <span
            className="group-hover:opacity-100 transition-opacity bg-zinc-700 px-1 text-sm text-zinc-100 rounded-md absolute left-1/2 
            -translate-x-1/2 translate-y-12 opacity-0 m-4 mx-auto"
          >
            Lista
          </span>
        </div>
        
        
        
      </div>
    </div>
  );
}
