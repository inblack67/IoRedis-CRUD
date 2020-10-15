import { decorateType } from '@nexus/schema';
import { GraphQLDate } from 'graphql-scalars';

export const GQLDATE = decorateType(GraphQLDate, {
	rootTyping: 'Date',
	asNexusMethod: 'date',
});

export * from './Call';
export * from './Query';
export * from './Mutation';
