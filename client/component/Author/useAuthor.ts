import React, {useState} from 'react';
// import PropTypes from 'prop-types';

function useAuthor() {
    const [x, setX] = useState();
    return({
        x, setX
    });
}

useAuthor.propTypes = {};

useAuthor.defaultProps = {};

export default useAuthor;
