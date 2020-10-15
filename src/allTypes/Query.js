import { queryType } from '@nexus/schema';
import { Call } from './Call';
import 'colors';

export const Query = queryType({
	definition(t) {
		t.list.field('todos', {
			type: 'String',
			nullable: true,
			resolve: async (_, args, { client }) => {
				const todos = await client.lrange('todos', 0, -1);
				return todos;
			},
		});
		t.field('call', {
			type: Call,
			nullable: true,
			resolve: async (_, args, { client }) => {
				const call = await client.hgetall('call');
				return call;
			},
		});
	},
});
