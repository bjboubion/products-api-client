import React from 'react';

const PageLayout = (props) => {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default PageLayout;