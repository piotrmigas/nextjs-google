type HeaderOptionProps = {
  Icon: JSX.Element;
  title: string;
  selected?: boolean;
};

const HeaderOption = ({ Icon, title, selected }: HeaderOptionProps) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer hover:text-blue-500 pb-3 ${
        selected && 'text-blue-500 border-blue-500'
      }`}
    >
      {Icon}
      <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  );
};

export default HeaderOption;
