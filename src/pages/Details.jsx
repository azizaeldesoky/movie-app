import { useState } from "react";
import { useParams } from "react-router";

import { useFetchDetails } from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import Divider from "../component/Divider";
import moment from "moment";
import { useFetch } from "../hooks/useFetch";
import HorizontalCard from "../component/HorizontalCard";

function Details() {
  const params = useParams();
  //console.log(params);
  const imageURL = useSelector((state) => state.movieoData.imageURL);
  const { data } = useFetchDetails(`/${params.explore}/${params.id}`);
  const { data: castData } = useFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );
  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendationData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );

  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
  const writer =
    castData?.crew?.find((el) => el?.job === "Writer")?.name ||
    castData?.crew?.find((el) => el?.job === "Screenplay")?.name;

  if (!data || !castData) return <div className="text-white">Loading...</div>;
  console.log("cast crew", castData);
  console.log("similarData", similarData);

  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full object-cover w-full"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-b from-neutral-900/90 to-transparent"></div>
      </div>
      <div className="container mx-auto px-3 py-16 lg:px-10 lg:py-0 flex gap-10 lg:flex-row  md:flex-col sm:flex-col ">
        <div className="relative mx-auto lg:-mt-28 mx-0 lg:mx-0 w-fit">
          <img
            src={imageURL + data?.poster_path}
            className="h-80 object-cover w-60 rounded"
          />
        </div>

        <div className="w-[80%] lg:w-full ">
          <h2 className="text-2xl lg:text-4xl font-bold text-white ">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>
          <Divider />
          <div className="flex items-center gap-3">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View : {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />

          <div>
            <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
            <p>{data?.overview}</p>

            <Divider />
            <div className="flex items-center gap-3 my-3 text-center">
              <p>Staus : {data?.status}</p>
              <span>|</span>
              <p>
                Release Date :{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>Revenue : {Number(data?.revenue)}</p>
            </div>

            <Divider />
          </div>
          <div>
            <p>
              <span className="text-white">Director</span> :{" "}
              {castData?.crew?.[0]?.name || "Unknown"}
            </p>

            <Divider />

            <p>
              <span className="text-white">Writer : {writer}</span>
            </p>
          </div>
          <Divider />

          <h2 className="font-bold text-lg">Cast :</h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
            {castData?.cast
              ?.filter((el) => el?.profile_path)
              .map((starCast, index) => {
                return (
                  <div>
                    <div>
                      <img
                        src={imageURL + starCast?.profile_path}
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                    <p className="font-bold text-center text-sm text-neutral-400">
                      {starCast?.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div>
        {similarData && (
          <HorizontalCard
            data={similarData}
            heading={"Similar " + params?.explore}
            media_type={params?.explore}
          />
        )}

        {recommendationData ? (
          <HorizontalCard
            data={recommendationData}
            heading={"Recommendation " + params?.explore}
            media_type={params?.explore}
          />
        ) : (
          <p>No recommendations available</p> // نص بديل في حال عدم وجود التوصيات
        )}
      </div>
    </div>
  );
}

export default Details;
