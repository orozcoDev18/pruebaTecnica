import { useState } from 'react';
import './App.css'
import NestedModal from './components/buttonModals'
import DataGridDemo from './components/datagrid'

export type user = {
  id: number,
  name: string
}

function App() {
  const [data, setData] = useState<user[] | []>()

  const obtenerDatos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  obtenerDatos();

  return (
    <div>
      <NestedModal />
      <DataGridDemo rows={data || []} />
    </div>
  )
}

export default App
