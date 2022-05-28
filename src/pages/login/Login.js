import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


const initial = {
    name: "",
    phone: "",
    otp: "",
    sendotp: false,
    userType: ""
}
const Login = () => {
    const [isVegActive, setIsVegActive] = useState("veg");
    const [islogin, setIslogin] = useState(initial)
    const [item, setItem] = useState([])
    const [tempData, setTempData] = useState([])
    const [show, setShow] = useState(false)
    const [toggle, setToggle] = useState(false)

    let history = useHistory();

    console.log("isVegActive", isVegActive);
    // localStorage["item"] = JSON.stringify(item);

    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(item));
    }, [item])

    // var items = (localStorage.getItem("item"));
    // items = (items) ? JSON.parse(items) : [];
    // let stored_datas = JSON.parse(localStorage["item"]);

    const handelChange = (e) => {
        setIslogin({
            ...islogin,
            [e.target.name]: e.target.value
        })
    }

    const signin = (otp) => {
        if (islogin.name && islogin.phone) {
            setIslogin({ ...islogin, sendotp: otp })
            setShow(true)
        }
    }

    const login = () => {
        if (islogin.name && islogin.phone.length == 10 && islogin.otp.length == 4) {
            setItem([...item, islogin])
            history.push('/dashboard')
            console.log("success");
        } else {
            console.log("Fail");
        }
    }

    const hendlesearch = (e) => {
        const search = e.target.value;


        const filtered = item.filter(entry => (
            Object.values(entry).some(data =>
                data.toString().includes(search)
                // console.log(data, "++++++++++", typeof data, data.toString().includes(keyword))
            )
        ));
        if (filtered) {
            setTempData(filtered)
            setToggle(true)
        }
    }

    const handleTabChange = (Type) => {
        islogin.userType = Type;
        setIsVegActive(Type);
    }
    // useEffect(() => {
    //     console.log(search, "++++++++");
    //     if (search == "") {
    //         setToggle(false)
    //     }
    //     hendlesearch()
    // }, [search])

    return (
        <>
            <input
                name="search"
                type="text"
                onChange={(e) => hendlesearch(e)}
            />
            <div className="logo-container">
                <img src="images/cuirato-icon-orange.svg" alt="logo" className="logo" />
                <h2>Login</h2>
                <p>Sign up with your phone number</p>
            </div>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="enter name"
                    value={islogin.name}
                    onChange={(e) => handelChange(e)}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="enter mobile number"
                    value={islogin.phone}
                    onChange={(e) => handelChange(e)}
                />
                <button onClick={() => signin(true)}>Send Otp</button>
            </div>
            {show &&
                <div>
                    <input
                        type="text"
                        name="otp"
                        placeholder="enter otp"
                        value={islogin.otp}
                        onChange={(e) => handelChange(e)}
                    />
                    <button onClick={login}>Log In</button>

                </div>
            }

            <div>
                <ul className='container'>
                    <li >
                        <img className={isVegActive === "veg" ? "deactives" : "actives"} src={isVegActive === "veg" ? "images/icon-veg.svg" : "images/icon-veg.svg"} alt="veg" />
                        <p className={isVegActive === "veg" ? "active" : "deactive"} onClick={() => handleTabChange("veg")}>VEG</p></li>

                    <li>
                        <img className={isVegActive === "veg" ? "activenon" : "deactivenon"} src="images/icon-non-veg.svg" alt="nonveg" />
                        <p className={isVegActive === "nonveg" ? "activea" : "deactive"} onClick={() => handleTabChange("nonveg")}>Non-VEG</p></li>
                </ul>
            </div>
            <div className='table-mr'>
                {isVegActive === "veg" ?
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                !toggle ? item.map((x, i) => (
                                    < tr >
                                        <>
                                            <td>{i + 1}</td>
                                            <td>{x.name}</td>
                                            <td>{x.phone}</td>
                                        </>
                                    </tr>
                                ))
                                    :
                                    tempData.map((x, i) => (
                                        < tr >
                                            <>
                                                <td>{i + 1}</td>
                                                <td>{x.name}</td>
                                                <td>{x.phone}</td>
                                            </>
                                        </tr>
                                    ))

                            }
                        </tbody>
                    </table>
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                !toggle ? item.map((x, i) => (
                                    < tr >
                                        <>
                                            <td>{i + 1}</td>
                                            <td>{x.name}</td>
                                        </>
                                    </tr>
                                ))
                                    :
                                    tempData.map((x, i) => (
                                        < tr >
                                            <>
                                                <td>{i + 1}</td>
                                                <td>{x.name}</td>
                                            </>
                                        </tr>
                                    ))

                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}

export default Login

