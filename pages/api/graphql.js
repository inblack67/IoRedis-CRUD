import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../src/schema';
import Redis from 'ioredis';

const client = new Redis();

const server = new ApolloServer({
	schema,
	context: ({ req, res }) => ({ req, res, client }),
});

const handler = server.createHandler({
	path: '/api/graphql',
});

// dont parse the body, next. apollo got this
export const config = {
	api: {
		bodyParser: false,
	},
};

export default handler;
