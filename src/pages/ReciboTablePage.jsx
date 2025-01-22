import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

const ReciboTablePage = () => {
  const headers = ["ID", 'Descrição', 'Valor', 'Vencimento', 'Status']
  const rows = [
    ["001", "Pagamento de Aluguel", "R$ 1.500,00", "2025-02-01", "Pendente"],
    ["002", "Compra de Materiais", "R$ 450,00", "2025-01-20", "Pago"],
    ["003", "Serviços de Limpeza", "R$ 250,00", "2025-01-25", "Atrasado"],
  ]
  return (
    <div className='flex'>
      <Sidebar />
      <div className='ml-56 mr-8 flex-1 mt-20'>
        <h1 className='text-4xl mb-8'>Recibos</h1>
        <Table headers={headers} rows={rows} title={'recibo'}/>
      </div>
    </div>
  )
}

export default ReciboTablePage