import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontFamily: "Spectral",
    transform: 'translate(-50%, -50%)',
    width: '40rem',
    bgcolor: 'background.paper',
    borderRadius: ".5rem",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if ((props.link) && (props.link !== "/")){
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
                            <img src={require(`../routes/art/${props.image}`)} alt={props.title} className={'image'}/>
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
                                <a href={props.link} target={'_blank'}><p>See more</p></a>
                            </div>
                        </div>

                    </Box>
                </Modal>
            </div>
        );

    }
    else{
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
                            <img src={require(`../routes/art/${props.image}`)} alt={props.title} className={'image'}/>
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

}
