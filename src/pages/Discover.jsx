/* eslint-disable operator-linebreak */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-duplicates */
/* eslint-disable quotes */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, GenreCard } from "../components";
import { genres } from "../assets/constants";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetByGenreQuery } from "../redux/fetchings/shazam";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );

  const [fetchEnabled, setFetchEnabled] = useState(false);

  // Delay API call by 1 second after component mounts
  useEffect(() => {
    const timeout = setTimeout(() => setFetchEnabled(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const { data, isFetching, error } = useGetByGenreQuery(genreListId || "POP", {
    skip: !fetchEnabled,
  });

  const genreTitle =
    genres.find(({ value }) => value === genreListId)?.title || "Pop";

  if (!fetchEnabled || isFetching)
    return <Loader title="Loading your songsss..." />;

  if (error?.status === 429)
    return <Error message="Too many requests, please try again shortly." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover Yourself in {genreTitle}
        </h2>
        <select
          value={genreListId || "POP"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <GenreCard
            key={song.id}
            i={i}
            song={song}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
