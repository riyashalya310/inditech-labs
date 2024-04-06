import { Component } from 'react'
import './index.css'
import Layout from '../Layout'
import SoldierProfile from '../SoldierProfile'
import SoldierStats from '../SoldierStats'
import LeftSideBar from '../LeftSideBar'
import soldierImg from '../../images/soldier__pic.png'
import dogImage from '../../images/Celebration_Dog_Tag.png'
import bgImage from '../../images/multiplayer__select-image-w.png'

class Soldier extends Component {
    state = {
        currentNav: '',
        hoverSideBar: false
    }

    onChangeCurrentNav = (id) => {
        this.setState({ currentNav: id })
    }

    onDisplayFullProfile = () => {
        this.setState(prevState => ({ hoverSideBar: !prevState.hoverSideBar }))
    }

    render() {
        const { currentNav, hoverSideBar } = this.state
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className=''>
                        <div className='outer-container col-12'>
                            <div className='leftsidebar col-2'>
                                <LeftSideBar />
                                <img src={dogImage} className='dogImage' alt="" />
                            </div>
                            <div className='horizontalLine col-4'>
                                <img src={soldierImg} className='soldierImage' alt="" />
                            </div>
                            <div className='container col-4'>
                                <Layout currentNav={currentNav} onChangeCurrentNav={this.onChangeCurrentNav} />
                                <SoldierStats />
                            </div>
                            <div className='soldierProfile col-2'>
                                <SoldierProfile hoverSideBar={hoverSideBar} onDisplayFullProfile={this.onDisplayFullProfile} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Soldier