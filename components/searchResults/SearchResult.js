import InfoCard from "../card/InfoCard"
function SearchResult({results}) {
    console.log(results , "res");
    return (
        <div className="flex flex-col">
            {results.map(({img , location , title , description , star , price , total})=> (
                <div >
                <InfoCard 
                 img = {img} loc = {location} title = {title} desc = {description} star = {star} price = {price} total = {total}
                />
                </div>
            ))}
        </div>
    )
}

export default SearchResult