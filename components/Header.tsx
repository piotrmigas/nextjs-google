import { useRef, SyntheticEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MicrophoneIcon, MagnifyingGlassIcon, XMarkIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { CogIcon } from '@heroicons/react/24/outline';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const term = searchInputRef.current && searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  const handleClick = () => {
    if (searchInputRef.current) searchInputRef.current.value = '';
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          alt=''
          src='/img/logo.png'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form className='flex flex-grow px-6 py-2 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center ml-10 mr-5'>
          <input
            type='text'
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
            defaultValue={router.query.term}
          />
          <XMarkIcon
            className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3'
            onClick={handleClick}
          />
          <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <div className='flex ml-auto space-x-4'>
          <CogIcon className='text-gray-700 w-10 h-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer hidden md:block' />
          <Squares2X2Icon className='w-10 h-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer' />
          <Avatar url='https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg' />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
