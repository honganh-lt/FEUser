import React from 'react';
import PropTypes from 'prop-types';

function ColorBox(props) {
    const { color } = props;

    return (
        <div className='box' style={{ backgroupColor: color }}></div>
    )
}

ColorBox.prototype = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
};


ColorBox.defaultProps = {
    rounded: true
};

export default ColorBox;