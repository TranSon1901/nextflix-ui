import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import NavBar from '../../components/navbar/Navbar'
import './Home.scss'
function Home(){
    return(
        <div className='home'>
           <NavBar />
           <Featured type="movie"/>
           <List />
           <List />
           <List />
        </div>
    )
}
export default Home