import { useGet } from 'restful-react';
import { CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'customerName', headerName: 'Customer Email', width: 130 },
    { field: 'customerEmail', headerName: 'Customer Email', width: 130 },
    {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 160,
        valueGetter: (params) => params.id,
        renderCell: (params) => {
            // TODO: Add actions
            return <div>{params.value}</div>;
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
        <div style={{ height: 400 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default OrderList;
