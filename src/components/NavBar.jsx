import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  console.log(user)
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content p-5">
        <div className="flex-1 mx-5">
          <a className="btn btn-ghost text-xl">🧑🏽‍💻 DevTinder</a>
        </div>

        {user && <div className="flex-none mx-5">
          <p className='px-4'>Welcome, {user.captain.fullname.firstname}</p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img
                
                  alt="Tailwind CSS Navbar component"
                  src="https://imgs.search.brave.com/VfslCGw2KeRdUXcvdAAyKgwVebgJLeY7EIbNVJHquVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EyLzUw/L2RlL2EyNTBkZTI3/YzlkY2M1YzFkNzU0/OTdlYTdlYmZiNWUw/LmpwZw"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={()=>{
                  return navigate("/");
                }}>Logout</button>
              </li>
            </ul>
          </div>
        </div>}
      </div>
      
    </div>

  )
}

export default NavBar
