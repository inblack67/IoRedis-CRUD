import { mutationType, stringArg } from '@nexus/schema';
import 'colors';

export const Mutation = mutationType({
	definition(t) {
		t.string('addTodo', {
			args: { title: stringArg() },
			resolve: async (_, { title }, { client }) => {
				const todo = await client.rpush('todos', title);
				return 'Todo Added Successfully';
			},
		});

		t.string('deleteTodo', {
			args: { title: stringArg() },
			resolve: async (_, { title }, { client }) => {
				await client.lrem('todos', 1, title);
				return 'Todo Deleted Successfully';
			},
		});

		t.string('addCall', {
			args: { name: stringArg(), phone: stringArg(), agenda: stringArg(), time: stringArg() },
			resolve: async (_, { name, phone, agenda, time }, { client }) => {
				await client.del('call');
				await client.hmset('call', [ 'name', name, 'phone', phone, 'agenda', agenda, 'time', time ]);
				return 'Call Added Successfully';
			},
		});
	},
});
