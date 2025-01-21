const UpdateRecibo = () => {
    return (
        <section className="mt-20">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-12 text-xl font-bold">Edição de recibo</h2>
                <form action="#">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm">Valor</label>
                            <input type="number" name="price" id="price"
                                className="text-sm rounded-lg border focus:outline-none w-full p-2.5 bg-charcoal border-charcoal focus:border-lightCharcoal"
                                placeholder="R$ 12.90" required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="due-date" className="block mb-2 text-sm">Data de vencimento</label>
                            <input type="date" name="due=date" id="due-date"
                                className="text-sm rounded-lg border focus:outline-none w-full p-2.5 bg-charcoal border-charcoal focus:border-lightCharcoal" required="" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm">Descrição</label>
                            <textarea name="description" id="description" rows={4}
                                className="block p-2.5 w-full rounded-lg border focus:outline-none bg-charcoal border-charcoal focus:border-lightCharcoal
                  text-sm sm:text-base" placeholder="Descrição do recibo"></textarea>
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

export default UpdateRecibo