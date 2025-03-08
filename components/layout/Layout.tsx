import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
