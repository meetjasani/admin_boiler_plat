import React from 'react'
import Footer from '../layout/footer/Footer'

const WhyChoose = () => {
    return (
        <>
            <div className='container row'>
                <div className='col-6 bg-secondary'>
                    <div style={{ width: "500px", padding: "50px" }}>
                        <p className='font-weight-bold'>Why Choose Us</p>

                        <div className='d-flex'>
                            <img src="../../../aperture.svg" />
                            <p>Our Mision</p>
                        </div>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Vivamus varius justo eu neque tincidunt venenatis.</p>
                        <div className='d-flex'>
                            <img src="../../../aperture.svg" />
                            <p >Our Mision</p>
                        </div>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Vivamus varius justo eu neque tincidunt venenatis.</p>
                        <div className='d-flex'>
                            <img src="../../../aperture.svg" />
                            <p >Our Mision</p>
                        </div>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Vivamus varius justo eu neque tincidunt venenatis.</p>
                        <a className="btn btn-primary rounded-pill text-white mt-5" > Read More...</a >
                    </div>
                </div>
                <div className='second-p position-absolute' style={{ left: "800px" }}>
                    <img src="../../../asp.net.png" />
                </div>
            </div>
            <div className='bg-light row position-relative'>
                <div className='col-6 why-img'>
                    <div className=''>
                        <img src="../../../asp.net.png" />

                        <img className='position-absolute' style={{ left: "495px", top: "199px", width: "38% " }} src="../../hybrid1.png" />
                    </div>
                </div>
                <div className='col-6 why-img1' style={{ padding: "60px" }}>
                    <p className='font-weight-bold '><p className='text-primary' style={{ display: "inline" }}>Reference site about Lorem Ipsum,</p> giving information on its origins information.</p>
                    <p className='' style={{ padding: "0px 250px 0px 0px" }}>Reference site about Lorem Ipsum, giving information on its origins Reference site about Lorem Ipsum, giving information on its origins Reference site about Lorem Ipsum, giving information on its origins Reference site about Lorem Ipsum, giving information on its origins Reference site about Lorem Ipsum, giving information on its origins Reference site about Lorem Ipsum, giving information on its origins Reference site about Lorem Ipsum, giving information on its origins Reference site about Lorem Ipsum, giving information on its originsReference site about Lorem Ipsum, giving information on its origins information on its origins Reference site about Lorem Ipsum</p>
                    <a className="btn btn-primary rounded-pill text-white mt-5" > Read More...</a >
                </div>
            </div>
            <div className='bg-secondary'>
                <u><p className='font-weight-bold our-team-card'><p className='text-white' style={{ display: "inline" }}>Our Team</p> Members</p></u>
                <div className="card-deck main-card" >
                    <div className="card">
                        <div className="card-body text-center">
                            {/* <p className="card-text">Some text inside the first card</p> */}
                            <img style={{ height: "300px" }} src="../../user3.png" />
                        </div>
                    </div>
                    <div className="card" >
                        <div className="card-body text-center" >
                            <img style={{ height: "300px" }} src="../../user3.png" />
                        </div >
                    </div >
                    <div className="card" >
                        <div className="card-body text-center" >
                            <img style={{ height: "300px" }} src="../../user3.png" />
                        </div >
                    </div >
                    <div className="card" >
                        <div className="card-body text-center" >
                            <img style={{ height: "300px" }} src="../../user3.png" />
                        </div >
                    </div >
                </div >
            </div >
            <div className=' container bg-light position-relative overflow-hidden'>
                <div className='upcoming-card'>
                    <p className='font-weight-bold  text-secondary'><p className='text-primary' style={{ display: "inline" }}>Upcoming</p> Events</p>
                </div>
                <div className=''>
                    <div className=' d-flex  align-itmes-center justify-content-between' >
                        <img src="../../custom2.png" style={{ marginRight: "20px" }} />
                        <img src="../../custom2.png" />
                    </div>
                    <div className=''>
                        <div className='img-im position-absolute' style={{ width: "400px", top: "343px", left: "44px" }} >
                            <p className='text-white text-event text-center'><p className='text-primary font-weight-bold'>Quition</p> In publishing and graphic design, Lorem ipsum is a placeholder text commonly usedLorem ipsum is a placeholder text commonly usedLorem ipsum is a placeholder text commonly usedLorem ipsum is a placeholder text commonly usedLorem ipsum is a placeholder text commonly used </p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='img-im position-absolute' style={{ width: "400px", top: "343px", left: "658px" }} >
                            <p className='text-white text-event text-center'><p className='text-primary font-weight-bold'>Quition</p> In publishing and graphic design, Lorem ipsum is a placeholder text commonly usedLorem ipsum is a placeholder text commonly usedLorem ipsum is a placeholder text commonly usedLorem ipsum is a placeholder text commonly usedLorem ipsum is a placeholder text commonly used </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WhyChoose