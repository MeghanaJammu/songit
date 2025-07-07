/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/artists/${track?.relationships?.artists?.data[0]?.id}`)
      }
      className="flex flex-col w-[250px p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <img alt="artist" src={track?.attributes?.artwork?.url} />
      <p className="mt-4 text-white font-semibold text-lg truncate">
        {track?.attributes?.artistName}
      </p>
    </div>
  );
};

export default ArtistCard;
