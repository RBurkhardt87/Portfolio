import React from 'react'
import ProjectCard from '../components/ProjectCard';
import '../Styling/Projects.css';




const projectsList = [
  {
    coverImage: "/images/modern-nature-watercolor-background.jpg",
    altName: "media wrangler homepage picture",
    title: "Media Wrangler",
    description: "A social movie discovery and tracking application. Users can search for movies, view streaming availability, cast, genre, and more. Features include personalized movie lists, ratings, reviews, social interaction through comments, a movie generator, review journal, and a calendar to track upcoming releases.",
    projectLink: "/media-wrangler"
  },
  {
    coverImage: "/images/BegoniaBabyBreastfeeding/BBHomePageZoom.png",
    altName: "breastfeeding app homepage image",
    title: "Begonia Baby Breastfeeding",
    description: "A baby care tracker I started building as both a parent and an International Board Certified Lactation Consultant. The goal is to support new parents (and the professionals they work with) by making it easier to track things like nursing sessions, diaper changes, and sleep. The forms are super detailed—built with care to actually be useful. Right now, everything stores in a MySQL database, and I’m working toward turning that data into helpful summaries and trends. Still a work in progress, but its one Im proud of.",
    projectLink: "/breastfeeding-app"
  },
  {
    coverImage: "/images/sky-landscape-digital-art-style-with-moon.jpg",
    altName: "wishlist homepage image",
    title: "Wishlist Application",
    description: "A personal wishlist app I built for my son using Spring Boot, Thymeleaf, Hibernate, and MySQL. It features full CRUD functionality and was used in place of a traditional handwritten Christmas list. While currently simple, it inspired bigger ideas for a multi-user platform with list sharing, image uploads, gifting, and more.",
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


