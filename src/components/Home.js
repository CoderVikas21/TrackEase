import React ,{useState }from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Footer from './Footer'

const Home = () => {
    const navigate = useNavigate('/getstart');
    const [progress, setProgress] = useState(0)

  return (
    <div className='home_container'>
        <LoadingBar
        color='red'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <div className="top">
            <h1><b>TrackEase</b></h1>
            <h3>Simplifying Your Financial Journey</h3>
            <div className="para">
                <div className="box">Managing your finances has never been easier. With TrackEase, you can track your expenses, monitor your spending habits, and stay on top of your budget effortlessly.</div>
                <div className="box"> Whether you're saving for a big purchase, planning for the future, or simply want to be more mindful of your spending, our intuitive expense tracker is here to help you every step of the way.</div>
                <div className="box"> Take control of your finances today and start achieving your financial goals with TrackEase and track where your money is going, identify areas for savings, and make informed financial decisions.</div>
                <div className="box">Start your journey to financial wellness today with TrackEase</div>
            
            </div>
            <h4>Happy Tracking!</h4>
        </div>
        <div className="bottom">
        <button  onClick ={()=>{
            navigate('/getstart')
        }}class="animated-button">
    <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
        <path
        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
    </svg>
    <span class="text">Let's Track</span>
    <span class="circle"></span>
    <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
        <path
        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
    </svg>
</button>

        </div>
        <Footer/>
    </div>
  )
}

export default Home
