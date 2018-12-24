import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = ({ content, className }) => (
	<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
	<div className={className}>{content}</div>
);

Content.propTypes = {
	className: PropTypes.string,
	content: PropTypes.node,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
