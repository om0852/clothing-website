import DealOfTheDayCard from "./card/DealOfTheDayCard";

export default function DealOfTheDay(){
    return (
        <div className="product-featured">

        <h2 className="title">Deal of the day</h2>

        <div className="showcase-wrapper has-scrollbar">
<DealOfTheDayCard/>
<DealOfTheDayCard/>
<DealOfTheDayCard/>
<DealOfTheDayCard/>
  
</div>
</div>

    )
}