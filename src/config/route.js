const ZING_SERVER_API_URL = 'https://api.mp3.zing.vn/api/streaming';
const ZING_NEXT_PUBLIC_API_URL = '/audio';

module.exports = {
	rewrites: [
		{
			source: `${process.env.ZING_NEXT_PUBLIC_API_URL || ZING_NEXT_PUBLIC_API_URL}/:path*`,
			destination: `${process.env.ZING_SERVER_API_URL || ZING_SERVER_API_URL}${process.env.ZING_NEXT_PUBLIC_API_URL || ZING_NEXT_PUBLIC_API_URL}/:path*`,
		},
	],
};
