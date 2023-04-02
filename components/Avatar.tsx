type AvatarProps = {
  url: string;
  className?: string;
};

const Avatar = ({ url, className }: AvatarProps) => {
  return (
    <img
      src={url}
      alt=''
      loading='lazy'
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;
