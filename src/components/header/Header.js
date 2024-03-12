import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-8   h-24 bg-[#1c2d1d] shadow-xl text-white flex justify-between items-center">
        <Link to="/">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <h1 className="tracking-widest text-4xl  font-semibold">
              MoviePalace
            </h1>
            <p className="text-xs tracking-widest">
              Where Every Frame Tells a Story
            </p>
          </div>
        </Link>
        <div className="w-96">
          <input
            className="p-2 px-4 bg-gray-100 text-black w-full rounded-full focus:outline-emerald-700 outline-none"
            type="search"
            name="search"
            placeholder="Search for movies..."
            id="search"
          />
        </div>
        <nav className="hidden lg:inline">
          <ul className="flex text-2xl space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Signup</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
