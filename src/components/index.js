import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import PropTypes from 'prop-types';
import {
	Card,
	Box as RebassBox,
	Flex,
	Link as RebassLink,
	Text as RebassText,
	Heading as RebassHeading,
} from 'rebass';
import { maxWidth } from 'styled-system';

import Helmet from 'react-helmet';
import { navigate } from 'gatsby';
import Navbar from './Navbar';

export { Flex };
export { default as Content } from './Content';
export { default as Pagination } from './Pagination';
export { default as Testimonials } from './Testimonials';
export const Box = styled(RebassBox)`
	${maxWidth};
`;

// https://coolors.co/f4e8c1-e5b9c5-d3cbf2-90b2e5-9deae8
const lemon = '#F4E8C1';
const cameo = '#E5B9C5';
const soap = '#D3CBF2';
const blue = '#90B2E5';
const magenta = '#9DEAE8';

export const theme = {
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
	colors: {
		primary: cameo,
		lemon,
		cameo,
		soap,
		blue,
		magenta,
		lightgray: '#f6f6ff',
	},
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	fonts: {
		sans: 'Montserrat, Helvetica, sans-serif',
		sans2: 'calibri, Helvetica, sans-serif',
		mono: 'Menlo, monospace',
	},
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)',
	},
	buttons: {
		primary: {
			color: '#fff',
			backgroundColor: blue,
		},
		outline: {
			color: blue,
			backgroundColor: 'transparent',
			boxShadow: 'inset 0 0 0 1px',
		},
	},
};

const Sheet = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat');
	html, body {
		margin: 0;
		padding: 0;
	}
`;

export const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Box>
			<Navbar px={[3, 3, 'auto']} />
			<Box maxWidth={900} pt="60px" mx={[3, 3, 'auto']}>
				<Sheet />
				<Helmet title="Less Harm" />
				<div>{children}</div>
			</Box>
		</Box>
	</ThemeProvider>
);
Layout.propTypes = { children: PropTypes.node };

export const Feed = Box;
Feed.defaultProps = {
	mb: [2, 3],
};

export const FeedItem = Box;

FeedItem.defaultProps = { mb: 4 };

export const Text = props => (
	<RebassText
		fontSize={[1]}
		fontFamily="sans2"
		letterSpacing={['0.1em']}
		lineHeight={['1.5rem', '2rem']}
		textAlign="justify"
		{...props}
	/>
);

export const Heading = props => (
	<RebassHeading
		{...props}
		fontSize={[2, 3]}
		fontFamily="sans"
		letterSpacing={['0.3em']}
		css={{
			textTransform: 'uppercase',
			'& a': {
				borderColor: 'transparent',
			},
		}}
	/>
);

export const Title = props => (
	<RebassHeading
		{...props}
		as="h1"
		fontSize={[3, 4, 5]}
		fontFamily="sans"
		letterSpacing={['0.3em']}
		mt={[4]}
		css={{ textTransform: 'uppercase' }}
	/>
);

export const Excerpt = Text;

const LinkBase = styled(RebassLink)`
	color: inherit;
	text-decoration: none;
	transition: color 300ms ease;
	border-bottom: 1px solid
		${ps => (ps.disableUnderline ? 'transparent' : theme.colors.blue)};

	&:hover {
		color: ${theme.colors.blue};
	}
`;
LinkBase.defaultProps = { ...RebassLink.defaultProps };

export const Link = ({ to, children, ...rest }) => (
	<LinkBase href={to} onClick={() => navigate(to)} {...rest}>
		<Text as="span" fontSize="inherit">
			{children}
		</Text>
	</LinkBase>
);

export const Section = props => <Card {...props} />;
export const Meta = props => (
	<Text
		{...props}
		fontSize={[1]}
		css={{
			'& a': {
				borderColor: 'transparent',
			},
		}}
	/>
);
export const HTMLContent = props => <div {...props} />;
export const Fixed = ({ zIndex, ...rest }) => (
	<Box
		{...rest}
		css={{
			position: 'fixed',
			zIndex,
		}}
	/>
);
