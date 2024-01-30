import landingPageImg from '../assets/img-folder/layer-img.png'
import'./landingPage.css'
const LandingPage = () => {
  return (
    <>
      <div className='landingPageImg'>
        <img className=' w-full ' src={landingPageImg} alt="" />
      </div>
    </>
  )
}

export default LandingPage