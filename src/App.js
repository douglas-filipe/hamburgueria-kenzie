import { useState } from 'react'
import MenuContainer from './components/MenuContainer';
import Product from './components/Product';
import './style.css'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]);

  const [productFind, setProductFind] = useState([])

  const [filteredProducts, setFilteredProducts] = useState('');

  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  function showProducts() {
    
  }




  function handleClick(id) {
    const produto = products.find((el) => {
      return el.id === id
    })

    if (!currentSale.map(el => el.id).includes(produto.id)) {
      setCurrentSale([...currentSale, produto])
      setCartTotal(produto.price + cartTotal)
    }
  }


  console.log(filteredProducts)


  return (
    <div className="App">
      <form>
        <input
          value={filteredProducts}
          type="text"
          onChange={(e) => setFilteredProducts([e.target.value])} />

        <button onClick={showProducts} type="button">Pesquisar</button>
      </form>

      <Product products={products} handleClick={handleClick} />

      <span className="total">Subtotal - R${cartTotal.toFixed(2)}</span>
      <div className="Carrinho">
        <MenuContainer currentSale={currentSale} />
      </div>

    </div>



  );


}





export default App;
