import React from 'react'
import '../Styling/Projects.css';

const MediaWrangler = () => {
  return (
    <div>
      <div className='project-info-container'></div>
        <h1>Media Wrangler Application</h1>    

        <br />
        <br />

        <h4>What is Media Wrangler?</h4>
        <p>
        Media Wrangler is a full-stack movie-tracking app that helps users discover, organize, and engage with films—all in one place.</p>
        <p><b>Users can log in to:</b></p>
        <ul>
          <li>Track and rate movies</li>
          <li>Create custom watchlists</li>
          <li>Write and comment on reviews</li>
          <li>Discover where movies are streaming</li>
          <li>Stay updated on upcoming releases</li>
          <li>Connect with others in the community</li>
        </ul>

        <br />
        <br />

        <h4>Project Links</h4>
        <ul>
          <li><b>GitHub</b> — <a href="https://github.com/RBurkhardt87/media-wrangler" target="_blank" >Original Repo.</a> </li>
          <li><b>GitHub</b> — <a href="https://github.com/RBurkhardt87/media-wrangler-expand" target='_blank'>Expansion Repo</a> </li>
          <li><b>Project Demo Video</b> — </li>
          <li><b> Full Project Presentation</b> — <a href="https://docs.google.com/presentation/d/1Q6HOewM0bPnU61V9ypXlkjknPRM4q6VMtil-CI6yPhs/present" target="_blank" >Media Wrangler Slideshow</a></li>
        </ul>

        <br />
        <br />

        <h4>Why We Built It:</h4>
        <p>The idea behind Media Wrangler stemmed from a common frustration: finding comprehensive and reliable movie information often requires visiting multiple sites. Whether you're trying to locate where a movie is streaming, learn about upcoming releases, or keep track of films you want to watch, the process can feel fragmented and time-consuming. Media Wrangler solves this by offering a one-stop shop for movie enthusiasts. 
        </p>
        <p><b>Our goals were to: </b></p>
        <ul>
          <li>Simplify movie discovery</li>
          <li>Help users manage their watch habits</li>
          <li>Encourage connection through shared opinions and recommendations</li>
        </ul>

        <br />
        <br />

        <h4>Tech Stack:</h4>        
        <p><b>Backend: </b>Java, Spring Boot, Hibernate, MySQL</p>        
        <p><b>Frontend: </b>React, Material-UI (MUI), Formik</p>        
        <p><b>External API: </b>The Movie Database (TMDB)</p>

        <br />
        <br />

        <h4>Core Features:</h4>
        <ul>
          <li>User authentication and account management</li>
          <li>Movie search with streaming info</li>
          <li>Create custom lists (e.g., Favorites, Watchlist)</li>
          <li>Write, like, and comment on reviews</li>
          <li>Journal of all user reviews (with the ability to edit and delete reviews)</li>
          <li>Random movie generator </li>
          <li>Track upcoming releases with calendar integration</li>
          <li>Community discussion board</li>
        </ul>

        <br />
        <br />

        <h4>UI Highlights: </h4>
        <p>Include a few select screenshots here with a short caption per image </p>
        <ul>
          <li>Movie Details Page: this will include the api data being returned, the user interaction card</li>
          <li>Review Form: Shows the movie review form and all its fields </li>
          <li>Movie Reviews: show users commenting and responding on each others movie reviews </li>
        </ul>

        <br />
        <br />

        <h4>Database Schema: </h4>
        <p>Include 1 screenshot/diagram of the main tables (Users, Movies, Reviews, Lists, etc.) or a summary of your schema.</p>

        <br />
        <br />

        <h4>Planning & Process: </h4>
        <p>Since I don't have a public project board for the project -- I can add the two user stories #15 and #18. It will have the user stories written beside and screenshot of the project task. </p>

        <br />
        <br />
  
        <h4>Future Improvements</h4>
        <p>Media Wrangler, although functional, is still a work in progress. We discussed furthering the application's features such as: </p>
        <ul>
          <li>Expand the calendar feature to include Google Calendar</li>
          <li>Add more media options like tv shows with episode progress feature</li>
          <li>Add social feature including friends and follow</li>
          <li>Implement local showtimes and ticket booking</li>
          <li>Monetize links to streaming platforms</li>
          <li>Replace sessions with JWT for better security and scalability</li>
        </ul>
        <p>Since launch, I've expanded movie review threads so users can now directly reply to specific comments rather than seeing one long discussion thread.</p>

        <br />
        <br />
        
        <h4>Final Thoughts: </h4>
        <p>Media Wrangler reflects how far I've come in full-stack development—from backend architecture to thoughtful UI design to user engagement. It also demonstrates how collaboration and planning (especially in group projects) elevate functionality and experience.</p>

        <br />
        <br />

        <p><b>Back to </b><a href="/projects">Project List</a></p>     
    </div>
  )
}

export default MediaWrangler
