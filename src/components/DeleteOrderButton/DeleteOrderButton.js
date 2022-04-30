import { Link } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutate } from 'restful-react';

const DeleteOrderButton = (props) => {
    const { id } = props;

    const navigate = useNavigate();

    const { mutate: deleteOrderMutation } = useMutate({
        verb: 'DELETE',
        path: `order/delete/${id}`,
    });

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            deleteOrderMutation({}).then(() => {
                navigate('/');
            });
        },
        [id]
    );

    return (
        <Link component="button" onClick={handleSubmit}>
            Delete
        </Link>
    );
};

export default DeleteOrderButton;
