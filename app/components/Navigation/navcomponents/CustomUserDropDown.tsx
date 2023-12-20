"use client"
import { Menu } from '@headlessui/react';
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'; // Import the React Icons

const CustomUserDropDown = () => {
    const [isOpen,SetIsOpen] = useState(false)

    return (
        <>

            <Menu as="div" className="custom-dropdown">
                <Menu.Button className="custom-dropdown__user p-2" data-set="custom-dropdown"><FaUser/></Menu.Button>
                <Menu.Items className='class="custom-dropdown__content is-open"'>
                    <Menu.Item>
                    <a className="custom-dropdown__body-link" href="URL:void()"><span
                                className="custom-dropdown__body-icon"><i
                                    className="fas fa-cog"></i></span><span
                                        className="custom-dropdown__body-text">Dashboard</span></a>
                    </Menu.Item>
                    <Menu.Item >
                    <a className="custom-dropdown__body-link" href="URL:void()"><span
                                className="custom-dropdown__body-icon"><i
                                    className="fas fa-cog"></i></span><span
                                        className="custom-dropdown__body-text">Settings</span></a>
                    </Menu.Item>
                    <Menu.Item>
                    <a className="custom-dropdown__body-link" href="URL:void()"><span
                                className="custom-dropdown__body-icon"><i
                                    className="fas fa-cog"></i></span><span
                                        className="custom-dropdown__body-text">Logout</span></a>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            {/* <div className="custom-dropdown">
                <div className="custom-dropdown__user p-2" data-set="custom-dropdown"><a className="icons"
                    href="URL:void()"><FaUser /></a></div>
                <div className="custom-dropdown__content false">
                    <div className="custom-dropdown__body">
                        <ul className="custom-dropdown__list">
                            <li><a className="custom-dropdown__body-link" href="/dashboard"><span
                                className="custom-dropdown__body-icon"><i
                                    className="fas fa-layer-group"></i></span><span
                                        className="custom-dropdown__body-text">Dashboard</span></a>
                            </li>
                            <li><a className="custom-dropdown__body-link" href="URL:void()"><span
                                className="custom-dropdown__body-icon"><i
                                    className="fas fa-cog"></i></span><span
                                        className="custom-dropdown__body-text">Settings</span></a></li>
                            <li><a className="custom-dropdown__body-link" href="../api/auth/logout"><span
                                className="custom-dropdown__body-icon"><i
                                    className="fas fa-sign-out-alt"></i></span><span
                                        className="custom-dropdown__body-text">Logout</span></a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default CustomUserDropDown;
