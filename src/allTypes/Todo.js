import { objectType } from '@nexus/schema';

export const Todo = objectType({
	name: 'Todo',
	definition(t) {
		t.string('title');
	},
});
