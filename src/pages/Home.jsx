import { useSelector } from "react-redux";
import BannerHome from "../component/BAnnerHome";

import HorizontalCard from "../component/HorizontalCard";

import { useFetch } from "../hooks/useFetch";

function Home() {
  const trandingData = useSelector((state) => state.movieoData.bannerData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRated } = useFetch("/movie/top_rated");
  const { data: popular } = useFetch("/tv/popular");
  const { data: onTheAir } = useFetch("/tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <HorizontalCard
        data={trandingData}
        heading={"trending"}
        trending={true}
      />
      <HorizontalCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalCard
        data={topRated}
        heading={"Top Rated"}
        media_type={"movie"}
      />
      <HorizontalCard data={popular} heading={"Popular"} media_type={"tv"} />
      <HorizontalCard
        data={onTheAir}
        heading={"On The Air"}
        media_type={"tv"}
      />
    </div>
  );
}

export default Home;
