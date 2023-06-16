import * as React from "react";
import { Link } from "gatsby";

export const Navigation = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <nav className="space-x-4 text-sm text-gray-200 flex">
          {/* Use Gatsby's Link component for internal links and anchor for external links */}
          <Link
            to="/twitter"
            className="hover:underline flex items-center space-x-1.5"
          >
            <span>Twitter</span>
          </Link>
          <a 
            href="https://github.com/RGBlife?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline flex items-center space-x-1.5"
          >
            <span>Github</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
