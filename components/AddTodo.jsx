import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { addTodoMutation, fetchTodosQuery } from '../src/queries';

const AddTodo = () => {
	const { handleSubmit, register } = useForm({
		title: 'duh',
	});

	const [ addTodo, { loading } ] = useMutation(addTodoMutation, {
		refetchQueries: [
			{
				query: fetchTodosQuery,
			},
		],
	});

	const onAdd = ({ title }) => {
		addTodo({
			variables: {
				title,
			},
		})
			.then(() => M.toast({ html: 'Todo Added' }))
			.catch((err) => console.error(err));
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit(onAdd)}>
				<div className='input-field'>
					<input type='text' name='title' ref={register({ required: true })} />
					<label htmlFor='title'>Title</label>
				</div>
				<div className='input-field'>
					<button type='submit' className='btn red'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddTodo;
