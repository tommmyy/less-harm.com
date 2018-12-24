import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Pagination } from '../components';
import PostList from '../components/PostList';

export default class IndexPage extends React.Component {
	render() {
		const { data, pageContext } = this.props;
		const { edges: posts } = data.allWordpressPost;

		return (
			<Layout>
				<PostList posts={posts} title="Poslední příspěvky" />
				<Pagination pageContext={pageContext} pathPrefix="/" />
			</Layout>
		);
	}
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allWordpressPost: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
	pageContext: PropTypes.shape({
		currentPage: PropTypes.number,
		numPages: PropTypes.number,
	}),
};

export const pageQuery = graphql`
	query IndexQuery($limit: Int!, $skip: Int!) {
		allWordpressPost(
			sort: { fields: date, order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					...PostListFields
				}
			}
		}
	}
`;
