import React from 'react'

const Footer = () => {
    return (
        <div className='position-relative' style={{ paddingTop: "130px" }}>
            <div className='bg-secondary' style={{ heigth: "225px", top: "20px" }}>
                <div className="card-columns " style={{ paddingBottom: "20px" }}>
                    <div className="card-body">
                        <img className='footer-img' src="../../UI2.png " />
                    </div>
                </div>
                <div className='d-flex text-white' style={{ paddingTop: "34px" }}>

                    <p style={{ paddingLeft: "160px" }}>  <img src="../../../envelope-check.svg" /> info@bus.com</p>
                    <p className='' style={{ paddingLeft: "1140px" }}>Team And Condition</p>
                    <p className='pl-5'>Faq</p>
                    <p className='pl-5'>Privacy Policy</p>
                </div>
                <p className='text-white' style={{ paddingLeft: "160px" }}>  <img src="../../../telephone.svg" /> +000 000 0000</p>
            </div >
        </div >
    )
}

export default Footer  