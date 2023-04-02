import { useRef, SyntheticEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Squares2X2Icon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

export default function Home() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const search = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const term = searchInputRef.current && searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex w-full p-5 mt-20 sm:mt-10 md:mt-0 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link hidden sm:block'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <Squares2X2Icon className='w-10 h-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer' />
          <Avatar url='https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg' />
        </div>
      </header>
      <form className='flex flex-col items-center mt-14 flex-grow w-4/5 mb-14 md:mb-0'>
        <Image src='/img/logo.png' height={100} width={300} alt='' />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500' />
          <input type='text' className='focus:outline-none flex-grow' ref={searchInputRef} />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>
            Google Search
          </button>
          <button className='btn' onClick={search}>
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
