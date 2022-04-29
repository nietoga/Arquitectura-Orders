import { useGet } from 'restful-react';
import { Card, CardContent, CircularProgress } from '@mui/material';

const Order = (props) => {
    const { id } = props;

    const {
        data: orderData,
        loading: orderLoading,
        error: orderError,
        response: orderResponse,
    } = useGet({ path: `order/show/${id}` });

    if (orderLoading) {
        return <CircularProgress />;
    }

    if (orderError || !orderData.ok) {
        return <div>Something happened 😔</div>;
    }

    const order = orderData.order;

    return (
        <Card>
            <h1>Order #{id}</h1>
            <CardContent>
                <pre>{JSON.stringify(order, null, 2)}</pre>
            </CardContent>
        </Card>
    );
};

export default Order;
