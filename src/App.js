// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Burger from "./components/Burger";
import Builder from "./components/Builder";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import axios from "axios";

// function App() {
//   const [ingredients, setIngredients] = useState([]);
//   const [orderIngredients, setOrderIngredients] = useState({
//     salad: 0,
//     bacon: 0,
//     cheese: 0,
//     meat: 0,
//   });
//   useEffect(() => {
//     getData();
//   },[]);

//   const getData = async () => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     // fetch("https://jsonplaceholder.typicode.com/todos/1")
//     //   .then((response) => response.json())
//     //   .then((json) => console.log(json));
//   };

//   // const router = createBrowserRouter([{ path: "/login", element: <Login /> }]);

//   return (
//     <>
//       <div className="body">
//         <Navbar />
//         <Burger ingredients={ingredients} orderIngredients={orderIngredients} />
//         <Builder
//           setIngredients={setIngredients}
//           setOrderIngredients={setOrderIngredients}
//         />
//       </div>
//     </>
//   );
// }

// export default App;

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [orderIngredients, setOrderIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };

  // const router = createBrowserRouter([{ path: "/login", element: <Login /> }]);
  return (
    <>
      <div className="body">
        <Navbar />
        <Burger ingredients={ingredients} orderIngredients={orderIngredients} />
        <Builder
          setIngredients={setIngredients}
          setOrderIngredients={setOrderIngredients}
        />
      </div>
    </>
  );
};

export default App;
