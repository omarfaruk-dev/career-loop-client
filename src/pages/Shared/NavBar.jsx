import { Link, NavLink, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Signout user
  const handleSignOut = () => {
    signOutUser()
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Log Out Successful!",
      showConfirmButton: false,
      timer: 1500
    })
      .then(() => {
        navigate('/')
      })
      .catch(error => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage || 'Something went wrong!',
        });
      });
  }

  // Nav links data
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Find a Job', to: '/jobs' },
    { name: 'Recruiters', to: '/recruiters' },
    { name: 'Candidates', to: '/candidates' },
    { name: 'Pages', to: '/pages' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm" style={{ background: 'linear-gradient(90deg, #f6f9fc 60%, #dbeafe 100%)' }}>
      <div className="max-w-[1326px] mx-auto flex items-center justify-between h-20 px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <img src="/logo.png" alt="JobBox Logo" className="w-8 h-8" /> */}
          <span className="text-2xl font-bold text-primary tracking-tight">Career<span className="text-secondary">Loop</span></span>
        </div>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-[#0a2259] hover:text-blue-500'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* Auth Buttons */}
        <div className="hidden md:flex lg:flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/register" className="underline text-[#0a2259] font-medium hover:text-blue-600">Register</Link>
              <Link to="/signin" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-2 rounded-lg shadow transition-all">Sign in</Link>
            </>
          ) : (
            <button onClick={handleSignOut} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-2 rounded-lg shadow transition-all">Logout</button>
          )}
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl text-blue-600 focus:outline-none">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#f6f9fc] shadow-md z-50 animate-fade-in">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-200 ${isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-[#0a2259] hover:text-blue-500'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            {!user ? (
              <>
                <Link to="/register" className="underline text-[#0a2259] font-medium hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Register</Link>
                <Link to="/signin" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-2 rounded-lg shadow transition-all" onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
              </>
            ) : (
              <button onClick={() => { handleSignOut(); setMobileMenuOpen(false); }} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-2 rounded-lg shadow transition-all">Logout</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
