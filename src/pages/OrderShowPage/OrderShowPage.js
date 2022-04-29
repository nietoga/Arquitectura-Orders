import { useParams } from 'react-router-dom';

import Order from '../../components/Order';

const OrderShowPage = (props) => {
    const params = useParams();
    return <Order id={params.id} />;
};

export default OrderShowPage;