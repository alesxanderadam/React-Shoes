import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/Giohang.css'

function Giohang(props) {
    const { sp, handleSoLuong, handleDel } = props
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const tongGioHang = sp.reduce((tsl, spGH, index) => {
        return tsl += spGH.soLuong
    }, 0)

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Giỏ Hàng ({tongGioHang})
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Mã SP</th>
                                <th>Tên SP</th>
                                <th>Hình Ảnh</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sp.map((spGH, index) => {
                                return <tr key={index}>
                                    <td>{spGH.id}</td>
                                    <td>{spGH.name}</td>
                                    <td><img src={spGH.image} width={50} height={50}></img></td>
                                    <td>
                                        <button className='btn btn-success me-2' onClick={() => {
                                            handleSoLuong(spGH.id, false)
                                        }}>-</button>
                                        {spGH.soLuong}
                                        <button onClick={() => {
                                            handleSoLuong(spGH.id, true)
                                        }} className='btn btn-success  ms-2'>+</button>
                                    </td>
                                    <td>{spGH.price}</td>

                                    <td>{spGH.soLuong * spGH.price}</td>
                                    <td> <button className='btn btn-danger' onClick={() => {
                                        handleDel(spGH.id)
                                    }}
                                    >Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Giohang;