import React from 'react';
import NavigationBar from '../components/NavigationBar/Navigation';

const layout = (props) => {
    return (
        <>
            <NavigationBar />
            <>{props.children}
            </>
        </>
    );
}

export default layout;