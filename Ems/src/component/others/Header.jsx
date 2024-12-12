const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello 
        <br />
        <span className="text-3xl font-semibold">Amol</span>
      </h1>
      <button className="bg-red-500 px-3 py-2 text-white text-semibold font-medium  rounded-xl">Log Out </button>
    </div>
  );
};

export default Header;
