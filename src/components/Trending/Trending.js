import React, { useEffect, useState } from 'react';
import SneakerSearchForm from '../../components/Sneakers/SneakerSearch/SneakerSearchForm';
import SneakersCard from '../../components/SneakersCard/SneakersCard';
import { getUser } from '../../utilities/users-service';
// export default function SneakerCard ({
//     sneakers
// }) {
//     if (sneakers) {
//         console.log(sneakers)
//     }
//     if (!sneakers) {
//     return (
//         <h2>Looking for trending shoes...</h2>
//     )}
//     return (
//         <div>
//         {sneakers.map(sneaker => {
//             return (
//         <div>
//             <img src={sneaker.thumbnail}/>
// 			<div className="sneaker-card">
// 				<h2>Shoe: {sneaker.shoeName}</h2>
// 				<h2>Brand: {sneaker.brand}</h2>
// 				<h3>Colorway: {sneaker.colorway}</h3>
// 				<h3>Retail Price: {sneaker.retailPrice}</h3>
// 				<h4>Release Date:: {sneaker.releaseDate}</h4>
// 				<h4>Description: {sneaker.description}</h4>
                
// 			</div>
// 		</div>
//         )
//         })}
//         </div>

//     )
// }



export default function App() {
    const [sneakers, setSneakers] = useState(null)
    const [user, setUser] = useState(getUser());


    useEffect(function() {
        console.log('Trending rendered');
    });


    return (
    
        <button onClick={setMenuItems}>Trigger re-render</button>
        )
    }
