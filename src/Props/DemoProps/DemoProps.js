import React, { Component } from 'react'
import SanPham from './SanPham'

const mangSanPham = [
    { ma: 1, tenSP: 'Iphone', gia: 1000, hinhAnh: './img/sp_iphoneX.png' },
    { ma: 2, tenSP: 'Note 7', gia: 1200, hinhAnh: './img/sp_note7.png' },
    { ma: 3, tenSP: 'Vivo 850', gia: 2000, hinhAnh: './img/sp_vivo850.png' },
]


export default class DemoProps extends Component {

    renderSanPham = () => {
        return mangSanPham.map((objectSP, index) => {
            return <div className="col-4" key={index}>
                <SanPham sp={objectSP} />
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
