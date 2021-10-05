import './style.css'

const MenuContainer = ({currentSale}) => {
    return(
        <div>
            
            <div className="MenuContainer">{currentSale.map(el=>{
                return <div>
                    <p>{el.name}</p>
                    <p>Categoria - {el.category}</p>
                    <p>Preço - R$ {el.price}</p>
                </div>
            })}</div>
        </div>
    )
}

export default MenuContainer

