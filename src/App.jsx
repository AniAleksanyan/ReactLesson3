import Products from './components/products/Products'
import './App.css'

function App(props) {
  return (
    <>
      <Products products={props.products}/>
    </>
  )
}

export default App