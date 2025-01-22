import React, { useState } from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/v1/auth', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => {
            console.log(data.text());
            return data.json();
        })
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        setUserName(e.target.email.value);
        setPassword(e.target.password.value);
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
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
                        <form onSubmit={
                            handleSubmit
                            // (e) => {
                            // e.preventDefault();
                            // const formData = new FormData(e.target);
                            // const email = formData.get('email');
                            // const password = formData.get('password');
                            // console.log({ email, password }); // Processar os dados aqui
                            //}
                        } className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Seu email</label>
                                <input name="email" id="email"
                                    placeholder="exemplo@email.com"
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