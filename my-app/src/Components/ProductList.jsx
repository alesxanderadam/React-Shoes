import React from 'react'
import ModalProduct from './ModalProduct'

export default function ProductList(props) {
    const { item } = props
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={item.image} alt="Title" />
                <div className="card-body bg-danger py-4 ">
                    <ModalProduct item={item} />
                </div>
            </div>
        </>

    )
}
