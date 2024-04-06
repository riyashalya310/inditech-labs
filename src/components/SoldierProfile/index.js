import './index.css'
import normal from "../../images/rightside-images/Off. + On..png"

const SoldierProfile=(props)=>{
    const {hoverSideBar,onDisplayFullProfile}=props
    return(
        <div>
            <img className='image' src={normal} alt="Profile" onClick={()=>{onDisplayFullProfile()}}/>
        </div>
    )
}
export default SoldierProfile
