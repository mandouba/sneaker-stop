import React, {useState} from "react";
import SneakersCard from '../../SneakersCard/SneakersCard'


export default function SneakerSearchForm({ setSneakers, sneakers}) {

    const [shoeName, setShoeName ] = useState('')

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
          const response = await fetch('http://localhost:3000/api/sneakers/'+ shoeName)
          const data = await response.json()
          console.log(data)
          setSneakers(data)
        } catch (error) {
        console.log('error')  
        }
      }
      function handleChange(evt){
          setShoeName(evt.target.value)
      }
    return (
    <>
		<form onSubmit={handleSubmit}>
			<label htmlFor="shoeName" className="label"></label>
			<input
				placeholder="Search"
				type="text"
				name={shoeName}
				required
				onChange={handleChange}
				value={shoeName}
				className="search-bar"
			/>
			<button type="submit" className="form-button">
			Search
			</button>
		</form>
        <SneakersCard sneakers={sneakers} />
    <img classId='footer'  src='https://i.imgur.com/r3cy65z.png'></img>
        </>
	);
}
