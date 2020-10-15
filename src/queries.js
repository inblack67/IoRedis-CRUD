import { gql } from '@apollo/client';

export const fetchTodosQuery = gql`
	{
		todos
	}
`;
