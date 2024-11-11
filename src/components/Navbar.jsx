// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed shadow flex justify-between items-center p-4 md:px-10 bg-gray-800">
      <div className="logo text-white text-2xl">MyPortfolio</div>
      <ul className="nav-links hidden md:flex space-x-4 text-white">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://drive.google.com/file/d/1lsd1DPP3Nrxnh7HmUHq9ob93SS0hCmL1/view?usp=sharing" target="_blank">Hire Me</a></li>
      </ul>
      <button className="md:hidden text-white">
        {/* Mobile Menu Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
};
export default Navbar;


// const Navbar = () => {
//   return (
//     <nav className="navbar fixed shadow">
//       <div className="logo">MyPortfolio</div>
//       <ul className="nav-links">
//         <li><a href="/">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#resume">Hire</a></li>
//       </ul>
      
//     </nav>
//   );
// };

// export default Navbar;
