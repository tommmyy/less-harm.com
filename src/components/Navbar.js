import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import logo from '../img/logo.svg';
import { Flex, Box, Fixed, Link } from './';

const Nav = Flex;
Nav.defaultProps = {
	...Flex.defaultProps,
	alignItems: 'center',
	justifyContent: 'space-between',
	bg: 'lemon',
};

const Navbar = props => (
	<StaticQuery
		query={graphql`
			query {
				allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
					edges {
						node {
							title
							slug
						}
					}
				}
			}
		`}
		render={data => (
			<Fixed width="100%" zIndex="1">
				<Nav css={{ height: '60px' }} {...props}>
					<Link to="/" disableUnderline m={0}>
						<img
							src={logo}
							alt=""
							style={{ margin: 0, padding: 0, width: '88px' }}
						/>
					</Link>
					{data.allWordpressPage.edges.map(edge => (
						<Link disableUnderline to={edge.node.slug} key={edge.node.slug}>
							{edge.node.title}
						</Link>
					))}
				</Nav>
			</Fixed>
		)}
	/>
);

export default Navbar;
