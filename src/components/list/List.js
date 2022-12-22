import './List.scss'
import {SlArrowRight,SlArrowLeft} from 'react-icons/sl'
import ListItem from '../listITem/ListItem'
import { useRef,useState} from 'react'

function List(){
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    console.log(slideNumber)
    const listRef=useRef()
    const hanldeClick=(direction)=>{
        if(slideNumber===1) setIsMoved(false)
       let distance= listRef.current.getBoundingClientRect().x-50
       if(direction==='left' && slideNumber>0){
           setSlideNumber(slideNumber - 1);
           listRef.current.style.transform = `translateX(${230 + distance}px)`
       }
       if(direction==='right'  && slideNumber < 4){
           setIsMoved(true)
           setSlideNumber(slideNumber + 1);
           listRef.current.style.transform = `translateX(${-230 + distance}px)`
       }
    }
    return(
        <div className="list">
            <span className="title">Continue to watch</span>
            <div className='wrapper'>
               <SlArrowLeft className='sliderArrow left'
                onClick={()=>hanldeClick('left')}
                style={{display:!isMoved&&'none'}}/>
               <div className='container' ref={listRef}>
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
               </div>
               <SlArrowRight className='sliderArrow right'
                onClick={()=>hanldeClick('right')}/>
            </div>
        </div>
    )
}
export default List