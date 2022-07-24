import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', 'height': '500px', background: 'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)', border: '5px solid black' }}>
            {props.children}
        </div>
    );
}

export default Scroll;
