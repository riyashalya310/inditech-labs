import './index.css'
import rectangleNormal from "../../images/side-images/light images/Battlefield 4 - Main Menu UI Design (Community)/type=BF5, State=Default.png"
import gameNormal from "../../images/side-images/light images/Battlefield 4 - Main Menu UI Design (Community)/side-menu__game.png"
import gameNormal1 from "../../images/side-images/light images/Battlefield 4 - Main Menu UI Design (Community)/side-menu__game-1.png"
import gameNormal2 from "../../images/side-images/light images/Battlefield 4 - Main Menu UI Design (Community)/side-menu__game-2.png"
import careerNormal from "../../images/side-images/light images/Battlefield 4 - Main Menu UI Design (Community)/side-menu__career.png"
import vectorNormal from "../../images/side-images/light images/Battlefield 4 - Main Menu UI Design (Community)/Vector.png"
import bsfiveNormal from "../../images/side-images/light images/Battlefield 4 - Main Menu UI Design (Community)/type=news, State=Default.png"
import logo from '../../images/logo.png'
import grenade from "../../images/home__level-icon.png"

const LeftSideBar = () => (
    <div className='horizontal leftsidebar'>
        <div className='inner-container-layout'>
            <img src={grenade} className='grenade' alt='Grenade' />
            <img src={logo} className='battleground' alt="" />
        </div>
        <div>
            <img src={rectangleNormal} id='rectangle' className='leftitem' alt="" />
            <img src={gameNormal} id='game' className='leftitem' alt="" />
            <img src={gameNormal1} id='game1' className='leftitem' alt="" />
            <img src={gameNormal2} id='game2' className='leftitem' alt="" />
            <img src={careerNormal} id='career' className='leftitem' alt="" />
            <img src={vectorNormal} id='vector' className='leftitem' alt="" />
            <img src={bsfiveNormal} id='bsfive' className='leftitem' alt="" />
        </div>
    </div>
)
export default LeftSideBar