import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <Link to="/" aria-label="Home" className="inline-block rounded-full">
          {/* Replace the image source with your own logo */}
          <img
            alt="Your logo"
            width="72"
            height="72"
            src="/path-to-your-logo.svg"
          />
        </Link>
        <nav className="space-x-4 text-sm text-gray-200 flex">
          {/* Use Gatsby's Link component for internal links and anchor for external links */}
          <Link
            to="/twitter"
            className="hover:underline flex items-center space-x-1.5"
          >
            <span>Twitter</span>
          </Link>
          <a 
            href="https://www.github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline flex items-center space-x-1.5"
          >
            <span>Github</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
