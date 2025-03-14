import Header from './Header'
import Sidebar from './Sidebar'
import './Home.css'
const Home=()=>{
    return(
        <div>
            <Header/>
            <div className='home-container d-flex  w-100 min-vh-100' >
                <Sidebar  style={{width:'30vw'}} />
                <div className='main-container d-flex flex-column     p-5 '>
                    <h1 className='heading text-center' >Welcome to JALA Academy</h1>
                    <p className='para mt-4 mb-5 text-center'>The world's best up-skilling academy</p>
                    <p className='mt-4 academy-info'>Do you want to learn Selenium/cucumber Automation completely with Practical Scenarios in 7 Days? Use this website to find all the scenarios at one place.

                    To understand or test RESTful APIs, use the JALA Academy FREE live APIs. Seach on Google with the keyword "JALA Academy Postman APIs"</p>
                    <div className='bg-white mt-3 card-container ' >
                        <p className='jala mt-3'>
                    You learn Everything by doing projects if you are very serious to gat a software job in 90 days <a style={{textDecoration:'none'}} target='_blank' href='http://jalatechnologies.com'>http://jalatechnologies.com</a>  <br></br>

                    Don't forget to read our website JALA Academy completley to know more opportunities
                        </p>
                    </div>
                    <div className='bg-white mt-3 card-container mb-3'>
                        <p className='yellow mt-3'>If you are a working professional, Up-skill with JALA Academy Job Guarantee Programs to keep your Job secure for 10 Years</p>
                    </div>
                    <footer className='footer'>
                    Copyright © 2025 <a style={{textDecoration:'none'}} target='_blank' href='http://jalatechnologies.com'> <span className='blue'>JALA Technologies</span></a>. All rights reserved.
                    </footer>
                    </div>
            </div>
        </div>
    )
}
export default Home