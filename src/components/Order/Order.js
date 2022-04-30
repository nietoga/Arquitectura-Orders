import { Button, CircularProgress, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useGet } from 'restful-react';
import * as yup from 'yup';

const validationSchema = yup.object({
    status: yup.string('Enter order status').required('Order status is required'),
    totalPrice: yup.string("Enter order's total price").required("Order's total price is required"),
    address: yup
        .string("Enter order's delivery address")
        .required("Order's delivery address is required"),
    customerName: yup.string('Enter customer name').required('Customer name is required'),
    customerEmail: yup
        .string('Enter customer email')
        .email('Enter a valid email')
        .required('Customer email is required'),
});

const Order = (props) => {
    const { id } = props;

    const handleSubmit = useCallback(
        (values) => {
            if (id) {
                alert('editing');
            } else {
                alert('new');
            }

            alert(JSON.stringify(values, null, 2));
        },
        [id]
    );

    const formik = useFormik({
        initialValues: {
            status: '',
            totalPrice: '',
            address: '',
            product: '',
            customerName: '',
            customerEmail: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    const {
        data: orderData,
        loading: orderLoading,
        error: orderError,
    } = useGet({ path: `order/show/${id}` });

    const order = orderData?.order;

    useEffect(() => {
        if (order) {
            formik.setValues(order);
        }
    }, [order]);

    if (orderLoading) {
        return <CircularProgress />;
    }

    if (orderError || !orderData.ok) {
        return <div>Something happened 😔</div>;
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="totalPrice"
                name="totalPrice"
                label="Total Price"
                value={formik.values.totalPrice}
                onChange={formik.handleChange}
                error={formik.touched.totalPrice && Boolean(formik.errors.totalPrice)}
                helperText={formik.touched.totalPrice && formik.errors.totalPrice}
            />
            <TextField
                fullWidth
                id="status"
                name="status"
                label="Order Status"
                value={formik.values.status}
                onChange={formik.handleChange}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
            />
            <TextField
                fullWidth
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
            />
            <TextField
                fullWidth
                id="customerName"
                name="customerName"
                label="Customer Name"
                value={formik.values.customerName}
                onChange={formik.handleChange}
                error={formik.touched.customerName && Boolean(formik.errors.customerName)}
                helperText={formik.touched.customerName && formik.errors.customerName}
            />
            <TextField
                fullWidth
                id="customerEmail"
                name="customerEmail"
                label="Customer Email"
                value={formik.values.customerEmail}
                onChange={formik.handleChange}
                error={formik.touched.customerEmail && Boolean(formik.errors.customerEmail)}
                helperText={formik.touched.customerEmail && formik.errors.customerEmail}
            />
            <TextField
                fullWidth
                id="product"
                name="product"
                label="Product"
                value={formik.values.product}
                onChange={formik.handleChange}
                error={formik.touched.product && Boolean(formik.errors.product)}
                helperText={formik.touched.product && formik.errors.product}
            />
            <Button fullWidth color="primary" variant="contained" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Order;
