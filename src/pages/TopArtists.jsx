/* eslint-disable quotes */
import { Error, ArtistCard, Loader } from "../components";

import { useGetTopChartsQuery } from "../redux/fetchings/shazam";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    <Loader title="loading Top Charts" />;
  }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center">
        {data?.map((track) => (
          <ArtistCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
