import React from 'react';

import PropTypes from 'prop-types';

function HardItem({ oPic, oName, oOrganization, oAddress, handleClick }) {
    return (
        <div onClick={() => {handleClick(oOrganization);}}>
            <img src="https://unsplash.it/250/305?image=883"/>
            <div>
                <h4>钢琴{oOrganization}</h4>
                <div>雅马哈钢琴是结合恒久艺术与先进技术的佳演奏乐器</div>
            </div>
        </div>
    );
}

HardItem.propTypes = {
    oPic: PropTypes.string,
    oName: PropTypes.string,
    oOrganization: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    oAddress: PropTypes.string,
    handleClick: PropTypes.func
};

export default HardItem;



