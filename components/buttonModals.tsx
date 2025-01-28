import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const handleOpen = () => {

    };


    return (
        <React.Fragment>
            <Button sx={{ backgroundColor: 'green', color: 'white', width: '20%' }} onClick={handleOpen}>Crear</Button>
        </React.Fragment>
    );
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen} sx={{ width: '50%', backgroundColor: 'blue', color: 'white' }} >Registrar</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400, height: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <h2 id="parent-modal-title" style={{ color: 'black' }}>Registrar Un Nuevo Usuario</h2>
                    <TextField id="outlined-basic" label="nombre de Usuario" variant="outlined" />
                    <ChildModal />
                </Box>
            </Modal>
        </div>
    );
}
