import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import {useRouter} from "next/dist/client/router"
import {format } from "date-fns";
import SearchResult from "../components/searchResults/SearchResult";
function search({searchResults}) {
    const buttons = [
        'Cancellation Flexablilty ',
        'Types Of Price' ,
        'Price' , 
        'Rooms and Books' ,
        'More Filters'
    ]
    const router = useRouter()
    const {location ,startDate , endDate , numberofGuests} = router.query
    const formatedStartDate = 
    format(new Date(startDate), 'MM/dd/yyyy')
    const formatedtEndDate = 
    format(new Date(endDate), 'MM/dd/yyyy')
    const range  = `${formatedStartDate}  - ${formatedtEndDate} `
    return ( 
        <div>
        <Header/>
        <main className="flex">
       <section className = "flex-grow pt-14 px-6" >
           <p className="text-xs" > 300 + staus in {range} for {numberofGuests}  </p>
           <h1 className="text-3xl font-semibold mt-2 mb-6 "> stays in {location} </h1>
           <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
           {
               buttons.map((btn)=>{
                   return(
                         <p className=" button"> {btn} </p>
                   )
               })
           }
           </div>
           <div >
           <SearchResult  results = {searchResults} />

           </div>
       </section>
        </main>
        <Footer />
        </div>
    )

}

export default search
// build this page on every request  ==> perfect when data will be changed dynamically
export async function getServerSideProps() {
    const searchResults = await fetch ('https://links.papareact.com/isz').then(res=>res.json());
    return {
        props: {
            searchResults,
        },
    }
}