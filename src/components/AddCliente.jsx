const AddCliente = () => {
    return (
        <section className="mt-20">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-12 text-xl font-bold">Cadastre um novo cliente</h2>
                <form action="#">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm">Nome</label>
                            <input type="text" name="name" id="name"
                                className="text-sm rounded-lg border focus:outline-none w-full p-2.5 bg-charcoal border-lightCharcoal focus:border-gray-400"
                                placeholder="João da Silva" required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="cpf-cpnj" className="block mb-2 text-sm">CPF / CNPJ</label>
                            <input type="text" name="cpf-cpnj" id="cpf-cpnj"
                                className="text-sm rounded-lg border focus:outline-none w-full p-2.5 bg-charcoal border-lightCharcoal focus:border-gray-400"
                                placeholder="000.000.000-00" required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                            <input type="email" name="email" id="email"
                                className="text-sm rounded-lg border focus:outline-none w-full p-2.5 bg-charcoal border-lightCharcoal focus:border-gray-400"
                                placeholder="joao@email.com" required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="phone" className="block mb-2 text-sm">Telefone</label>
                            <input type="text" name="phone" id="phone"
                                className="text-sm rounded-lg border focus:outline-none w-full p-2.5 bg-charcoal border-lightCharcoal focus:border-gray-400"
                                placeholder="(99) 99999-9999" required="" />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <label class="inline-flex items-center me-5 cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-400"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Pessoa Jurídica</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-center rounded-lg bg-magenta hover:bg-lightMagenta focus:outline-none font-bold">Salvar</button>
                </form>
            </div>
        </section>
    )
}

export default AddCliente