import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress"
import Router from "next/router"
const prgoress = new ProgressBar({
    size:7,
    color: "#FE595E",
    className: "z-50",
    delay:100,
}) ;
Router.events.on('routeChangeStart' , prgoress.start);
Router.events.on('routeChangeComplete', prgoress.finish)
Router.events.on('routeChangeError', prgoress.finish)

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />
}

export default MyApp