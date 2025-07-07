/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable quotes */

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const songResources = songData?.resources?.["shazam-songs"];
  const songId = songResources ? Object.keys(songResources)[0] : null;
  const key = songData ? Object.keys(songData?.resources?.songs)[0] : null;
  const artist = artistData?.data[0]?.attributes;

  const coverArt = songId
    ? songResources[songId]?.attributes?.images?.coverArt
    : null;

  const artistImage = artistId
    ? artist?.artwork?.url?.replace("{w}", "500")?.replace("{h}", "500")
    : null;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-tl from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          alt="art"
          src={artistId ? artistImage : coverArt}
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId
              ? artist?.name || "loading..."
              : (songId && songResources?.[songId]?.attributes?.title) ||
                "loading..."}
          </p>
          {!artistId && (
            <p className="text-base text-gray-400 mt-2">
              {(songId && songResources?.[songId]?.attributes?.artist) ||
                "loading..."}
            </p>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId
              ? artist?.genreNames[0]
              : songData?.resources?.songs[key]?.attributes?.unitags[0]?.tag}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
