/* eslint-disable quotes */
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/fetchings/shazam";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading your songsss..." />;

  if (error) return <Error />;

  console.log(data);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold  text-3xl text-white text-left">
          Discover YourSelf in {genreTitle}
        </h2>
        <select
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          onChange={() => {}}
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => (
          <SongCard
            isPlaying={isPlaying}
            activeSong={activeSong}
            key={song.id}
            i={i}
            song={song}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};
export default Discover;
