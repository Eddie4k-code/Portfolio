import { AboutMe } from "../components/AboutMe";
import { WelcomeContainer } from "../components/WelcomeContainer"
import './css/homepage.css';

export const Homepage = () => {
    return (


        <div className="container">

            <div className="container">

                <WelcomeContainer id="welcome-container" />

            </div>


            <div className="container">

                <AboutMe />

            </div>
            

        </div>




    );
}