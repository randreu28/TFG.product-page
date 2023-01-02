export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 max-w-6xl mx-auto text-lg">
      <div className="space-x-10 hidden sm:block font-semibold">
        <a
          href="#"
          className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-teal-500 hover:to-pink-600 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-teal-500 hover:to-pink-600 transition-colors duration-300"
        >
          Products
        </a>
      </div>
      <h1 className="font-extrabold uppercase text-2xl text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-pink-600">
        Techno Shop
      </h1>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </a>
    </nav>
  );
}
