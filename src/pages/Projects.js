
import projects  from '../projects.json';

export const Projects = () => {

    return (
        <div className="auto-mx">

       


            <div class="card text-center">
                <div class="card-header">
                    <h1>Web Projects</h1>
                </div>
                {projects.filter((project) => project.category === "Web").map((proj) =>

                    <div class="card-body">
                        <h5 class="card-title">{proj.name}</h5>
                        <p class="card-text">{proj.description}</p>
                        <p class="card-caption"><b>Technologies: </b>{proj.Technologies}</p>
                        <a href={proj.Url} class="btn btn-primary">Source Code</a>
                    </div>



                )}
            </div>

            <br></br>


            <div class="card text-center pt-3">
                <div class="card-header">
                    <h1>Test Automation Projects</h1>
                </div>
            {projects.filter((project) => project.category === "Test").map((proj) =>

                    <div class="card-body">
                    <h5 class="card-title">{proj.name}</h5>
                    <p class="card-text">{proj.description}</p>
                    <p class="card-caption"><b>Technologies: </b>{proj.Technologies}</p>
                    <a href={proj.Url} class="btn btn-primary">Source Code</a>
                    </div>
               

                
                )}
            </div>



        </div>
        );
}