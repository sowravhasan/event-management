
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from './CardDetails';

const Details = () => {
    const [data, setData] = useState({})
    const {id} = useParams()

    const allData =useLoaderData();

    useEffect(() => {
        const viewCards= allData.find(data => data.id == id);
        setData(viewCards);
    }, [id, allData])
    console.log(data);
    return (
        <div className='px-20 py-16'>
            <CardDetails data ={data}></CardDetails>
        </div>
    );
};

export default Details;