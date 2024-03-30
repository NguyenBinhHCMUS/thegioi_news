import NavBar from './NavBar'
import TopAds from './TopAds'
import TopBar from './TopBar'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-[999999999]'>
      <TopBar />
      <TopAds />
      <NavBar />
    </div>
  )
}

export default Header
