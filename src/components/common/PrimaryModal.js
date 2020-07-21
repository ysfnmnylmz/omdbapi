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
        document.getElementsByClassName('added-fav')[0].classList.add('active');
        addFav(e, movie, note);
        handleClose();
        setTimeout(function(){ document.getElementsByClassName('added-fav')[0].classList.remove('active'); }, 2000);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Would you like to write a note?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input style={{width:'100%'}} onChange={handleChange} placeholder={'Your Note...'} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">Close</Button>
                <Button onClick={(e) => saveFav(e, movie, note)} variant="primary">Add to Favorite</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default PrimaryModal;
