import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';


const LoginPage = (props) => {
    const [checked, setChecked] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 1000);
    }

    // const initialValues = { username: "", email: "", password: "" };
    // const [formValues, setformValues] = useState();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setformValues({ ...formValues, [name]: value })
    //     console.log(formValues); 
    // };


    return (
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
        <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/Logo-PT-Alam-Sampurna-Makmur-Dark.png' : 'assets/layout/images/Logo-PT-Alam-Sampurna-Makmur-Light.png'} alt="hyper, logo" height="50" className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span className="text-600 font-medium line-height-3">Sampurna Group</span>
            {/* <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <button className="p-link font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</button> */}
        </div>

        <div>
            <h6>Username</h6>
            <label htmlFor="username" className="block text-900 font-medium mb-2"> </label>
            <InputText id="username" type="text" placeholder="Username" className="w-full mb-3" />

            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3"  />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox inputId="rememberme1" binary className="mr-2" onChange={e => setChecked(e.checked)} checked={checked} />
                    <label htmlFor="rememberme1">Remember me</label>
                </div>
                <button className="p-link font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</button>
            </div>

            <Button label="Sign In" loading={loading2} onClick={onLoadingClick2} className="p-button-raised p-button-text text-primary-800 w-full" />
        </div>
    </div>
    )
}

export default LoginPage;