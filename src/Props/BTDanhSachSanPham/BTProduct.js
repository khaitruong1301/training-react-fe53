import React, { Component } from 'react'

export default class BTProduct extends Component {
    //Đối với react class component this.props: là thuộc tính nhận giá trị từ component cha truyền vào và không thể gán lại 

    render() {

        let {maSP,tenSP,giaBan,hinhAnh} = this.props.product;

        return (
            <div className="card text-left">
                <img className="card-img-top" src={hinhAnh} alt={hinhAnh} height="350" />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{giaBan}</p>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.xemCT(this.props.product);
                    }}>Xem chi tiết</button>
                </div>
            </div>

        )
    }
}
