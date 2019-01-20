import { path } from 'ramda';

export const getFluid = path([
	'featured_media',
	'localFile',
	'childImageSharp',
	'fluid',
]);
