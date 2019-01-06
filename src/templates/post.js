import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
	Title,
	Layout,
	Section,
	HTMLContent,
	Meta,
	Box,
	Heading3,
	Link,
	Tags,
	Tag,
} from '../components';
import SocialBar from '../components/SocialBar';
import { getFluid } from '../utils/getFluid';

export const BlogPostTemplate = ({
	content,
	categories,
	tags,
	title,
	date,
	author,
	featuredMedia,
	url,
	origin,
}) => {
	const shareImage = featuredMedia
		? origin + featuredMedia.localFile.childImageSharp.fluid.src
		: null;
	return (
		<Section>
			<Title>{title}</Title>
			{featuredMedia && (
				<Box>
					<Img fluid={getFluid({ featured_media: featuredMedia })} />
				</Box>
			)}
			<HTMLContent content={content} />
			<Meta>{date}</Meta>
			<Box mb={1}>
				{categories && categories.length ? (
					<div>
						<Heading3>Kategorie</Heading3>
						<Tags>
							{categories.map(category => (
								<Tag key={`${category.slug}`}>
									<Link to={`/categories/${category.slug}/`}>
										{category.name}
									</Link>
								</Tag>
							))}
						</Tags>
					</div>
				) : null}
				{tags && tags.length ? (
					<div>
						<Heading3>Tagy</Heading3>
						<Tags>
							{tags.map(tag => (
								<Tag key={`${tag.slug}tag`}>
									<Link disableUnderline to={`/tags/${tag.slug}/`}>
										{tag.name}
									</Link>
								</Tag>
							))}
						</Tags>
					</div>
				) : null}
			</Box>
			<Box mb={1}>
				<Heading3>Sdílení</Heading3>
				<SocialBar image={shareImage} shareUrl={url} title={title} />
			</Box>
		</Section>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	title: PropTypes.string,
};

const BlogPost = ({ data, location }) => {
	const { wordpressPost: post } = data;
	const url = location ? location.href : '';
	return (
		<Layout>
			<Helmet title={`${post.title} | Blog`} />
			<BlogPostTemplate
				origin={location.origin}
				url={url}
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
	location: PropTypes.shape({
		href: PropTypes.string,
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
