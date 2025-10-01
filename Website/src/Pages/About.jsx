import '../styles/About.css'
import reading from '../assets/Hobbies/reading-book.png'
import music from '../assets/Hobbies/enjoy.png'
import art from '../assets/Hobbies/color-palette.png'
import anime from '../assets/Hobbies/cloud.png'

function About(){
    return(
        <section className="aboutPage">
            <div className='div1'>
                <h1>Who Am I</h1>
                <p>Hi, I'm Siya, a web developer passionate about crafting interactive and user-friendly websites. 
                    I specialize in React, JavaScript, UI/UX designs, Python, and C#, ensuring seamless experiences across devices.
                     With a background in back-end and front-end development, I love bringing ideas to life through clean and efficient code. 
                     I'm always learning, growing, and looking for new challenges in the tech world.</p>
            </div>
            <div className='div2'>
                <h1>Skils</h1>
                <div className='skills-wrapper'>
                <div className='skills-column'>
                <h2>HTML <div><progress value="75" max="100"></progress></div></h2>
                <h2>CSS <div><progress value="80" max="100"></progress></div></h2>
                <h2>JavaScript <div><progress value="60" max="100"></progress></div></h2>
                <h2>REACT <div><progress value="70" max="100"></progress></div></h2>
                </div>
                <div className='skills-column'>
                <h2>Python <div><progress value="90" max="100"></progress></div></h2>
                <h2>C# <div><progress value="78" max="100"></progress></div></h2>
                <h2>Java <div><progress value="60" max="100"></progress></div></h2>
                <h2>MySQL <div><progress value="75" max="100"></progress></div></h2>
                </div>
                </div>
            </div>
            <div className='div3'>
                <h1>Hobbies:</h1>
                <h2>Reading<img src={reading} alt='book' className='bookImage'></img></h2>
                <h2>Music <img src={music} alt='music' className='musicImage'></img></h2>
                <h2>Drawing<img src={art} alt='art' className='artImage'></img></h2>
                <h2>Anime <img src={anime} alt='anime' className='animeImage'></img></h2>
            </div>
        </section>
    )

}
export default About
