import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };

    const { currentMode } = useStateContext();
    const navigate = useNavigate();


    return (
        <>
        <div className="w-full min-h-screen  flex   justify-center items-center bg-hero-pattern bg-no-repeat bg-cover bg-center " >
            

            <form  onSubmit={handleSubmit(onSubmit)}> 
            <h1 className="text-4xl font-bold text-center mb-10 text-white">Login</h1>
                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="w-full mb-8 px-4 py-2  text-base border rounded-lg "
                />
                {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}

                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className="w-full mb-8 px-4 py-2  text-base border rounded-lg "
                />
                {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}

                <button type="submit" style={{ backgroundColor: "#a1eafb" }} className="w-full bg-blue-600 text-black py-2 rounded hover:bg-white-700" onClick={ () => navigate('/ecommerce')}> Log In </button>
            </form>
        </div>
           
        </>
    );
}

export default Login;