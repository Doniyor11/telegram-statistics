import React, { FC } from 'react';
import Navbar from "@/widgets/layout/ui/navbar";
import Footer from '@/widgets/layout/ui/footer';

interface IProps {
  children: React.ReactNode;
}
export const Layout: FC<IProps> = ({ children }) => {
  return (
      <>
        <Navbar/>
        <>{children}</>
        <Footer/>
      </>
  );
};
