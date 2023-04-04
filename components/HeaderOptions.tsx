import {
  EllipsisVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import HeaderOption from './HeaderOption';

const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
      <div className='flex space-x-6'>
        <HeaderOption Icon={<MagnifyingGlassIcon className='h-4' />} title='All' selected />
        <HeaderOption Icon={<PhotoIcon className='h-4' />} title='Images' />
        <HeaderOption Icon={<PlayIcon className='h-4' />} title='Videos' />
        <HeaderOption Icon={<NewspaperIcon className='h-4' />} title='News' />
        <HeaderOption Icon={<MapIcon className='h-4' />} title='Maps' />
        <HeaderOption Icon={<EllipsisVerticalIcon className='h-4' />} title='More' />
      </div>
      <div className='flex space-x-4'>
        <p className='link'>Settings</p>
        <p className='link'>Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
