import '../styles/Footer.css'
import instagram from '../assets/socials/instagram.png'
import linkedIn from '../assets/socials/linkedin.png'
import github from '../assets/socials/github.png'

function Footer(){
    return (
        <footer className="footer">
            <h2 className='socials'>Socials: </h2>
            <a href='https://www.instagram.com/siya.t_21/' target='/blank'><img src={instagram} width='50px' height='50px' className='instagram'></img></a>
            <a href='https://www.linkedin.com/in/siyamthanda-twalamatye-b17a31257/?trk=li_LOL_SPIN_global_careers_jobsgtm_conv_acq_july2022_spinv1' target='/blank'><img src={linkedIn} width='50px' height='50px' className='linkedIn'></img></a>
            <a href='https://github.com/dashboard' target='/blank'><img src={github} width='50px' height='50px' className='github'></img></a>
        </footer>
    )
}
export default Footer