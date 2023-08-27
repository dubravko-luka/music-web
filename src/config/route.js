const ZING_SERVER_API_URL = 'https://api.mp3.zing.vn/api/streaming';
const ZING_NEXT_PUBLIC_API_URL = '/audio';

const ZING_IMG_SERVER_API_URL = 'https://photo-resize-zmp3.zmdcdn.me';
const ZING_IMG_NEXT_PUBLIC_API_URL = '/poster';

module.exports = {
	rewrites: [
		{
			source: `${process.env.ZING_NEXT_PUBLIC_API_URL || ZING_NEXT_PUBLIC_API_URL}/:path*`,
			destination: `${process.env.ZING_SERVER_API_URL || ZING_SERVER_API_URL}${process.env.ZING_NEXT_PUBLIC_API_URL || ZING_NEXT_PUBLIC_API_URL}/:path*`,
		},
		{
			source: `${process.env.ZING_IMG_NEXT_PUBLIC_API_URL || ZING_IMG_NEXT_PUBLIC_API_URL}/:path*`,
			destination: `${process.env.ZING_IMG_SERVER_API_URL || ZING_IMG_SERVER_API_URL}/:path*`,
		},
	],
};
