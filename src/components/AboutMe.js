import { FcAbout } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc"
import Resume from './Resume.'


export const AboutMe = () => {
    

    return (


        <div className="container">

            <div className="card">


                <div className="card-body bg-dark">
                    <h1 className="card-header border-light">About Me {<FcAbout />}  </h1>

                    <p className="card-text">
                        Welcome to my software development portfolio! My name is Edward O'Connor and I am currently a student at the University at Buffalo, set to graduate in June 2023 with a Bachelor's in Business Administration and a concentration in Management Information Systems (MIS).
                    </p>

                    <br></br>

                    <p>
                        As a student concentrating in Management Information Systems (MIS), I have gained a comprehensive understanding of various IT-related topics such as cloud computing, IT project management, systems analysis and design, and databases. These courses have equipped me with the knowledge and skills required to excel in the field of technology.
                    </p>

                    <br></br>

                    <p>
                        Additionally, while I pursue my Bachelor's, I have been fortunate enough to gain hands-on experience in working with an Agile Software Development Team through an internship. I have worked as an IT intern, where I gained experience in automation testing and working in a automation framework using Java, Selenium, and TestNG.
                    </p>

                    <br></br>

                    <p>
                        In addition to automation, I have a passion for creating websites. During my free time, I have been building websites to showcase my skills and to experiment with new technologies.
                    </p>
                    <br></br>
                    <p> I am excited to continue my journey in the software development industry and to learn from experienced professionals. I hope to bring my unique combination of business and technical knowledge to any team I work with in the future. Thank you for visiting my portfolio and please feel free to contact me for any opportunities or collaborations.</p>

                </div>


            </div>

            <div className="card">


                <div className="card-body bg-dark">
                    <h1 className="card-header border-light">Resume {<FcBusinessman />}  </h1>
                    <div className="">
                        <iframe className="embed-responsive-item" src='https://onedrive.live.com/embed?cid=782EBCDEC263330C&amp;resid=782ebcdec263330c%21266&amp;authkey=AMmwmopdAZrtl9I&amp;em=2' width='100%' height='650px' frameborder='0'></iframe>
                        <embed src={Resume} width="500" height="700" type='application/pdf'
                            toolbar="true"
                            scrollbar="true"
                            zoom="75%">
                        </embed>
                    </div>
                </div>


            </div>
       

        </div>
           


    );
}