import React, { useState } from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    console.log('Sending credentials:', credentials);

    try {
        const response = await fetch('http://localhost:8080/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Response data:', data);
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
}

export default function Login({ setToken }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = e.target.user.value;
        const pass = e.target.password.value;

        console.log(user)
        console.log(pass)
    
        const token = await loginUser({
            username: user,
            password: pass,
        });
    
        if (token) {
            setToken(token);
        } else {
            console.error('Failed to log in. Token is null.');
        }
    };
    
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <a href="" className="flex items-center mb-6 text-2xl font-semibold">
                    <img src="/SmartRecibos.png" alt="Logo" className="w-10 h-10 mr-2" />
                    SmartRecibos
                </a>
                <div className="w-full bg-charcoal border-lightCharcoal md:mt-0 border shadow rounded-lg sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                            Entre na sua conta
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="user" className="block mb-2 text-sm font-medium">Usuário</label>
                                <input name="user" id="user"
                                    placeholder="User"
                                    className="border rounded-lg focus:ring-charcoal focus:ring-4 focus:outline-none focus:border-darkCharcoal block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">Senha</label>
                                <input type="password" name="password" id="password"
                                    placeholder="• • • • • • • •"
                                    className="border rounded-lg focus:ring-charcoal focus:border-darkCharcoal focus:outline-none block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400" />
                            </div>
                            <button type="submit" className="w-full bg-magenta hover:bg-lightMagenta focus:ring-4 focus:outline-none font-bold rounded-lg text-md px-5 py-2.5 text-center">
                                Entrar
                            </button>
                            <p className="text-sm font-normal text-gray-400">
                                Não tem uma conta ainda? <a href="" className="font-semibold text-magenta hover:text-lightMagenta hover:underline">Cadastre-se</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};