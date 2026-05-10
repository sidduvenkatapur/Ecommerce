
import ProductList from '../src/components/Pages/ProductList'
import ProductUpload from '../src/components/Pages/ProductUpload'
import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
function App() {

  return (
    <BrowserRouter>
    <Header />
    <div className='flex gap-10'>
    <Sidebar />
    <Routes>
      <Route path='/' element={<ProductUpload />} />
      <Route path='/productList' element={<ProductList />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
