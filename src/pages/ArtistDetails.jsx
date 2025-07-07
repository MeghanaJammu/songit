/* eslint-disable no-unused-vars */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader } from "../components";

import { useGetArtistDetailsQuery } from "../redux/fetchings/shazamLyrics";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) {
    return <Loader title="searching Artist details" />;
  }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
    </div>
  );
};

export default ArtistDetails;
