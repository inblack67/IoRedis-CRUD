import { useQuery } from '@apollo/client';
import { Fragment } from 'react';
import { fetchCallQuery } from '../src/queries';

const Calls = () => {
	const { loading, data } = useQuery(fetchCallQuery);

	return (
		<Fragment>
			<p className='flow-text green-text center'>Calls</p>
			{data &&
			data.call && (
				<div className='card black white-text'>
					<div className='card-content'>
						<span className='card-title'>{data.call.name}</span>
						<p>{data.call.agenda}</p>
					</div>
					<div className='card-action'>
						<a href='#!'>{data.call.time}</a>
						<a href='#!'>{data.call.phone}</a>
					</div>
				</div>
			)}
			<br/><br/>
		</Fragment>
	);
};

export default Calls;
