import { objectType } from '@nexus/schema';

export const Call = objectType({
	name: 'Call',
	definition(t) {
		t.string('name');
		t.string('phone');
		t.string('agenda');
		t.string('time');
	},
});
