import React from "react";
import './Home.css'

export default function Home ({
    sneakers
}) {
    return (
        <div>
        <h1> Home</h1>
        <h3> Show your Watch list</h3>
        <img classId='jrd1'  src='https://i.imgur.com/nQlttpw.jpg'></img>
        <h2> 1. The Jordan 1 Swoosh Effect</h2>
       <p><h4>In 2022, we saw an incredible number of Jordan 1s experience huge gains in resale value.
            It wasn’t just the big, flashy collabs: numerous Jordan 1s saw their values climb from barely above retail to resale royalty almost overnight. This chart shows how much Jordan 1s appreciate over time. We gathered the current resale prices of the top 50 most popular Jordan 1 releases on StockX and compared them to their release-week resale averages. We then calculated how many days the sneaker has been on the market. The resulting chart shows the relationship between price appreciation and time. Each dot represents a different release, and the outliers are noted with images of the sneaker.
            Notice how before the 125-day mark, Jordan 1 resale prices hold steady, bobbing right around their baseline release price. Then, as each release ages past four months, we start to notice significant price increases. This pattern can be explained by what we call the “Swoosh Effect.” Typically in the first months after a release, supply floods the market, and resale prices hold steady or even dip. Then, as more pairs are sold and leave the market, supply diminishes and increasing demand pushes resale prices higher. On a chart, it looks like a Swoosh. And in 2020, when demand for Jordans peaked, we saw the Swoosh Effect accelerate across the Jordan 1 market.</h4></p> 
        <h3></h3>
        <img classId='yzy'  src='https://i.imgur.com/Da5leqY.jpg'></img>
        <h2>The Yeezy Restock Effect</h2>
        <h4> The December restock of the Yeezy 350 V2 Black Red showed, once again, how restocks can tank resale prices. News of an initial restock can have a devastating effect on prices, as the anticipation of new supply undermines value. But there is some good news for repeat restocks: they aren’t as severe. The chart above shows the average price depreciation of primary and secondary Yeezy restocks. Across all the models in our sample, primary results resulted in a 29% decline in average resale price. But secondary restocks (which include both 2nd and 3rd restocks of the same colorway) result in a median price decline of just 17%. So, if and when the Bred 350 restocks for a second time, chances are that prices won’t fall quite so far.</h4>
        <img classId='trv'  src='https://i.imgur.com/MdaOk64.jpg'></img>
        <h2>Air Forces To Be Reckoned With</h2>
        <h4>Much like the year before it, 2020 belonged to Travis Scott. But while all eyes were on his collaborations with brands like McDonald’s and PlayStation, many of his sneakers were seeing enormous gains in resale value. This chart shows the 1-year increase in resale value for a variety of Travis Scott sneakers. As it turns out, it wasn’t his $1500 Jordan 1 High that saw the biggest gains. That honor belonged to his Air Force 1s, which were the fastest-appreciating Travis Scott silhouette on the market – at least after one year. Travis AF1 releases climbed by over $240 on average in the year following their release, and his Air Force 1 Sail gained over $500 in resale value.</h4>
        <img classId='footer'  src='https://i.imgur.com/r3cy65z.png'></img>
        </div>

    )
}