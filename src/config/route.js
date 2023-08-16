const SERVER_API_URL = 'http://127.0.0.1:8085';
const NEXT_PUBLIC_API_URL = '/graphql';

module.exports = {
	rewrites: [
		{
			source: `${process.env.NEXT_PUBLIC_API_URL || NEXT_PUBLIC_API_URL}/:path*`,
			destination: `${process.env.SERVER_API_URL || SERVER_API_URL}${process.env.NEXT_PUBLIC_API_URL || NEXT_PUBLIC_API_URL}`,
		},
	],
};
