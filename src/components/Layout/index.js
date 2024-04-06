import './index.css'
import CampaignNormal from "../../images/nav-images/normal/Campaign.png"
import homeNormal from "../../images/nav-images/normal/Home.png"
import moreNormal from "../../images/nav-images/normal/More.png"
import multimediaNormal from "../../images/nav-images/normal/Multiplayer.png"
import soldierNormal from "../../images/nav-images/normal/Soldier.png"
import storeNormal from "../../images/nav-images/normal/Store.png"
import CampaignHover from "../../images/nav-images/clicked/Campaign.png"
import homeHover from "../../images/nav-images/clicked/Home.png"
import moreHover from "../../images/nav-images/clicked/More.png"
import multimediaHover from "../../images/nav-images/clicked/Multiplayer.png"
import soldierHover from "../../images/nav-images/clicked/Soldier.png"
import storeHover from "../../images/nav-images/clicked/Store.png"

const Layout = (props) => {
    const { currentNav, onChangeCurrentNav } = props
    return (
        <div className='outerContainer'>
            <div className='innerContainer'>
                <img className='layout-item' src={currentNav === 'home' ? homeHover : homeNormal} alt="Home" id='home' onClick={() => { onChangeCurrentNav('home') }} />
                <img className='layout-item-campaign-multimedia' src={currentNav === 'multimedia' ? multimediaHover : multimediaNormal} alt="Multimedia" id='M=multimedia' onClick={() => { onChangeCurrentNav('multimedia') }} />
                <img className='layout-item-campaign-multimedia' src={currentNav === 'campaign' ? CampaignHover : CampaignNormal} alt="Campaign" id='campaign' onClick={() => { onChangeCurrentNav('campaign') }} />
                <img className='layout-item' src={currentNav === 'soldier' ? soldierHover : soldierNormal} alt="Soldier" id='soldier' onClick={() => { onChangeCurrentNav('soldier') }} />
                <img className='layout-item' src={currentNav === 'store' ? storeHover : storeNormal} alt="Store" id='store' onClick={() => { onChangeCurrentNav('store') }} />
                <img className='layout-item' src={currentNav === 'more' ? moreHover : moreNormal} alt="More" id='more' onClick={() => { onChangeCurrentNav('more') }} />
            </div>
        </div>
    )
}
export default Layout
