import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent, Section, Layout, Title } from '../components';

export const PageTemplate = ({ title, content }) => {
	return (
		<Section>
			<Title>{title}</Title>
			<HTMLContent content={content} />
		</Section>
	);
};

PageTemplate.propTypes = {
	content: PropTypes.string,
	title: PropTypes.string.isRequired,
};

const Page = ({ data }) => {
	const { wordpressPage: page } = data;

	return (
		<Layout>
			<PageTemplate title={page.title} content={page.content} />
		</Layout>
	);
};

Page.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Page;

export const pageQuery = graphql`
	query PageById($id: String!) {
		wordpressPage(id: { eq: $id }) {
			title
			content
		}
	}
`;
