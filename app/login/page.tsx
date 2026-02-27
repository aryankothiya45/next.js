"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "abcd1234@") {
            document.cookie = "auth=true; path=/; SameSite=Lax";
            router.push("/");
        } else {
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="login-brand">
                    <span className="login-icon">🛒</span>
                    <h1 className="login-title">ShopNext</h1>
                    <p className="login-subtitle">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="field">
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e): void => setEmail(e.target.value)}
                            placeholder="admin@gmail.com"
                            required
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <div className="relative w-full">
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e): void => setPassword(e.target.value)}
                                placeholder="••••••••••"
                                className="pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={(e): void => {
                                    const input = document.getElementById("password") as HTMLInputElement;
                                    if (!input) return;

                                    input.type = input.type === "password" ? "text" : "password";
                                    e.currentTarget.textContent =
                                        input.type === "password" ? "👁️" : "🙈";
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-base focus:outline-none"
                                title="Toggle password visibility"
                            >
                                👁️
                            </button>
                        </div>
                    </div>

                    {error && (
                        <p className="login-error">{error}</p>
                    )}

                    <button type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;