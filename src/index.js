import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data.js";
import pizzaFullData from "./fullData";
function App(){
  return (<div className="container">
       <Header />
       <Menu />
       <Footer />
       <Description />
       
    </div>);
}
function Header(){
  // const style = {color:'blue' , fontSize:"48px"};
  const style = {};
  return <div className="header">
      <h1 style={style}>Berojghar Pizza Hunt</h1>
  </div> 
}

function Menu(){
  const pizzas = pizzaData;
  // const pizzas =[];
      const numPizzas = pizzas.length;
  return <main className="menu">
    <h2>Our Menu </h2>
    {
      (numPizzas>0)? (
        <>

        <p>Hello its your Berojghar chef,Currently We have 6 Dishes which one you like to ORDER</p>
      <ul className="pizzas">
      {/* If pizza exist then show that pizza or if not then don't */}

      {pizzaData.map(pizzaEle => <Pizza pizzaObj={pizzaEle} key={pizzaEle.name}/>)}  
       
      {/* key is unique  */}
      </ul>
      </>
      ) : <p> Sorry, No Pizzas Left! We are Working on that. Please visit later!!!</p>
        
    }

    {/* {pizzaData.map(pizzaEle => <Pizza name={pizzaEle.name} photoName={pizzaEle.photoName} 
    ingredients={pizzaEle.ingredients} price={pizzaEle.price}/>)} */}

    {/* < Pizza 
    name=" Pizza Salamino"
    ingredients = "Tomato, mozarella, and pepperoni"
    price = {15}
    photoName= "pizzas/salamino.jpg" />
    <Pizza 
     name= "Pizza Margherita"
     ingredients= "Tomato and mozarella"
     price= {10}
     photoName= "pizzas/margherita.jpg"
    /> */}
     
  </main>
}

function Pizza({pizzaObj}) {
  return (

  <li className={(pizzaObj.soldOut)? "pizza sold-out" : "pizza"}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name} / >
      <div>
    <h3>{pizzaObj.name}</h3>
    <p>{pizzaObj.ingredients}</p>
    <span> 
      {(pizzaObj.soldOut)? "SOLD OUT" : "$"+ pizzaObj.price}
      </span>
      </div>
  </li>);
}

function Footer(){
  const hours = new Date().getHours();
  const openHour = 9;
  const closeHour = 19;
  const isOpen = openHour<= hours && closeHour >= hours;

  
  return <footer className="footer">
    {
      (isOpen)?(
        <Open closeHour={closeHour} />
      ) : (
        <div className="order">
        <p>Sorry, We're Closed Now! or Order ONLINE</p>
        <button className="btn">Order</button>
        </div>
      )
    }
    {/* {isOpen && (
      <div className="order">
    <p>We're currently Opened.Please visit Before {closeHour}:00 or Order ONLINE</p>
    <button className="btn">Order</button>
    </div>)
    }
    {
      !(isOpen) && (
        <div className="order">
        <p>Sorry, We're Closed Now! or Order ONLINE</p>
        <button className="btn">Order</button>
        </div>)
    } */}
  </footer>
}

function Open({closeHour}){
  // const {closeHour} = props;
  // console.log(closeHour);
  return <div className="order">
  <p>We're currently Opened.Please visit Before {closeHour}:00 or Order ONLINE</p>
  <button className="btn">Order</button>
  </div>
}
function Description(){
  return <div>
    {pizzaFullData.map(data => <Detail pizzaFull={data}/>)}
  </div>

}
function Detail({pizzaFull}){
  //  name: "Focaccia",
  //  ingredients: "Bread with italian olive oil and rosemary",
  //  price: 6,
  //  photoName: "pizzas/focaccia.jpg",
  //  soldOut: false,
  //  star:5,
  //  time: "35 min",
  //  description:
  return <div className={pizzaFull.soldOut? "container-full sold-out" : "container-full"}>
    <h1><strong>Name:</strong> {pizzaFull.name}</h1>
    <img src={pizzaFull.photoName} alt={pizzaFull.name} />
    <div>
    <h3><strong>Description:</strong> {pizzaFull.description}</h3>
    <h3><strong>Ingredients:</strong> {pizzaFull.ingredients}</h3>
    <h3><strong>Price:</strong> {pizzaFull.price}</h3>
    <h3><strong>Time:</strong> {pizzaFull.time}</h3>
    <h3><strong>Rating: </strong>{pizzaFull.star===1? "⭐️": pizzaFull.star===2? "⭐️⭐️":pizzaFull.star===3? "⭐️⭐️⭐️": pizzaFull.star===4? "⭐️⭐️⭐️⭐️": pizzaFull.star===5? "⭐️⭐️⭐️⭐️⭐️":"Null"}</h3>
    </div>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


