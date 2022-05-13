export default function AboutPage ({
    sneakers
}) {
    if (sneakers) {
        console.log(sneakers)
    }
    if (!sneakers) {
    return (
        <h2>Loading..</h2>
    )}
    return (
        <div>
        <h1> About Page</h1>
        {/* <h2>{sneaker[0].brand}</h2> */}
        {sneakers.map(sneaker => {
            return (
        <div>
            <img src={sneaker.thumbnail}/>
			<div className="sneaker-card">
				<h2>Shoe: {sneaker.shoeName}</h2>
				<h2>Brand: {sneaker.brand}</h2>
				<h3>Colorway: {sneaker.colorway}</h3>
				<h3>Retail Price: {sneaker.retailPrice}</h3>
				<h4>releaseDate:: {sneaker.releaseDate}</h4>
				<h4>Description: {sneaker.description}</h4>
				<h4>Where to find them: </h4>
                <h4> Stock X: {sneaker.resellLinks.stockX}</h4>
                <h4> Flight Club:{sneaker.resellLinks.flightClub} </h4>
                <h4> Goat: {sneaker.resellLinks.goat}</h4>
                
			</div>
		</div>
        )
        })}
        </div>

    )
}