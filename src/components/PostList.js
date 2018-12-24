import React from 'react';
import { map } from 'ramda';
import { isNotEmpty } from 'ramda-extension';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { getFluid } from '../utils/getFluid';

import {
	Feed,
	FeedItem,
	Link,
	Heading,
	Title,
	Text,
	Excerpt,
	Meta,
} from '../components';

const CatList = props => (
	<Text
		{...props}
		fontSize="0.8em"
		color="primary"
		m={0}
		mb={0}
		css={{
			'& a': {
				borderColor: 'transparent',
			},
		}}
	/>
);

const Cats = ({ items }) => (
	<CatList>
		{map(({ name, id, slug }) => (
			<Link key={id} to={`categories/${slug}`}>
				{name}
			</Link>
		))(items)}
	</CatList>
);
Cats.propTypes = { items: PropTypes.array };

export default class IndexPage extends React.Component {
	render() {
		const { posts, title } = this.props;

		return (
			<Feed>
				<Title>{title}</Title>
				{posts.map(({ node: post }) => (
					<FeedItem key={post.id}>
						{isNotEmpty(post.categories) && <Cats items={post.categories} />}
						<Heading>
							<Link to={post.slug}>{post.title}</Link>
						</Heading>
						<Meta>{post.date}</Meta>
						{post.featured_media && (
							<Link to={post.slug}>
								<Img fluid={getFluid(post)} />
							</Link>
						)}
						<Excerpt
							dangerouslySetInnerHTML={{
								__html: post.excerpt.replace(/<p class="link-more.*/, ''),
							}}
						/>
						<Link to={post.slug}>Více</Link>
					</FeedItem>
				))}
			</Feed>
		);
	}
}

IndexPage.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
};

export const pageQuery = graphql`
	fragment PostListFields on wordpress__POST {
		id
		title
		excerpt
		author {
			name
			slug
			avatar_urls {
				wordpress_48
			}
		}
		date(formatString: "DD. MM. YYYY", locale: "cs_CZ")
		slug
		categories {
			id
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
`;
