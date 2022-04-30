import DeleteOrderButton from '../DeleteOrderButton';
import { CircularProgress, Link } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useGet } from 'restful-react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'customerName', headerName: 'Customer Name', width: 130 },
    { field: 'customerEmail', headerName: 'Customer Email', width: 160 },
    {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 100,
        valueGetter: (params) => params.id,
        renderCell: (params) => {
            const id = params.value;
            return (
                <>
                    <Link href={`/order/${id}`}>View</Link>|<DeleteOrderButton id={id} />
                </>
            );
        },
    },
];

const orderToRow = (order) => {
    return { ...order, id: order._id };
};

const OrderList = () => {
    const {
        data: ordersData,
        loading: ordersLoading,
        error: ordersError,
    } = useGet({ path: 'order/list' });

    if (ordersLoading) {
        return <CircularProgress />;
    }

    if (ordersError || !ordersData.ok) {
        return <div>Something happened 😔</div>;
    }

    const rows = ordersData.orders.map(orderToRow);

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
    );
};

export default OrderList;
