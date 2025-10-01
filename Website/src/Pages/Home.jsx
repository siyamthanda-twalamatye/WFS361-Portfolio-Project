import '../styles/Home.css'
import image from '../assets/Hobbies/cropped-Screenshot 2025-04-30 153220.png'

function Home(){

    return(
        <section className="homePage">
            <img src={image} alt='image here' className='image'></img>
            <div className='intro'>
            
                <h1>Hi, i'm Siyamthanda, A Web Developer</h1>
                <p>I am a front-end Developer specializing 
                     in building <br></br>exceptional interactive websites that are User-friendly</p>
                     <a href='/Siyamthanda Twalamatye - Curriculum Vitae.pdf' target='_blank'download>
                     <button className='button'>Download CV</button>
                     </a>
            </div>
         
        </section>
    )
}
export default Home