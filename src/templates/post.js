import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
	Title,
	Layout,
	Text,
	Section,
	HTMLContent,
	Meta,
	Box,
	Heading3,
	Link,
} from '../components';
import { getFluid } from '../utils/getFluid';

export const BlogPostTemplate = ({
	content,
	categories,
	tags,
	title,
	date,
	author,
	featuredMedia,
}) => {
	console.log(featuredMedia);
	return (
		<Section>
			<Title>{title}</Title>
			{featuredMedia && (
				<Img fluid={getFluid({ featured_media: featuredMedia })} />
			)}
			<HTMLContent content={content} />
			<Meta>{date}</Meta>
			<Box>
				{categories && categories.length ? (
					<div>
						<Heading3>Categories</Heading3>
						<ul className="taglist">
							{categories.map(category => (
								<li key={`${category.slug}cat`}>
									<Link to={`/categories/${category.slug}/`}>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				) : null}
				{tags && tags.length ? (
					<div>
						<Heading3>Tags</Heading3>
						<ul>
							{tags.map(tag => (
								<li key={`${tag.slug}tag`}>
									<Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
								</li>
							))}
						</ul>
					</div>
				) : null}
			</Box>
		</Section>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	title: PropTypes.string,
};

const BlogPost = ({ data }) => {
	const { wordpressPost: post } = data;

	return (
		<Layout>
			<Helmet title={`${post.title} | Blog`} />
			<BlogPostTemplate
				content={post.content}
				categories={post.categories}
				tags={post.tags}
				title={post.title}
				date={post.date}
				author={post.author}
				featuredMedia={post.featured_media}
			/>
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default BlogPost;

export const pageQuery = graphql`
	fragment PostFields on wordpress__POST {
		id
		slug
		content
		date(formatString: "MMMM DD, YYYY")
		title
	}
	query BlogPostByID($id: String!) {
		wordpressPost(id: { eq: $id }) {
			id
			title
			slug
			content
			date(formatString: "DD. MM. YYYY", locale: "cs_CZ")
			categories {
				name
				slug
			}
			tags {
				name
				slug
			}
			author {
				name
				slug
			}
			featured_media {
				localFile {
					childImageSharp {
						fluid(maxWidth: 900) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
