import './SneakersCard.css'

export default function SneakersCard ({
    sneakers,
    // handleAddToWatchList,
}) {
	// const [watchList, setWatchList] = useState('')
    if (sneakers) {
        console.log(sneakers)
    }
    if (!sneakers) {
    return (
        <h2>Looking for shoe...</h2>
    )}


// 	useEffect(function() {
// 		async function getWatchList() {
// 		  const watchList = fetch('http://localhost:3000/api/sneakers/')
// 		  setWatchList(watchList)
// 		}
// 		getWatchList()
// 	  }, []);


// 	  async function handleAddToWatchList(sneakers) {
//     const newWatchList = await fetch('http://localhost:3000/api/sneakers/'+ shoeName)
// 		setWatchList(newWatchList)
//   }


    return (
        <div>
        {sneakers.map(sneaker => {
            return (
        <div  className="details-container">
            <img className="card-img" src={sneaker.thumbnail}/>
			<div className="details">
				<h2>Shoe: {sneaker.shoeName}</h2>
				<h2>Brand: {sneaker.brand}</h2>
				<h3>Colorway: {sneaker.colorway}</h3>
				<h3>Retail Price: {sneaker.retailPrice}</h3>
				<h4>Release Date:: {sneaker.releaseDate}</h4>
				<h4>Description: {sneaker.description}</h4>
				<h4>Where to find them: </h4>
                <h4>Stock X: {sneaker.resellLinks.stockX}</h4>
                <h4>Flight Club: {sneaker.resellLinks.flightClub} </h4>
                <h4>Goat: {sneaker.resellLinks.goat}</h4>
                <button className="btn-sm">
                +  WATCH LIST
        </button>
			</div>
		</div>
        )
        })}
        </div>

    )
}
