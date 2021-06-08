import './Login.css'

const Login=()=>{
    
    const onSubmitHandler=()=>{}
    return(
        <>
            <div className="login_main_container">
                <div className="login_container">
                    <div className="left_section">
                        <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                    <div className="right_container">
                        <form onSubmit={onSubmitHandler} className="form_container">
                            <input placeholder="Enter Email" type="text" className="login_input" />
                            <input placeholder="Enter Password" type="text" className="login_input" />
                            <button type="submit" className="login_button">Sign Up</button>
                            <hr className="hr"/>
                            <button className="createaccount">
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login