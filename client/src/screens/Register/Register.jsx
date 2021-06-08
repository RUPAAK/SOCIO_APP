import './Register.css'

const Register=()=>{
    
    const onSubmitHandler=()=>{}
    return(
        <>
            <div className="register_main_container">
                <div className="register_container">
                    <div className="left_section">
                        <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                    <div className="right_container">
                        <form onSubmit={onSubmitHandler} className="form_container">
                            <input placeholder="Enter Username" type="text" className="register_input" />
                            <input placeholder="Enter Email" type="text" className="register_input" />
                            <input placeholder="Enter Password" type="text" className="register_input" />
                            <input placeholder="Enter Cofirm Password" type="text" className="register_input" />
                            <button type="submit" className="register_button">Sign Up</button>
                            <hr className="hr" />
                            <button className="loginaccount">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register