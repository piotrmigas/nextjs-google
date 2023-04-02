import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Paginationbtns = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className='flex justify-between max-w-lg text-blue-700 mb-10'>
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className='flex flex-col flex-grow cursor-pointer items-center hover:underline'>
            <ChevronLeftIcon className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className='flex flex-col flex-grow cursor-pointer items-center hover:underline'>
          <ChevronRightIcon className='h-5' />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default Paginationbtns;
