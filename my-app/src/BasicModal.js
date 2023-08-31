import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40rem',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen}>View</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="open-modal"
                aria-describedby="open-description"
            >
                <Box sx={style}>
                    <div>
                        <img src={require(`./routes/art/${props.image}`)} alt={props.title} className={'image'}/>
                    </div>

                    <div style={{display: "flex"}}>
                        <div style={{marginRight: "2rem", }}>
                            <h3 style={{marginBottom: 0}}>
                                <em>{props.title}</em>
                            </h3>
                            <p style={{margin: 0}}>{props.year}</p>
                        </div>
                        <div>
                            <p >{props.description}</p>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}
