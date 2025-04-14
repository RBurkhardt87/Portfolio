import React from 'react'
import ProjectCard from '../components/ProjectCard';
import '../Styling/Projects.css';




const projectsList = [
  {
    coverImage: "/images/modern-nature-watercolor-background.jpg",
    altName: "demo cover image 1",
    title: "Demo Project Card 1",
    description: "Just setting up the layout",
    projectLink: "/media-wrangler"
  },
  {
    coverImage: "/images/sea-landscape-with-digital-art-style.jpg",
    altName: "demo cover image 2",
    title: "demo project card 2",
    description: "checking out the map function",
    projectLink: "/breastfeeding-app"
  },
  {
    coverImage: "/images/sky-landscape-digital-art-style-with-moon.jpg",
    altName: "demo cover image 3",
    title: "demo project card 3",
    description: "another description",
    projectLink: "/wish-list"
  },

]

const ProjectList = () => {
  return (
    <div>      
      <h1> Project List </h1>
      <div className='project-cards-container'> 
      
        {projectsList.map(function(project) {
          return (
            <div key={project.id}>
            <ProjectCard 
              coverImage={ project.coverImage }
              altName={ project.altName}
              title={ project.title } 
              description={ project.description } 
              projectLink={ project.projectLink }
            />
            <br />
            </div>          
          )
        })}
      </div>

      <p>View my very first <a href='https://rburkhardt87.github.io/HTML-Me-Something-Start/' target="_blank">HTML Project</a> to see how far I have come</p>            
      
    </div>
  )
}

export default ProjectList


