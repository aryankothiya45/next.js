"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () =>{
    const router = useRouter();

    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [error,setError] = useState<string>("");

    const handleSubmit =(e:any): void => {
        e.preventDefault();

        if(email==="admin@gmail.com" && password==="abcd1234@"){
            document.cookie = "auth=true; path=/; SameSite=Lax";
            router.push("/");
        }else{
            setError("invalid credentials");
        }
    };

    return(
        <>
            <section className="flex min-h-[70vh] items-center justify-center pl-150">
                <div className="w-full max-w-md border rounded">
                    <h2 className="mb-6 text-2xl font-bold text-center pt-4  ">
                        Login
                    </h2>

                    <form onSubmit ={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label className="mb-1 block font-medium">
                                Email
                            </label>
                            <input 
                                type = "email"
                                value= {email}
                                onChange = {(e) :void => setEmail(e.target.value)}
                                placeholder = "enter Email"
                                className ="w-full border rounded px-3 py-2 outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="mb-1 block font-medium">
                                Password
                            </label>
                            <input 
                                type = "password"
                                value= {password}
                                onChange = {(e) :void => setPassword(e.target.value)}
                                placeholder = "enter Password"
                                className ="w-full border rounded px-3 py-2 outline-none"
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <button 
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-40 rounded mb-8 mt-4 "
                        >
                            Login
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
export default Login;