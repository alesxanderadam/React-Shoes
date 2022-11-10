import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalProduct(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { item } = props;

    var themGioHang = (spClick) => {
        console.log(spClick)
    }

    return (
        <>
            <Button variant="dark" className='py-2 me-2' onClick={handleShow}>
                Xem Chi Tiết
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><span style={{ fontSize: '20px', fontWeight: '600' }}>Description : </span> {item.description}! <br /> <br />
                    <span style={{ fontSize: '20px', fontWeight: '600' }}>ShortDescription : </span> {item.shortDescription}! <br /> <br />
                    <span style={{ fontSize: '20px', fontWeight: '600' }}>Price: </span> <span style={{ color: 'green', fontWeight: '500' }}>{item.price}$</span> <br />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalProduct;