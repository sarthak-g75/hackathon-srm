import React from "react";

const Navbar = () => {
  return (
    <div className="parentContainer w-screen">
      <nav className="flex justify-between items-center px-6 py-2 h-28 shadow-2xl">
        <div className="flex justify-evenly items-center">  
            <div>
                <img className="w-28" src="/armylogo.png" />
            </div>
            <div>Bharat Defense Logistics</div>
        </div>
        
        <div className="flex justify-between items-center gap-10">
            <div>Request</div>

            <div>Add Crate</div>

            <div>Add Battalion</div>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
