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
          className="self-start p-2 text-black transition-colors rounded-lg bg-zinc-100 hover:bg-zinc-200"
          onClick={handleOpenLiked}
          type="button"
        >
          ← Volver atrás
        </button>
        <div className="flex flex-col gap-4 overflow-y-auto h-[80vh] snap-y pr-2">
          {liked.length
            ? liked.map((_challenge) => (
                <div
                  key={_challenge.id}
                  className="max-w-lg p-6 rounded-lg shadow bg-zinc-800 border-zinc-700 snap-start"
                >
                  <h2 className="mb-2 text-2xl font-bold tracking-tight">
                    {_challenge.title}
                  </h2>
                  <p className="mb-3 font-normal text-gray-400 line-clamp-3">
                    {_challenge.description}
                  </p>
                  <a
                    href={`https://www.frontendmentor.io/challenges/${_challenge.slug}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center transition-colors rounded-lg focus:ring-4 focus:outline-none bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver challenge →
                  </a>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
  return challenges.length ? (
        <div className="flex flex-col pb-4 bg-zinc-800 rounded-3xl justify-self-center">
          <div className="rounded-t-3xl">
            <div className="flex flex-col gap-2">
              <img
                src={challenge.heroImage}
                alt={challenge.title}
                className="object-cover w-full rounded-t-3xl h-80"
              />
              <div className="flex flex-col gap-2 p-4">
                <h2 className="text-xl font-medium line-clamp-1">
                  {challenge.title}
                </h2>
                <p className="line-clamp-3 text-zinc-200">
                  {challenge.description}
                </p>
              </div>
            </div>
          </div>
          <hr className="opacity-40" />
          <div className="flex items-center justify-center gap-4 p-4 mt-2">
            <div className="relative flex group">
              <button
                aria-label="Reiniciar"
                className="p-2 transition duration-300 ease-in-out rounded-full bg-zinc-700 drop-shadow-lg text-amber-500 hover:scale-110"
                onClick={handleReset}
                type="button"
              >
                <MdOutlineRestartAlt size={35} />
              </button>
              <span className="absolute px-1 m-4 mx-auto text-sm transition-opacity -translate-x-1/2 translate-y-12 rounded-md opacity-0 group-hover:opacity-100 bg-zinc-700 text-zinc-100 left-1/2">
                Reiniciar
              </span>
            </div>
            <div className="relative flex group">
              <button
                aria-label="Nope"
                className="p-4 text-pink-500 transition duration-300 ease-in-out rounded-full bg-zinc-700 drop-shadow-lg hover:scale-110"
                onClick={handleDislike}
                type="button"
              >
                <ImCross size={35} />
              </button>
              <span className="absolute px-1 m-4 mx-auto text-sm transition-opacity -translate-x-1/2 rounded-md opacity-0 group-hover:opacity-100 bg-zinc-700 text-zinc-100 left-1/2 translate-y-14">
                Nope
              </span>
            </div>
            <div className="relative flex group">
              <button
                aria-label="Like"
                className="p-4 transition duration-300 ease-in-out rounded-full bg-zinc-700 drop-shadow-lg text-emerald-500 hover:scale-110"
                onClick={handleLike}
                type="button"
              >
                <FaHeart size={35} />
              </button>
              <span className="absolute px-1 m-4 mx-auto text-sm transition-opacity -translate-x-1/2 rounded-md opacity-0 group-hover:opacity-100 bg-zinc-700 text-zinc-100 left-1/2 translate-y-14">
                Like
              </span>
            </div>
            <div className="relative flex group">
              <button
                disabled={liked.length === 0}
                aria-label="Lista de likes"
                className="p-2 transition duration-300 ease-in-out rounded-full bg-zinc-700 drop-shadow-lg text-amber-500 hover:scale-110 disabled:opacity-40 disabled:pointer-events-none"
                onClick={handleOpenLiked}
                type="button"
              >
                <MdFormatListBulleted size={35} />
              </button>
              <span className="absolute inline-block px-1 m-4 mx-auto text-sm transition-opacity -translate-x-1/2 translate-y-12 rounded-md opacity-0 group-hover:opacity-100 bg-zinc-700 text-zinc-100 left-1/2">
                {liked.length === 0 ? "Lista vacía" : "Lista"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col pb-4 bg-zinc-800 rounded-3xl justify-self-center">
          <div className="rounded-t-3xl">
            <div className="flex flex-col gap-2">
              <div
                className="object-cover animate-pulse bg-zinc-700 rounded-t-3xl h-80"
              ></div>
              <div className="flex flex-col gap-2 p-4">
                <h2 className="text-xl font-medium line-clamp-1">
                  No hay mas challenges 😿
                </h2>
                <p className="line-clamp-3 text-zinc-200">
                  Usa la lista para ver los challenges que te gustaron, o reinicia la lista para ver todos los challenges de nuevo.
                </p>
              </div>
            </div>
          </div>
          <hr className="opacity-40" />
          <div className="flex items-center justify-center gap-4 p-4 mt-2">
            <div className="relative flex group">
              <button
                aria-label="Reiniciar"
                className="p-2 transition duration-300 ease-in-out rounded-full bg-zinc-700 drop-shadow-lg text-amber-500 hover:scale-110"
                onClick={handleReset}
                type="button"
              >
                <MdOutlineRestartAlt size={35} />
              </button>
              <span className="absolute px-1 m-4 mx-auto text-sm transition-opacity -translate-x-1/2 translate-y-12 rounded-md opacity-0 group-hover:opacity-100 bg-zinc-700 text-zinc-100 left-1/2">
                Reiniciar
              </span>
            </div>
            <div className="relative flex group">
              <button
                aria-label="Nope"
                disabled
                className="p-4 text-pink-500 transition duration-300 ease-in-out rounded-full disabled:opacity-40 disabled:pointer-events-none bg-zinc-700 drop-shadow-lg hover:scale-110"               
                type="button"
              >
                <ImCross size={35} />
              </button>
              <span className="absolute px-1 m-4 mx-auto text-sm transition-opacity -translate-x-1/2 rounded-md opacity-0 group-hover:opacity-100 bg-zinc-700 text-zinc-100 left-1/2 translate-y-14">
                Nope
              </span>
            </div>
            <div className="relative flex group">
              <button
              disabled
                aria-label="Like"
                className="p-4 transition duration-300 ease-in-out rounded-full disabled:opacity-40 disabled:pointer-events-none bg-zinc-700 drop-shadow-lg text-emerald-500 hover:scale-110" 
                type="button"
              >
                <FaHeart size={35} />
              </button>
              <span className="absolute px-1 m-4 mx-auto text-sm transition-opacity -translate-x-1/2 rounded-md opacity-0 group-hover:opacity-100 bg-zinc-700 text-zinc-100 left-1/2 translate-y-14">
                Like
              </span>
            </div>
            <div className="relative flex group">
            <button
                disabled={liked.length === 0}
                aria-label="Lista de likes"
                className="p-2 transition duration-300 ease-in-out rounded-full bg-zinc-700 drop-shadow-lg text-amber-500 hover:scale-110 disabled:opacity-40 disabled:pointer-events-none"
                onClick={handleOpenLiked}
                type="button"
              >
                <MdFormatListBulleted size={35} />
              </button>
              <span className="absolute inline-block px-1 m-4 mx-auto text-sm transition-opacity -translate-x-1/2 translate-y-12 rounded-md opacity-0 group-hover:opacity-100 bg-zinc-700 text-zinc-100 left-1/2">
                {liked.length === 0 ? "Lista vacía" : "Lista"}
              </span>
            </div>
          </div>
        </div>
  );
}
