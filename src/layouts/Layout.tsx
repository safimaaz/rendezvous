import React, { ReactNode } from 'react';
import Footer from '../components/Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default Layout;
