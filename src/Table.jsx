const Table = ({ headers, rows }) => {
  return (
    <div className="relative overflow-x-auto">
      <div className="pb-4">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search" className="block p-2 ps-10 text-sm border rounded-lg w-80 focus:ring-lightCharcoal focus:border-lightCharcoal placeholder-gray-400 border-lightCharcoal bg-darkCharcoal focus:ring-2 focus:ring-offset-darkCharcoal focus:outline-none" placeholder="Procurar..." />
        </div>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="text-sm uppercase">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3 font-normal">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={`bg-charcoal hover:bg-lightCharcoal hover:cursor-pointer ${rowIndex != rows.length - 1 ? 'border-b border-gray-500' :
              ''
              }`}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-6 py-4 ${cellIndex == 1 ? 'whitespace-nowrap' :
                    'font-normal'
                    }`}>
                  {cell}
                </td>
              ))
              }
              <td>
                <a href="#" className="">
                  <img src="/icons8-trash.svg" alt="Excluir" className="w-6" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table