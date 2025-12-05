function Pizza({listPizza}){
    return (
    <ul className="pizzas">
        {listPizza.map((pizza , index)=>{
           return <li className={ pizza.soldOut  ?  "pizza img" : "pizza" } key={index}  >
            <img src={pizza.photoName} alt=""  />
                <div>
                
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <span>
                        { pizza.soldOut  &&  "SOLD OUT" }
                        { !pizza.soldOut  &&  pizza.price }

                    </span>
                </div>
             </li>
        })}
    </ul>
)
}

export default Pizza ;