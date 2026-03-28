import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import TextField from "./TextField.jsx";
import {Link, useNavigate} from "react-router-dom";
import api from "../api/Api.js";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const {register, handleSubmit, reset, formState: {errors}} =
        useForm({defaultValues: {
            username: '',
            email: '',
            password: '',
            }, mode: "onTouched",
        });

    const navigate = useNavigate();

    const registerHandler = async (data) =>{
        setLoader(true);
        try{
            const {data: response} = await api.post("/api/auth/public/register", data);
            reset();
            navigate("/login");
            toast.success("Account Created successful!");
        }catch(err){
            console.log(err);
            toast.error("Something went wrong!");
        }finally {
            setLoader(false);
        }
    }

    const [loader, setLoader] = useState(false);
    return (
        <div className={"min-h-[calc(100vh-64px)] flex justify-center items-center"}>
           <form onSubmit={handleSubmit(registerHandler)} className={"sm:w-112.5 w-90  shadow-[0_0_15px_rgba(0,0,0,0.3)] py-8 sm:px-8 px-4 rounded-md"}>
               <h1 className={"text-center font-serif text-[#3364F7] font-bold lg:text-3xl text-2xl"}>
                   Register Here
               </h1>
                <hr className={"mt-2 mb-5 text-black"}/>
               <div className={"flex flex-col gap-3"}>
                    <TextField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message={"Username is required"}
                        placeholder={"Username"}
                        register={register}
                        errors={errors}
                    />
                   <TextField
                       label="Email"
                       required
                       id="email"
                       type="email"
                       message={"Email is required"}
                       placeholder={"Email"}
                       register={register}
                       errors={errors}
                   />
                   <TextField
                       label="Password"
                       required
                       id="password"
                       type="password"
                       message={"Password is required"}
                       placeholder={"Password"}
                       register={register}
                       errors={errors}
                   />
               </div>
               <button disabled={loader} type={"submit"} className={"bg-rose-700 font-semibold text-white bg-linear-[#3b82f6,#9333ea] w-full py-2 transition-colors duration-100 rounded-sm my-3"}>
                   {loader ? "Loading..." : "Register"}
               </button>
               <p className='text-center text-sm text-slate-700 mt-6'>
                   Already have an account?
                   <Link
                       className='font-semibold'
                       to="/login">
                       <span className='text-[#3364F7]'> Login</span>
                   </Link>
               </p>
           </form>
        </div>
    )
}
export default RegisterPage
