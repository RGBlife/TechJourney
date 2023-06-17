import * as React from "react";

export const Navigation = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <nav className="space-x-4 text-sm text-gray-200 flex">
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
