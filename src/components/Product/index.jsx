import './style.css'

function Product({ products, handleClick }) {
    return (

        <main>

            {products.length === undefined ?
                <div className="Products ProductFind">
                    <p>{products.name}</p>
                    <p>Categoria - {products.category}</p>
                    <p>Preço - R$ {products.price}</p>
                    <button onClick={() => handleClick(products.id)}>Adicionar</button>

                </div>
                :

                <div className="Products">
                    {products.map(el => {
                        return <div>

                            <p>{el.name}</p>
                            <p>Categoria - {el.category}</p>
                            <p>Preço - R$ {el.price}</p>
                            <button onClick={() => handleClick(el.id)}>Adicionar</button>

                        </div>
                    })}
                </div>

            }




        </main>
    )
}

export default Product