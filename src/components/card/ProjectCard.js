import "./ProjectCard.css"
import { urlFor } from "../../client"
import { AiFillGithub } from "react-icons/ai"
import { SiNetlify } from "react-icons/si"

const ProjectCard = ({ project }) => {
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str
  }
  return (
    <>
      s
      <div className="card">
        <div className="card-img-container" data-tootip={project.title}>
          <img src={urlFor(project.imgUrl)} alt={project.title} />
        </div>

        <div className="card-body">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-desc">{truncate(project.description, 40)}</p>
          <div className="card-footer">
            <div className="card-links">
              <a
                href={project.codeLink}
                rel=" noopener noreferrer"
                target="_black"
                className="link"
              >
                <AiFillGithub />
              </a>
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="link"
                >
                  <SiNetlify />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
