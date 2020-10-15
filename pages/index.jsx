import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { fetchTodosQuery, deleteTodoMutation } from '../src/queries';
import AddTodo from '../components/AddTodo';
import AddCall from '../components/AddCall';
import Calls from '../components/Calls';

const index = () => {
	const { loading, data } = useQuery(fetchTodosQuery);
	const [ deleteTodo, mutationRes ] = useMutation(deleteTodoMutation, {
		refetchQueries: [
			{
				query: fetchTodosQuery,
			},
		],
	});

	if (loading || mutationRes.loading) {
		return <p className='flow-text center'>Loading...</p>;
	}

	return (
		<div className='container'>
			<p className='flow-text center grey-text'>Todos</p>
			<ul className='collection'>
				{data &&
					data.todos &&
					data.todos.map((todo, i) => (
						<li className='collection-item' key={i}>
							<span>{todo}</span>
							<span className='secondary-content'>
								<a
									href='#!'
									className='red-text'
									onClick={(e) =>
										deleteTodo({
											variables: {
												title: todo,
											},
										})
											.then(() => M.toast({ html: 'Todo Deleted!' }))
											.catch((err) => console.error(err))}
								>
									Delete
								</a>
							</span>
						</li>
					))}
			</ul>
			<AddTodo />
			<Calls />
			<AddCall />
		</div>
	);
};

export default index;
