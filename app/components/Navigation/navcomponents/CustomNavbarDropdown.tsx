"use client";
import React, { useState } from 'react';
import { FaUser,FaLayerGroup,FaSignOutAlt  } from 'react-icons/fa';
import { IoCogSharp } from "react-icons/io5";

function CustomNavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return ( //custom-dropdown__content is-open
    <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
      <div className="custom-dropdown__user p-2" data-set="custom-dropdown">
        <a className="icons" href="javascript:void(0)" onClick={toggleDropdown}>
          <FaUser />
        </a>
      </div>
      <div className={`custom-dropdown__content ${isOpen ? 'is-open' : ''}`}>
        <div className="custom-dropdown__body">
          <ul className="custom-dropdown__list">
            <li>
              <a className="custom-dropdown__body-link" href="/dashboard">
                <span className="custom-dropdown__body-icon">
                  <FaLayerGroup />
                </span>
                <span className="custom-dropdown__body-text">Dashboard</span>
              </a>
            </li>
            <li>
              <a className="custom-dropdown__body-link" href="javascript:void(0)">
                <span className="custom-dropdown__body-icon">
                  <IoCogSharp/>
                </span>
                <span className="custom-dropdown__body-text">Settings</span>
              </a>
            </li>
            <li>
              <a className="custom-dropdown__body-link" href="../api/auth/logout">
                <span className="custom-dropdown__body-icon">
                  <FaSignOutAlt />
                </span>
                <span className="custom-dropdown__body-text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomNavbarDropdown;
