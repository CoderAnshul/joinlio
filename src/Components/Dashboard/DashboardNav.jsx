import React from "react";

const DashboardNav = () => {
    return (
        <nav className="bg-blue-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default DashboardNav;