import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import {
	Card,
	Box as RebassBox,
	Flex,
	Link as RebassLink,
	Text as RebassText,
	Image as RebassImage,
	Heading as RebassHeading,
} from 'rebass';
import { maxWidth } from 'styled-system';
import htmr from 'htmr';
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
	cards: {
		outline: {
			color: blue,
			backgroundColor: 'transparent',
			boxShadow: 'inset 0 0 0 1px',
		},
	},
};

const Sheet = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
	html, body {
		margin: 0;
		padding: 0;
	}
`;

export const Layout = ({ hero, children }) => (
	<ThemeProvider theme={theme}>
		<Box>
			<Navbar px={[3, 3, 'auto']} />
			{hero}
			<Box maxWidth={640} pt="60px" mx={[3, 3, 'auto']}>
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

export const Text = styled(RebassText)``;
Text.defaultProps = {
	fontSize: [1],
	fontFamily: 'sans2',
	letterSpacing: ['0.05em'],
	lineHeight: ['1.5rem', '2rem'],
	textAlign: 'justify',
	mb: 0,
	m: 0,
};
export const Heading = props => (
	<RebassHeading
		{...props}
		fontSize={[2, 3]}
		fontFamily="sans"
		fontWeight="normal"
		letterSpacing={['0.1em']}
		css={{
			textTransform: 'uppercase',
			'& a': {
				borderColor: 'transparent',
			},
		}}
	/>
);

export const Heading2 = props => (
	<RebassHeading
		{...props}
		as="h3"
		fontSize={[1, 2]}
		fontFamily="sans"
		fontWeight="normal"
		letterSpacing={['0.1em']}
		mb={1}
		css={{
			textTransform: 'uppercase',
			'& a': {
				borderColor: 'transparent',
			},
		}}
	/>
);
export const Heading3 = props => (
	<RebassHeading
		{...props}
		as="h3"
		fontSize={[1]}
		fontWeight="bold"
		fontFamily="sans"
		letterSpacing={['0.3em']}
		css={{
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
		fontWeight="normal"
		letterSpacing={['0.3em']}
		my={[3]}
		css={{ textTransform: 'uppercase' }}
	/>
);

export const Excerpt = Text;

const LinkBase = styled(RebassLink)`
	color: inherit;
	text-decoration: none;
	transition: color 500ms ease;
	border-bottom: 1px solid
		${ps => (ps.disableUnderline ? 'transparent' : theme.colors.blue)};

	&:hover,
	&:hover ${Text} {
		color: ${theme.colors.blue};
	}
`;
LinkBase.defaultProps = { ...RebassLink.defaultProps, color: 'black' };

export const Link = ({ to, children, color, ...rest }) => (
	<LinkBase
		href={to}
		onClick={e => {
			e.preventDefault();
			navigate(to);
		}}
		{...rest}
	>
		<Text as="span" fontSize="inherit" color={color}>
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
const Paragraph = Text;
Paragraph.defaultProps = { ...Text.defaultProps, mb: 3 };

const Img = RebassImage;
Img.defaultProps = {
	...RebassImage.defaultProps,
	width: '100%',
	css: { height: 'auto' },
};
// prettier-ignore
const BlockQuote = styled.blockquote`
	background: #f9f9f9;
	border-left: 10px solid #ccc;
	margin: 1.5em 10px;
	padding: 0.5em 10px;

	&:before {
		color: #ccc;
		content: open-quote;
		font-size: 4em;
		line-height: 0.1em;
		margin-right: 0.25em;
		vertical-align: -0.4em;
	}

	& p {
		display: inline;
	}
`;
const Caption = styled(Text)``;

Caption.defaultProps = { fontWeight: 'bold', textAlign: 'center' };

const htmlToStyled = x =>
	htmr(x, {
		transform: {
			h1: Heading,
			h2: Heading2,
			h3: Heading3,
			p: Paragraph,
			a: Link,
			img: Img,
			blockquote: BlockQuote,
			figcaption: Caption,
		},
	});
export const HTMLContent = ({ content, ...rest }) => (
	<section {...rest}>{htmlToStyled(content)}</section>
);
export const Fixed = ({ zIndex, ...rest }) => (
	<Box
		{...rest}
		css={{
			position: 'fixed',
			zIndex,
		}}
	/>
);

export const Tags = props => <Flex my={2} {...props} />;
export const Tag = ({ children, ...rest }) => (
	<Box
		mr={2} my={0} p={0}
		{...rest}
	>
		<Card variant="outline" p={0} m={0}>
			<Text px={2}>{children}</Text>
		</Card>
	</Box>
);
