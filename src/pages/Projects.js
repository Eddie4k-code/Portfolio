
import projects  from '../projects.json';

export const Projects = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div class="card bg-black">
                        <div class="card-header">
                            <h1>Web Projects</h1>
                        </div>
                        <div class="card-body">
                            {projects.filter((project) => project.category === "Web").map((proj) =>
                                <div className="bg-black border border- border-2 pt-4">
                                    <h5 class="card-title">{proj.name}</h5>
                                    <p class="card-text">{proj.description}</p>
                                    <p class="card-caption"><b>Language: </b>{proj.Language}</p>
                                    <p class="card-caption"><b>Technologies: </b>{proj.Technologies}</p>
                                    {proj.imageUrl && <img class="card-img-top img-fluid" src={proj.imageUrl} alt="Project screenshot" />}
                                    <a href={proj.Url} class="btn btn-primary">Source Code</a>
                                    <br></br>
                                    <br></br>
                                    {proj.isLive && <a href={proj.isLive} class="btn btn-primary">View Live</a>}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="card bg-black">
                        <div class="card-header">
                            <h1>Test Automation Projects</h1>
                        </div>
                        <div class="card-body">
                            {projects.filter((project) => project.category === "Test").map((proj) =>
                                <div className="bg-black border border- border-2 pt-4">
                                    <h5 class="card-title">{proj.name}</h5>
                                    <p class="card-text">{proj.description}</p>
                                    <p class="card-caption"><b>Language: </b>{proj.Language}</p>
                                    <p class="card-caption"><b>Technologies: </b>{proj.Technologies}</p>
                                    <a href={proj.Url} class="btn btn-primary">Source Code</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}