import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { DataProvider } from './context/MainContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DataProvider>
    <RouterProvider router={routes} />
  </DataProvider>,
)
