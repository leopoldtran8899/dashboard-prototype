const Button = ({ name, handleClick, round=false, size = ''}) => {
  let style = '';
  switch (size) {
    case 'sm':
      style = style + ' w-24 h-9';
      break;
    case 'md':
      style = style + ' w-32 h-9';
      break;
    case 'lg':
      style = style + ' w-48 h-9';
      break;
    default:
      style = style + ' w-full h-9';
      break;
  }
  if (round === true) {
    style = style + ' rounded-full';
  }

  return (
    <button
      className={`${style} px-3 py-1 border-2 border-lightAccent bg-darkColor text-lightAccent dark:bg-lightColor dark:text-darkAccent min-w-fit`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
export default Button;
