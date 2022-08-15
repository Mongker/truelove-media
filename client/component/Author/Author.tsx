import React from 'react';
import useAuthor from "./useAuthor";
// import PropTypes from 'prop-types';

function Author() {
    const {x, setX} = useAuthor();
    return(
        <div>xxxx</div>
    );
}

Author.propTypes = {};

Author.defaultProps = {};

export default Author;
