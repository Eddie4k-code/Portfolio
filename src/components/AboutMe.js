import { FcAbout } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc"
export const AboutMe = () => {
    return (



        <div className="container">

            <div className="card">


                <div className="card-body bg-dark">
                    <h1 className="card-header border-light">About Me {<FcAbout />}  </h1>

                    <p className="card-text"> I am a highly motivated individual who has a true passion for computer programming and innovation.
                        I was first introduced to Programming in high school where I had taken a beginner class this is where it all started.
                    </p>

                    <p>Since then I have learned new programming languages such as Java, JavaScript, and Python. I now spend my free time studying these languages and working on projects so that I can
                        continue to keep learning and advancing in computer programming. 
                    </p>

                </div>


            </div>

            <div className="card">


                <div className="card-body bg-dark">
                    <h1 className="card-header border-light">Experience {<FcBusinessman />}  </h1>
                   
                    
                </div>


            </div>
       

        </div>
           


    );
}