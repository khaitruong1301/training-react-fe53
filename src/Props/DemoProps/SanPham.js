import React from 'react'



//Props là tham số nhận giá trị từ component cha truyền vào
export default function SanPham(props) {
   
    const {ma,tenSP,hinhAnh,gia} = props.sp;
   
    return (
        <div>
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={hinhAnh} alt height="350" />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{gia}</p>
                </div>
            </div>
        </div>

    )
}
