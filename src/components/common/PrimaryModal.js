import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function PrimaryModal(props) {
    const { movie, show, setShow, addFav } = props;
    const [note, setNote] = useState('');
    const handleChange = (e) => {
        setNote(e.target.value);
    }
    const handleClose = () => setShow(false);

    const saveFav = (e, movie, note) => {
        addFav(e, movie, note);
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <input onChange={handleChange} placeholder={'Your Note...'} />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">Close</Button>
                <Button onClick={(e) => saveFav(e, movie, note)} variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default PrimaryModal;
