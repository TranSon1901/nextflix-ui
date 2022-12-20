import Featured from '../../components/featured/Featured'
import NavBar from '../../components/navbar/Navbar'
import './Home.scss'
function Home(){
    return(
        <>
           <NavBar />
           <Featured type="movie"/>
        </>
    )
}
export default Home