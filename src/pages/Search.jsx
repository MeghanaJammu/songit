/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Error, Loader, SearchRes } from "../components";

import { useGetSongBySearchQuery } from "../redux/fetchings/shazam";

const Search = () => {
  const { searchVal } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongBySearchQuery(searchVal);

  const songs = data?.tracks?.hits
    ?.map((item) => item.track)
    ?.filter((track) => track !== undefined && track?.images?.coverart);

  if (isFetching) {
    return <Loader title="loading results" />;
  }

  if (error) {
    console.log(error);
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span>{searchVal}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center">
        {songs?.map((song, i) => (
          <SearchRes
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={songs}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
