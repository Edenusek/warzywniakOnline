// import React, { createContext, useState, useContext } from "react";

// const BoxContext = createContext({
//  cart: [],
//  addToCart: () => {}
// });

// export const BoxProvider = (props) => {
//     const [cart, setCart] = useState([])

//     const addToCart = (selectedBox) => {
//         setCart((prevCart) => {
//             const newCart = [...prevCart, selectedBox];
//             console.log(newCart)
//             return newCart
//         })
//     };

//     return (
//         <BoxContext.Provider value={{cart, addToCart}}>
//             {props.children}
//         </BoxContext.Provider>
//     )
// }

// export default BoxContext;
