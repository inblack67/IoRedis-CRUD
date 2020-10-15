import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { addCallMutation, fetchCallQuery } from '../src/queries';

const AddTodo = () => {
	const { handleSubmit, register } = useForm();

	const [ addCall, { loading } ] = useMutation(addCallMutation, {
		refetchQueries: [
			{
				query: fetchCallQuery,
			},
		],
	});

	const onAdd = ({ name, time, phone, agenda }) => {
		addCall({
			variables: {
				name,
				time,
				phone,
				agenda,
			},
		})
			.then(() => M.toast({ html: 'Call Added' }))
			.catch((err) => console.error(err));
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit(onAdd)}>
				<div className='input-field'>
					<input type='text' name='name' ref={register({ required: true })} />
					<label htmlFor='name'>Name</label>
				</div>
				<div className='input-field'>
					<input type='text' name='agenda' ref={register({ required: true })} />
					<label htmlFor='agenda'>Agenda</label>
				</div>
				<div className='input-field'>
					<input type='text' name='time' ref={register({ required: true })} />
					<label htmlFor='time'>Time</label>
				</div>
				<div className='input-field'>
					<input type='text' name='phone' ref={register({ required: true })} />
					<label htmlFor='phone'>Phone</label>
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
