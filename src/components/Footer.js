import Order from "./Order"
function Footer() {

    const openHour = 12 ;
    const closeHour = 22 ;
    let CurrentHour = new Date().getHours() ;
    let isOpen = false ;
    if (CurrentHour >= 12 && CurrentHour <= 22 ){
        isOpen = true ;
    }
  return (
    <div className="footer" >

        {!isOpen && ` We're happy to welcome you between {openHour}:00 and {closeHour}:00`}
        {isOpen && <Order openHour={openHour}  closeHour={closeHour} />}


    </div>
  )
}

export default Footer


