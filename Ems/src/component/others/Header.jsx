const Header = (props) => {
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  const data = props.data;
  if (data) {
    return (
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello
          <br />
          <span className="text-3xl font-semibold">{data.firstName}</span>
        </h1>
        <button
          onClick={logOut}
          className="bg-red-500 px-3 py-2 text-white text-semibold font-medium  rounded-xl"
        >
          Log Out{" "}
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex items-end justify-between">
          <h1 className="text-2xl font-medium">
            Hello
            <br />
            <span className="text-3xl font-semibold">Admin Sahab</span>
          </h1>
          <button
            onClick={logOut}
            className="bg-red-500 px-3 py-2 text-white text-semibold font-medium  rounded-xl"
          >
            Log Out{" "}
          </button>
        </div>
      </>
    );
  }
};

export default Header;
