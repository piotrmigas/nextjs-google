import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Headeroption from "./HeaderOption";

const Headeroptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <Headeroption Icon={SearchIcon} title="All" selected />
        <Headeroption Icon={PhotographIcon} title="Images" />
        <Headeroption Icon={PlayIcon} title="Videos" />
        <Headeroption Icon={NewspaperIcon} title="News" />
        <Headeroption Icon={MapIcon} title="Maps" />
        <Headeroption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default Headeroptions;
