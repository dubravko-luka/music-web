const ZING_SERVER_API_URL = '';
const ZING_NEXT_PUBLIC_API_URL = '/songs-zing';

module.exports = {
	rewrites: [
		{
			source: `${process.env.ZING_NEXT_PUBLIC_API_URL || ZING_NEXT_PUBLIC_API_URL}/:path*`,
			destination: `${process.env.ZING_SERVER_API_URL || ZING_SERVER_API_URL}`,
		},
	],
};
