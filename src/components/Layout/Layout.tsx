import * as React from 'react';
import Header from "./Header";
import Footer from "./Footer";

interface LayoutPropsInterface {
    children: object
}

const Layout: React.FC<LayoutPropsInterface> = ({ children }) => {
    return (
        <div className={"container"}>
            <Header/>
            { children }
            <Footer/>
        </div>
    );
}

export default Layout;