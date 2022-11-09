import React from 'react'
import ModalProduct from './ModalProduct'

export default function ProductList(props) {
    const { item } = props
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={item.image} alt="Title" />
                <div className="card-body bg-danger py-4 ">
                    <h4 className="card-title pb-2">{item.name}</h4>
                    <ModalProduct item={item} />
                </div>
            </div>
            {/* <div className="card">
                <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div> */}

        </>


    )
}
