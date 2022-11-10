import React from 'react';
import {Helmet} from "react-helmet";

const Head = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Meta Zone</title>
            </Helmet>
        </div>
    );
};

export default Head;