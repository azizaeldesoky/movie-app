import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  {
    label: "Tv Show",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    label: "Movies",
    href: "movies",
    icon: <BiSolidMoviePlay />,
  },
];
export const mobileNAvigation = [
  {
    label: "Home",
    href: "/",
    icon: <MdHomeFilled />,
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline />,
  },
];
