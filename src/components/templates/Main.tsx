import { type FC, type ReactNode } from 'react';
import { Navbar, Footer } from "@molecules/index"

interface WrapperProps {
  children: ReactNode;
}

export const  MainTemplate: FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
