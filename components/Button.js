const Button = ({ name, handleClick }) => {
  
  return <button className="w-full h-9 bg-lightColor text-mainColor" onClick={handleClick}>{name}</button>;
};
export default Button;
