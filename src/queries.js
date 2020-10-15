import { gql } from '@apollo/client';

export const fetchTodosQuery = gql`
	{
		todos
	}
`;

export const addTodoMutation = gql`
	mutation($title: String!) {
		addTodo(title: $title)
	}
`;

export const deleteTodoMutation = gql`
	mutation($title: String!) {
		deleteTodo(title: $title)
	}
`;
