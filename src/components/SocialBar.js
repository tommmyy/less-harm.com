import React from 'react';
import PropTypes from 'prop-types';
import {
	FacebookShareButton,
	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	PinterestShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	RedditShareButton,
	EmailShareButton,
	TumblrShareButton,
	LivejournalShareButton,
	ViberShareButton,
	WorkplaceShareButton,
	LineShareButton,
	FacebookIcon,
	TwitterIcon,
	GooglePlusIcon,
	LinkedinIcon,
	PinterestIcon,
	TelegramIcon,
	WhatsappIcon,
	RedditIcon,
	TumblrIcon,
	EmailIcon,
	LivejournalIcon,
	ViberIcon,
	WorkplaceIcon,
	LineIcon,
} from 'react-share';
import { Flex, Box, Text } from '.';

const Wrapper = props => (
	<Flex flexWrap="wrap" justifyContent="flex-start" {...props} />
);
const IconWrapper = ({ children, ...rest }) => (
	<Box
		mr={2}
		my={1}
		css={{ cursor: 'pointer', '&:hover': { opacity: '.75' } }}
		{...rest}
	>
		<Text
			textAlign="center" m={0} p={0}
			mb={0}
		>
			{children}
		</Text>
	</Box>
);

const SocialBar = ({ title, shareUrl, image }) => {
	return (
		<Wrapper>
			<IconWrapper>
				<FacebookShareButton url={shareUrl} quote={title}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
			</IconWrapper>

			<IconWrapper>
				<TwitterShareButton url={shareUrl} title={title}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
			</IconWrapper>

			<IconWrapper>
				<TelegramShareButton url={shareUrl} title={title}>
					<TelegramIcon size={32} round />
				</TelegramShareButton>
			</IconWrapper>

			<IconWrapper>
				<WhatsappShareButton url={shareUrl} title={title} separator=":: ">
					<WhatsappIcon size={32} round />
				</WhatsappShareButton>
			</IconWrapper>

			<IconWrapper>
				<GooglePlusShareButton url={shareUrl}>
					<GooglePlusIcon size={32} round />
				</GooglePlusShareButton>
			</IconWrapper>

			<IconWrapper>
				<LinkedinShareButton
					url={shareUrl}
					title={title}
					windowWidth={750}
					windowHeight={600}
				>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
			</IconWrapper>

			<IconWrapper>
				<PinterestShareButton
					url={shareUrl}
					media={image && image.src ? image.src : null}
					windowWidth={1000}
					windowHeight={730}
				>
					<PinterestIcon size={32} round />
				</PinterestShareButton>
			</IconWrapper>

			<IconWrapper>
				<RedditShareButton
					url={shareUrl}
					title={title}
					windowWidth={660}
					windowHeight={460}
				>
					<RedditIcon size={32} round />
				</RedditShareButton>
			</IconWrapper>

			<IconWrapper>
				<TumblrShareButton
					url={shareUrl}
					title={title}
					windowWidth={660}
					windowHeight={460}
				>
					<TumblrIcon size={32} round />
				</TumblrShareButton>
			</IconWrapper>

			<IconWrapper>
				<LivejournalShareButton
					url={shareUrl}
					title={title}
					description={shareUrl}
				>
					<LivejournalIcon size={32} round />
				</LivejournalShareButton>
			</IconWrapper>

			<IconWrapper>
				<EmailShareButton url={shareUrl} subject={title} body="body">
					<EmailIcon size={32} round />
				</EmailShareButton>
			</IconWrapper>
			<IconWrapper>
				<ViberShareButton url={shareUrl} title={title} body="body">
					<ViberIcon size={32} round />
				</ViberShareButton>
			</IconWrapper>

			<IconWrapper>
				<WorkplaceShareButton url={shareUrl} quote={title}>
					<WorkplaceIcon size={32} round />
				</WorkplaceShareButton>
			</IconWrapper>

			<IconWrapper>
				<LineShareButton url={shareUrl} title={title}>
					<LineIcon size={32} round />
				</LineShareButton>
			</IconWrapper>
		</Wrapper>
	);
};
SocialBar.propTypes = {
	image: PropTypes.object,
	shareUrl: PropTypes.string.isRequired,
	title: PropTypes.node.isRequired,
};

export default SocialBar;
