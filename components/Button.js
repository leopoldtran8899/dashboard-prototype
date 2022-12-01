const Button = ({ name, onClick, round=false, size = ''}) => {
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

  const handleClick = e => {
    onClick(e.target.value)
  }
  return (
    <button
      className={`${style} px-3 py-1 border-2 border-lightAccent-500 bg-darkColor-500 text-lightAccent-500 dark:bg-lightColor-500 dark:text-darkAccent-500 dark:border-darkAccent-500 hover:bg-darkColor-700 dark:hover:bg-lightColor-300 min-w-fit`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
export default Button;
