import Image from 'next/image';

type AvatarProps = {
  url: string;
  className?: string;
};

const Avatar = ({ url, className }: AvatarProps) => {
  return (
    <Image
      src={url}
      alt=''
      width={40}
      height={40}
      loading='lazy'
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;
