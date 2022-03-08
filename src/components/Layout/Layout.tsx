import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutType = {
    children: React.ReactNode;
}

const Layout = (props: LayoutType) => {
    return (
        <div>
            <Header/>
            { props.children }
            <Footer/>
        </div>
    );
};

export default Layout;