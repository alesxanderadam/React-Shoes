import React, { Component } from 'react';
import data from '../data.json'
import ProductList from './ProductList';

class ShoesStore extends Component {
    constructor(props) {
        super(props);
        this.state = { data };
    }
    renderProduct = () => {
        return data.map((sp, index) => {
            return (
                <div className='col-xl-4 col-sm-6 mt-3' key={index}>
                    <ProductList item={sp} />
                </div>

            )
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center mt-2'>Shoes Store</h1>
                    {this.renderProduct()}
                </div>

            </div>
        );
    }
}

export default ShoesStore;