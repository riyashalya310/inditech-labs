import './index.css'
import grenade from "../../images/home__level-icon.png"
import stat1 from "../../images/profile-stats/Default.png"
import stat2 from "../../images/profile-stats/Default-1.png"
import stat3 from "../../images/profile-stats/Default-2.png"
import stat4 from "../../images/profile-stats/Default-3.png"
import stat5 from "../../images/profile-stats/Default-4.png"
import stat6 from "../../images/profile-stats/Default-5.png"
import stat7 from "../../images/profile-stats/Default-6.png"
import vehicleNormal from "../../images/guns/normal/vehicle.png"
import primaryNormal from "../../images/guns/normal/Primary.png"
import classNormal from "../../images/guns/normal/Class.png"
import sidearmNormal from "../../images/guns/normal/Sidearm.png"

const SoldierStats = (props) => {
    const { } = props
    return (
        <div className='vertical-center sizing'>
            <div className='horizontal-center'>
                <img src={grenade} className='grenade' alt='Grenade' />
                <div className='vertical'>
                    <p className='cookie'>Cookie</p>
                    <p className='horizontal-para'><span className='span-num'>63</span> 69,840 / 110,000 - <span className='span'> Estimated rank up in 1h</span></p>
                </div>
            </div>
            <div className='horizontal-center margin-top'>
                <div className='vertical padding-right'>
                    <img src={stat1} className='image1' alt='' />
                    <img src={stat2} className='image1' alt='' />
                    <img src={stat3} className='image1' alt='' />
                    <img src={stat4} className='image1' alt='' />
                    <img src={stat5} className='image1' alt='' />
                    <img src={stat6} className='image1' alt='' />
                    <img src={stat7} className='image1' alt='' />
                </div>
                <div className='vertical'>
                    <div className='horizontal-center'>
                        <div className='vertical-center'>
                            <p>WINS</p>
                            <p>44%</p>
                        </div>
                        <div className='vertical-center item-spacing'>
                            <p>SCORE/MIN</p>
                            <p>592</p>
                        </div>
                        <div className='vertical-center'>
                            <p>KILLS/MIN</p>
                            <p>0.60</p>
                        </div>
                    </div>
                    <div className='verticalGuns'>
                        <div className='horizontalGuns'>
                            <img src={vehicleNormal} id='verticalGuns' className='image2' alt='' />
                            <img src={primaryNormal} id='primaryGuns' className='image2' alt='' />
                        </div>
                        <div className='horizontalGuns'>
                            <img src={classNormal} id='classGuns' className='image2' alt='' />
                            <img src={sidearmNormal} id='horizontalGuns' className='image2' alt='' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SoldierStats
