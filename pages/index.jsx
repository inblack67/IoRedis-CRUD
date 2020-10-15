import { useForm } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { fetchTodosQuery } from '../src/queries';

const index = () => {
	const { loading, data } = useQuery(fetchTodosQuery);
	if (loading) {
		return <p className='flow-text center'>Loading...</p>;
	}

	return (
		<div className='container'>
			<p className='flow-text center'>Todos</p>
			<ul className='collection'>
				{data &&
					data.todos &&
					data.todos.map((todo, i) => (
						<li className='collection-item' key={i}>
							{todo}
						</li>
					))}
			</ul>
		</div>
	);
};

export default index;
