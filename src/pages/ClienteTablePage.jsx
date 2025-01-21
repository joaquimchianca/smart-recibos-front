import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

const ClienteTablePage = () => {
    const headers = ["ID", 'Nome', 'Documento', 'Email', 'Telefone']
    const rows = [
        ["1", "João Silva", "123.456.789-00", "joao.silva@email.com", "(11) 98765-4321"],
        ["2", "Maria Oliveira", "987.654.321-00", "maria.oliveira@email.com", "(21) 91234-5678"],
        ["3", "Carlos Santos", "456.789.123-00", "carlos.santos@email.com", "(31) 99876-5432"],
      ]
      
    return (
      <div className='flex'>
        <Sidebar />
        <div className='ml-56 mr-8 flex-1 mt-20'>
          <h1 className='text-4xl mb-8'>Clientes</h1>
          <Table headers={headers} rows={rows}/>
        </div>
      </div>
    )
}

export default ClienteTablePage