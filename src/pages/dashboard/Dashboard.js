import React from 'react'
import WhyChoose from '../WhyChoose'
import './Dashboard.css'
function Dashboard() {
    return (
        <>
            <div className='position-relative'>
                <div className='bg-back'>
                    <div className='img-img' >
                        <p className='text-white text-lorem text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                    </div>
                    <div className='d-flex about-btn'>
                        <a className="btn btn-primary rounded-pill text-white " > AboutUs</a >

                        <a className="btn rounded-pill text-white bg-secondary ml-3" > Activiti</a >
                    </div>
                </div >
            </div>
            <WhyChoose />
        </>
    )
}

export default Dashboard

