import React, { Component } from 'react'

export default class Carts extends Component {

    renderGioHang = () => {
        //Nhận props từ component cha truyền vào

        return this.props.gioHang?.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width="50" height="50" alt={spGH.hinhAnh} /></td>
                <td>
                    <button onClick={()=>{
                        this.props.tangGiamSoLuong(spGH.maSP,true);
                    }}>+</button>
                    {spGH.soLuong}
                    <button onClick={()=>{
                         this.props.tangGiamSoLuong(spGH.maSP,false);
                    }}>-</button>
                </td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                <td><button onClick={()=>{
                    this.props.xoaGioHang(spGH.maSP)
                }}>Xoá</button></td>
            </tr>
        });
    }


    render() {

        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mã sp</th>
                                            <th>Tên sp</th>
                                            <th>Hình ảnh</th>
                                            <th>Số lượng</th>
                                            <th>Giá bán</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                    </tbody>
                                </table>



                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
