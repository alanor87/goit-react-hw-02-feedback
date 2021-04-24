import React from "react";
import PropTypes from 'prop-types';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string
}
export default Section;
