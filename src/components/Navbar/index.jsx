import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="flex items-center my-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'px-4 py-2 rounded-lg bg-blue-600 text-white'
            : 'px-4 py-2 rounded-lg hover:bg-slate-400/50'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? 'px-4 py-2 rounded-lg bg-blue-600 text-white'
            : 'px-4 py-2 rounded-lg hover:bg-slate-400/50'
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/messages"
        className={({ isActive }) =>
          isActive
            ? 'px-4 py-2 rounded-lg bg-blue-600 text-white'
            : 'px-4 py-2 rounded-lg hover:bg-slate-400/50'
        }
      >
        Messages
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive
            ? 'px-4 py-2 rounded-lg bg-blue-600 text-white'
            : 'px-4 py-2 rounded-lg hover:bg-slate-400/50'
        }
      >
        Settings
      </NavLink>
    </ul>
  );
};

export default Navbar;
