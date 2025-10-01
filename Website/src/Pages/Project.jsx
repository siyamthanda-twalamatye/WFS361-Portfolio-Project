import '../styles/Project.css'
import Image1 from '../assets/projects/Screenshot 2025-04-28 195022.png';
import Image2 from '../assets/projects/Screenshot 2025-04-28 195446.png';
import Image3 from '../assets/projects/Screenshot 2025-04-28 195836.png';

function Project(){

    return(
        <section className="projectPage">

            <h1 className='projectTitle2'>Project2</h1>
            <img src={Image1} alt='Image1' width='350px' height='200px' className='image2'></img>
            <p className='projectDescription1'>
                As part of a team project, I helped develop a desktop-based ordering system aimed at improving the food ordering process for students and staff on campus.
                The application allows for user registration (student or lecturer), secure login, menu browsing, and order placement.
                 My role included designing the user interface with Java Swing, implementing the registration and login workflows, and integrating with a backend database to store user and order information.
                 This project emphasized collaborative development, user experience design, and secure data handling using JDBC and Apache Derby.
            </p>

            <h1 className='proH1'>Projects</h1>
            <h1 className='projectTitle1'>Project1</h1>
            <img src={Image2} alt='Image1' width='350px' height='200px' className='image1'></img>
            <p className='projectDescription2'>
                 A dynamic and user-friendly web application designed to help users explore and create recipes based on available ingredients.
                 The application features an intuitive ingredient input form, intelligent recipe matching logic, and clear step-by-step cooking instructions.
                 Built using modern web development tools (HTML, CSS, JavaScript, and React), this project demonstrates my ability to implement responsive design principles, manage state using React hooks, and fetch and display data from a structured dataset or API.
                 The goal was to enhance the cooking experience for users by offering personalized recipe suggestions based on real-time inputs.
            </p>
            
            <h1 className='projectTitle3'>Project3</h1>
            <img src={Image3} alt='Image1' width='350px' height='200px' className='image3'></img>
            <p className='projectDescription3'>
                 A web-based system developed to streamline the process of managing gym memberships.
                New users can register and existing members can log in to access their accounts. The platform connects to a backend database that securely stores member data and login credentials.
                The system was developed using HTML, CSS, JavaScript, and PHP, with a MySQL database for backend operations.
                This project demonstrates my full-stack development skills, including user authentication, database integration, and front-end/back-end communication.
                Special attention was given to form validation, database security, and maintaining a clean, responsive UI for all user interactions.
             </p>
    </section>
    )
}
export default Project