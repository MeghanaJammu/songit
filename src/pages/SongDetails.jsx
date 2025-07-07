/* eslint-disable no-unused-vars */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/fetchings/shazamLyrics";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error,
  } = useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails) {
    return <Loader title="searching song details" />;
  }

  if (error) return <Error />;

  console.log(songData);
  let lyricsText = null;

  if (songData?.resources?.lyrics) {
    const lyricsData = Object.values(songData.resources.lyrics)[0];
    lyricsText = lyricsData?.attributes?.text;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {lyricsText ? (
            lyricsText.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Soryy, No lyrics found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
