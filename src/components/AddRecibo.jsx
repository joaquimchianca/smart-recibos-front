const AddRecibo = () => {
  return (
    <section className="mt-20">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-12 text-xl font-bold">Adicione um novo recibo</h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm">Valor</label>
              <input type="number" name="price" id="price"
              className="text-sm rounded-lg border focus:outline-none w-full p-2.5 bg-charcoal border-charcoal focus:border-lightCharcoal"
              placeholder="R$ 12.90" required=""/>
            </div>
            <div className="w-full">
              <label htmlFor="due-date" className="block mb-2 text-sm">Data de vencimento</label>
              <input type="date" name="due=date" id="due-date"
              className="text-sm rounded-lg border focus:outline-none w-full p-2.5 bg-charcoal border-charcoal focus:border-lightCharcoal" required=""/>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm">Descrição</label>
              <textarea name="description" id="description" rows={4}
                className="block p-2.5 w-full rounded-lg border focus:outline-none bg-charcoal border-charcoal focus:border-lightCharcoal
                text-sm sm:text-base" placeholder="Descrição do recibo"></textarea>
            </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-center rounded-lg bg-magenta hover:bg-lightMagenta focus:outline-none font-bold">Salvar</button>
        </form>
      </div>
    </section>
  )
}

export default AddRecibo