//import "./App.css";

import { Outlet } from "react-router";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MobileNav from "./component/MobileNav";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieSlice";

function App() {
  const dispatch = useDispatch();
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/day");
      dispatch(setBannerData(response.data.results));
      //console.log(response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
      //console.log("conn", response.data.images.secure_base_url + "original");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);
  return (
    <div className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
