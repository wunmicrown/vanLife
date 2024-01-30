import landing from "../assets/img-folder/layerbg.png"
import "../Component/landingPage.css"
const LandingPage = () => {
  return (
    <>
      <div className="landing" style={{backgroundImage:`url(${landing})`,  backgroundSize:"cover", backgroundPosition:"center"}}>
        
      </div>
    </>
  )
}

export default LandingPage