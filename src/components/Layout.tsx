import React, { FC } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  name: string
}

export const Layout: FC<LayoutProps> = ({ children, name }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer name={name} />
    </div>
  );
}