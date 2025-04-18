import React from "react";
import { IoClose } from "react-icons/io5";
import { useFetchDetails } from "../hooks/useFetchDetails";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(
    `/${media_type}/${data?.id}/videos`
  );

  if (!videoData || !Array.isArray(videoData.results)) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 text-white">
        Loading or invalid video data...
      </div>
    );
  }

  const video =
    videoData.results.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
    ) || videoData.results.find((v) => v.site === "YouTube");

  return (
    <section className="fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center">
      <div className="bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative">
        <button
          onClick={close}
          className=" absolute -right-1 cursor-pointer text-3xl z-555"
        >
          <IoClose />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${video.key}`}
          className="w-full h-full"
          title="Video Trailer"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default VideoPlay;
