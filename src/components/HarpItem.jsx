import React from 'react';

import PropTypes from 'prop-types';

import { WhiteSpace } from 'antd-mobile';

function HardItem({ fpic, foname, fctime, forganization, handleClick }) {
    return (
        <div>
            <div onClick={() => {handleClick(forganization);}} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 90}}>
                <img src={fpic} style={{height: 70, width : 70, marginLeft: 10}}/>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: 10}}>
                    <div style={{lineHeight: '30px'}}>{foname}</div>
                    <div style={{lineHeight: '30px'}}>{fctime}</div>
                </div>
            </div>
            <WhiteSpace style={{background: '#f5f5f5'}}/>
        </div>
    );
}

HardItem.propTypes = {
    fpic: PropTypes.string,
    foname: PropTypes.string,
    forganization: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fctime: PropTypes.string,
    handleClick: PropTypes.func
};

export default HardItem;



