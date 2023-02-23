
import projects  from '../projects.json';

export const Projects = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-dark text-white mb-4">
                        <div className="card-header"><h1>Web Projects</h1></div>
                        <div className="card-body">
                            {projects.filter((project) => project.category === "Web").map((proj) =>
                                <div key={proj.id} className="card bg-black border border-secondary border-2 mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{proj.name}</h5>
                                        <p className="card-text">{proj.description}</p>
                                        <p className="card-caption"><b>Language: </b>{proj.Language}</p>
                                        <p className="card-caption"><b>Technologies: </b>{proj.Technologies}</p>
                                        {proj.imageUrl && <img className="card-img-top img-fluid" src={proj.imageUrl} alt="Project screenshot" />}
                                        <a href={proj.Url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Source Code</a>
                                        {proj.isLive && <a href={proj.isLive} className="btn btn-outline-primary ml-3" target="_blank" rel="noopener noreferrer">View Live</a>}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card bg-dark text-white mb-4">
                        <div className="card-header"><h1>Test Automation Projects</h1></div>
                        <div className="card-body">
                            {projects.filter((project) => project.category === "Test").map((proj) =>
                                <div key={proj.id} className="card bg-black border border-secondary border-2 mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{proj.name}</h5>
                                        <p className="card-text">{proj.description}</p>
                                        <p className="card-caption"><b>Language: </b>{proj.Language}</p>
                                        <p className="card-caption"><b>Technologies: </b>{proj.Technologies}</p>
                                        <a href={proj.Url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Source Code</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}