import { useEffect, useState } from "react"
interface CartItem {
    name: string;
    price: number;
    type: string;
  }

export default function GameItemInfo() {
    const [selectedEvent,setSelectedEvent] = useState("")
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (name: string, price: number, type: string) => {
        const newItem: CartItem = { name, price, type };
        setCartItems([...cartItems, newItem]);
      };
      const handleEventClick = (event:string) => {
        if(selectedEvent == event){
            setSelectedEvent('')
        } 
        else{
            setSelectedEvent(event);
        }
      };
      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }, [cartItems]);
      
    return (
        <>
            <div className="table__items b__bottom">
                <div className="t__items">
                    <div className="t__items__left">
                        <h6>Netherlands</h6>
                        <span className="text">Englands</span>
                        <p><a href="URL:void(0)">Today / 21:00</a>
                            <a className="today" href="#">Today / 21:00</a>
                        </p>
                    </div>
                </div>
                <div className="mart__point__items">
                    <a className="twing twing__right" href="#">
                        <i className="icon-twer"></i>
                    </a>
                    <a className="mart opo" href="URL:void(0)">
                        <i className="icon-pmart"></i></a>
                    <a className={`point__box ${selectedEvent === 'home' ? 'pointBoxSelected' : ''}`} onClick={() => handleEventClick('home')}  href="#0box">8.55</a>
                    <a className={`point__box ${selectedEvent === 'draw' ? 'pointBoxSelected' : ''}`} onClick={() => handleEventClick('draw')}  href="#0box">2.70</a>
                    <a className={`point__box ${selectedEvent === 'away' ? 'pointBoxSelected' : ''}`}  onClick={() => handleEventClick('away')} href="#0box">8.50</a>
                </div>
                <div
                    className="cart__point cart__point__two">
                    2,6
                </div>
                <div className="mart__point__two">
                    <div className="mart__point__left">
                        <a className={`point__box ${selectedEvent === 'over' ? 'pointBoxSelected' : ''}`} onClick={() => handleEventClick('over')}  href="URL:void(0)">2.05</a>
                        <a className={`point__box ${selectedEvent === 'under' ? 'pointBoxSelected' : ''}`} onClick={() => handleEventClick('under')}  href="URL:void(0)">1.50</a>
                    </div>
                    <div className="mart__point__right">
                        <a className={`point__box ${selectedEvent === 'GG' ? 'pointBoxSelected' : ''}`} onClick={() => handleEventClick('GG')}  href="URL:void(0)">3.05</a>
                        <a className={`point__box ${selectedEvent === 'NGG' ? 'pointBoxSelected' : ''}`} onClick={() => handleEventClick('NGG')}  href="URL:void(0)">6.50</a>
                        <a className="point__box bg__none" href="URL:void(0)">
                            <i className="icon-star star"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}