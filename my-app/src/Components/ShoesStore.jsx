import React, { Component } from 'react';
import data from '../data.json'
import Giohang from './Giohang';
import ProductList from './ProductList';

class ShoesStore extends Component {
    constructor(props) {
        super(props);
        this.state = { gioHang: [] };
    }
    renderProduct = () => {
        return data.map((sp, index) => {
            return (
                <div className='col-xl-4 col-sm-6 mt-3' key={index}>
                    <ProductList themGioHang={this.themGioHang} item={sp} />
                </div>
            )
        })
    }
    //Lay them gio hang
    themGioHang = (spClick) => {
        let spGioHang = {
            id: spClick.id,
            name: spClick.name,
            price: spClick.price,
            image: spClick.image,
            soLuong: 1,
        }
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.id === spGioHang.id)
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang)
            alert(`Đã thêm ${spClick.name} vào giỏ hàng`)
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    handleDel = (spClick) => {
        var gioHangCapNhat = [...this.state.gioHang];
        var index = gioHangCapNhat.findIndex(sp => sp.id === spClick);
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1)
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    handleSoLuong = (maSP, tangGiam) => {
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.id === maSP)
        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        }
        else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1
            }
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {
        return (
            <div className='containser'>
                <h1 className='text-center mt-2'>Shoes Store</h1>
                <Giohang handleDel={this.handleDel} handleSoLuong={this.handleSoLuong} sp={this.state.gioHang} />
                <div className='row'>
                    {this.renderProduct()}
                </div>

            </div>
        );
    }
}

export default ShoesStore;