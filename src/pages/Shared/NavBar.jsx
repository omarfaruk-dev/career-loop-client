import { Link, NavLink, useNavigate } from "react-router";
import { useContext, useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import ThemeToggle from '../../components/ThemeToggle';

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  // Signout user
  const handleSignOut = () => {
    signOutUser();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Log Out Successful!",
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      navigate("/");
    });
  };

  // Close user menu on outside click
  useEffect(() => {
    if (mobileMenuOpen !== 'profile') return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileMenuOpen]);

  // Nav links data
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Find a Job', to: '/jobs' },
    { name: 'My Applications', to: '/my-applications' },
    { name: 'Add Job', to: '/add-job' },
    { name: 'My Posted Jobs', to: '/my-posted-jobs' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm bg-base-100">
      <div className="max-w-[1326px] mx-auto flex items-center justify-between h-20 px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <img src="/logo.png" alt="JobBox Logo" className="w-8 h-8" /> */}
          <span className="text-2xl font-bold text-primary tracking-tight">Career<span className="text-secondary">Hub</span></span>
        </div>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${isActive ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-primary'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* User/Profile Section & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          {!user ? (
            <>
              <Link to="/signin" className="btn btn-secondary btn-outline rounded-md text-sm">Sign In</Link>
              <Link to="/register" className="btn btn-secondary rounded-md text-sm">Sign Up</Link>
            </>
          ) : (
            <div className="relative" ref={menuRef}>
              <button
                className="focus:outline-none"
                onClick={() => setMobileMenuOpen(mobileMenuOpen === 'profile' ? false : 'profile')}
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full border-2 border-secondary" />
                ) : (
                  <FaUser className="w-8 h-8 text-secondary rounded-full border-2 border-secondary p-1" />
                )}
              </button>
              {mobileMenuOpen === 'profile' && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-secondary/20 rounded-lg shadow-lg z-50 flex flex-col">
                  <span className="px-4 py-2 text-sm text-primary font-medium">{user.displayName}</span>
                  <Link to="/my-profile" className="px-4 py-2 text-sm text-secondary hover:bg-secondary/10" onClick={() => setMobileMenuOpen(false)}>Profile</Link>
                  <button onClick={handleSignOut} className="px-4 py-2 text-sm text-secondary hover:bg-secondary/10 text-left">Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl text-secondary focus:outline-none">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-secondary underline' : 'text-primary hover:text-secondary'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            {!user ? (
              <>
                <Link to="/signin" className="btn btn-secondary btn-outline" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                <Link to="/register" className="btn btn-secondary" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full border-2 border-secondary" />
                ) : (
                  <FaUser className="w-8 h-8 text-secondary rounded-full border-2 border-secondary p-1" />
                )}
                <span className="text-sm font-medium text-primary">{user.displayName}</span>
                <Link to="/my-profile" className="text-secondary underline text-sm" onClick={() => setMobileMenuOpen(false)}>Profile</Link>
                <button onClick={() => { handleSignOut(); setMobileMenuOpen(false); }} className="text-sm text-secondary underline">Logout</button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
