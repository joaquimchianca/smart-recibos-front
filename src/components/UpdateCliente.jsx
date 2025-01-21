const UpdateCliente = () => {
    return (
        <section className="mt-20">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-12 text-xl font-bold">Edição de  cliente</h2>
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
                    <div className="flex items-center space-x-4 mt-4 sm:mt-6">
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 text-center rounded-lg bg-magenta hover:bg-lightMagenta focus:outline-none font-bold">Salvar</button>
                        <button type="button" class="inline-flex items-center border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">
                            <svg class="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                            Remover
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UpdateCliente