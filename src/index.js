import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App(){
  return (<div className="container">
       <Header />
       <Menu />
       <Footer />
       
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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

