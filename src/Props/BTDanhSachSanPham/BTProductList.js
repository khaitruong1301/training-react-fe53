import React, { Component } from 'react'
import BTProduct from './BTProduct'
import Carts from './Carts'

const arrProduct = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
    },

    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "./img/meizuphone.jpg"
    },

    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "./img/applephone.jpg"
    }
]


export default class BTProductList extends Component {

    state = {
        //state sẽ chứa dữ liệu sản phẩm chi tiết, khi người dùng thao tác ta sẽ thay đổi giá trị này
        gioHang: [
            // { maSP: 3, tenSP: 'Iphone XS Max', hinhAnh: './img/applephone.jpg', giaBan: 2000, soLuong: 5 }
        ], //Dữ liệu thông tin giỏ hàng (Chứa giao diện & nút thêm giỏ hàng)
        productDetail: {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }


    }

    renderProduct = () => {
        return arrProduct.map((product, index) => {
            return <div key={index} className="col-4">
                <BTProduct themGioHang={this.themGioHang} xemCT={this.xemChiTiet} product={product} />
                {/* <button className="btn btn-success" onClick={()=>{
                    this.xemChiTiet(product);
                }}>Xem chi tiết</button> */}
            </div>
        })
    }
    //callback function: Hàm đóng vai trò là tham số truyền vào hàm khác
    //Hàm làm thay đổi giao diện
    xemChiTiet = (sanPhamClick) => {

        //setState của sản phẩm chi tiết
        console.log('spClick', sanPhamClick);
        this.setState({
            productDetail: sanPhamClick
        })
    }

    //Viết phương thức thêm giỏ hàng tại component chứa state giỏ hàng
    themGioHang = (spClick) => {
        //Từ spclick => tạo ra sp giỏ hàng có số lượng
        const spGioHang = { ...spClick, soLuong: 1 };

        //Kiểm tra sản phẩm có trong giỏ hàng chưa
        const spGHTimKiem = this.state.gioHang.find(sp => sp.maSP === spGioHang.maSP);
        //Tìm thấy sản phẩm trong giỏ hàng thì tăng số lượng
        if (spGHTimKiem) {
            spGHTimKiem.soLuong += 1;
        } else {
            //Không tìm thấy spClick trong giỏ hàng thì thêm sp được click đó vào giỏ hàng
            this.state.gioHang.push(spGioHang);
        }

        //Cập nhật state giỏ hàng sau khi xử lý thêm sản phẩm
        this.setState({
            gioHang: this.state.gioHang
        });
        //setState thay đổi state.gioHang
    }

    xoaGioHang = (maSPClick) => {
        //Tìm sản phẩm đó có trong giỏ hàng hay không 
        // let index = this.state.gioHang.findIndex(sp=>sp.maSP === maSPClick);

        // //Tiến hành xoá sản phẩm
        // if(index!=-1){
        //     this.state.gioHang.splice(index,1)
        // }
        //Cập nhật lại giỏ hàng sau khi xoá
        this.setState({
            gioHang: this.state.gioHang.filter(sp => sp.maSP !== maSPClick)
        });

    }

    tangGiamSoLuong = (maSP, tangGiam) => { //tangGiam=true là tăng, tăng giảm = false là giảm
        console.log(maSP, tangGiam);

        //Tìm ra sản phẩm có mã = với mã nút + - 
        const spGioHang = this.state.gioHang.find(sp => sp.maSP === maSP);
        if (spGioHang) {
            if (tangGiam) {
                spGioHang.soLuong += 1;
            } else {
                if (spGioHang.soLuong > 1) {
                    spGioHang.soLuong -= 1;
                }
            }
        }
        //setState giỏ hàng =>render lại giao diện
        this.setState({
            gioHang: this.state.gioHang
        })


    }

    render() {
        let { maSP, tenSP, hinhAnh, giaBan, ram, rom, manHinh, cameraSau, cameraTruoc, heDieuHanh } = this.state.productDetail;
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    <div className="col-12 text-right">
                        <span style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">Giỏ hàng({
                            this.state.gioHang.reduce((tongSL,sp,index)=> {
                                return tongSL+=sp.soLuong;
                            },0).toLocaleString()
                        })</span>
                    </div>
                    <Carts tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />


                </div>


                <div className="row">
                    {this.renderProduct()}
                </div>


                <div className="mt-5">
                    {/* Thông tin chi tiết  */}
                    <div className="row">
                        <div className="col-4 text-center">
                            <h1>Iphone x</h1>
                            <img src={hinhAnh} alt={hinhAnh} height="350" />
                        </div>
                        <div className="col-8">
                            <h1>Thông số kỹ thuật</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>Ram</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>Rom</td>
                                        <td>{rom}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
