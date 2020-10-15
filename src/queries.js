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

export const addCallMutation = gql`
	mutation($name: String!, $time: String!, $phone: String!, $agenda: String!) {
		addCall(name: $name, time: $time, agenda: $agenda, phone: $phone)
	}
`;

export const fetchCallQuery = gql`
	{
		call {
			name
			agenda
			time
			phone
		}
	}
`;
