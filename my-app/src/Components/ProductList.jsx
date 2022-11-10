import React from 'react'
import ModalProduct from './ModalProduct'

export default function ProductList(props) {
    const { item, themGioHang } = props
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={item.image} alt="Title" />
                <div className="card-body bg-danger py-4 ">
                    <h4 className="card-title pb-2">{item.name}</h4>
                    <ModalProduct item={item} />
                    <button onClick={() => {
                        themGioHang(item)
                    }} className='btn btn-success'>Thêm giỏ hàng</button>
                </div>
            </div>
        </>


    )
}
