import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} KS BMI App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
