const Card = ({ user }) => {
  return (
    <>
      <div className="p-10 bg-emerald-400 w-80 m-11 inline-block text-center">
        <img className="h-32 w-24 rounded-full bg-black " src={user.profilePhoto} alt="" />
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        <h2 className="text-xl font-semibold">
          {user.city} , {user.age}
        </h2>
        <br />
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Card;
