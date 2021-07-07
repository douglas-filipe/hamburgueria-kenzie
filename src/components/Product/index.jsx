import './style.css'

function Product({ products, handleClick }) {
    return (
        <div className="Products">
            {products.map(el => {
                return <div>

                        <p>{el.name}</p>
                        <p>Categoria - {el.category}</p>
                        <p>Preço - R$ {el.price}</p>
                        <button onClick={()=>handleClick(el.id)}>Adicionar</button>

                </div>
            })}
        </div>
    )
}

export default Product