import React from 'react';
import PropTypes from "prop-types";

class Notification extends React.Component {

    render() {
        return <p>{this.props.message}</p>
    }
}

Notification.propTypes = {
    message: PropTypes.string
}

export default Notification;