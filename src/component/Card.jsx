import moment from "moment/moment";

import { useSelector } from "react-redux";
import { Link } from "react-router";

function Card({ data, trending, index, media_type }) {
  const imageURL = useSelector((state) => state.movieoData.imageURL);
  const mediaType = data.media_type || data.mediaType || "movie";
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[220px] max-w-[220px] h-80 overflow-hidden rounded relative hover:scale-105 transform-all"
    >
      {data?.poster_path ? (
        <img src={imageURL + data.poster_path} />
      ) : (
        <div className="flex justify-center ">No Poster</div>
      )}

      <div className="absolute top-4">
        {trending && (
          <div className="py-1 px-4 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden z-11">
            #{index} Trending
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between">
          <p>
            {moment(data.release_date || data.first_air_date).format(
              "MMMM Do YYYY"
            )}
          </p>
          <p>⭐{Number(data.vote_average).toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
