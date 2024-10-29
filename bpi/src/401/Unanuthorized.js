import React from 'react';

const Unauthorized = () => {
    return (
        <div className="unauthorized-container">
            <h1>401 Unauthorized</h1>
            <p>You do not have permission to view this page.</p>
            <a href="/">Go to Login</a>
        </div>
    );
};

export default Unauthorized;
