import React from 'react'
import '../Styling/Projects.css';
import ImagePopup from '../components/ImagePopup';
import PlainListCard from '../components/PlainListCard';
import { techStack, coreFeatures, links, MWFeatures, MWLinks, MWStackItems } from '../data/ProjectData';


const MediaWrangler = () => {

  return (
    <div>      
      <section id="intro">
        <h1>Welcome to Media Wrangler</h1>

          <p>Learn about our full-stack movie-tracking app, explore the features, and dive into its technical details. Use the links below to jump to any section:</p>
          <nav className="section-nav">
            <a href="#what-and-why">The What and Why of Media Wrangler</a>
            <a href="#links-stack-features">Project Links, Tech Stack and Core Features</a>
            <a href="#database-overview">Database Overview</a>
            <a href="#planning-process">Planning & Process</a>
            <a href="#future-improvements">Future Improvements</a>
            <a href="#final-thoughts">Final Thoughts</a>
          </nav>
        </section>

        <section id="what-and-why">
          <div className='section-container'>           
              <div className='section-text'>
                <h4>What is Media Wrangler?</h4>            
                <p>Media Wrangler is a full-stack movie-tracking app that helps users discover, organize, and engage with films—all in one place.</p>
                <p><b>Users can log in to:</b></p>
                <ul>
                  <li>Track and rate movies</li>
                  <li>Create custom watchlists</li>
                  <li>Write and comment on reviews</li>
                  <li>Discover where movies are streaming</li>
                  <li>Stay updated on upcoming releases</li>
                  <li>Connect with others in the community</li>
                </ul>
              </div>
            
              <div className='section-text'>
                <h4>Why We Built It:</h4>
                <p>The idea behind Media Wrangler stemmed from a common frustration: finding comprehensive and reliable movie information often requires visiting multiple sites. Whether you're trying to locate where a movie is streaming, learn about upcoming releases, or keep track of films you want to watch, the process can feel fragmented and time-consuming. Media Wrangler solves this by offering a one-stop shop for movie enthusiasts. 
                </p>
                <p><b>Our goals were to: </b></p>
                <ul>
                  <li>Simplify movie discovery</li>
                  <li>Help users manage their watch habits</li>
                  <li>Encourage connection through shared opinions and recommendations</li>
                </ul>
              </div>          
          </div>
        </section>
        <br />
        <br />
        <br />
        
        <section id="links-stack-features">
          <div className='section-group'>        
            <PlainListCard title={ coreFeatures } items={ MWFeatures } />       
            <PlainListCard title={ techStack } items={ MWStackItems } />       
            <PlainListCard title={ links } items={ MWLinks } />          
          </div>
        </section>    

        <section id="database-overview">
        <div className='section-container'>
          <div className='section-text'>
            <h4>Database Overview: </h4>  
            <p>Media Wrangler uses a relational MySQL database with 10 tables centered around the User table. All content—reviews, ratings, likes, discussions, events, and movie lists—is tracked by user_id, ensuring personalized and secure user data.</p>
            <div className='pic-container'>
              <ImagePopup img="/images/DBpicture.png" caption="Click Image to Enlarge" />
              <ImagePopup img="/images/DBpicture2.png" caption="Click Image to Enlarge"  />
            </div>
            <p><b>Key relationships:</b></p>
            <ul>
              <li>Users can: like, rate, and review movies</li>
              <li>Reviews can: have multiple comments and replies</li>
              <li>Users can: participate in discussion boards by asking and answering questions</li>
              <li>Custom movie lists and event tracking are tied to the user account</li>
            </ul>           
            <p>This schema allows for dynamic content, community engagement, and data integrity, supporting features like movie detail pages with like counts, personalized lists, user reviews with ratings, and comment threads.</p>          
          </div>
        </div>      
        </section>
        <br />
        <br />

        <section id="planning-process">
          <h4>Planning & Process:</h4>
          <div className='section-container right'>
            <ImagePopup img="/images/UserStory2.png" caption="Click Image to Enlarge" />
            <div className='section-text'>
              <h5>User Story Example 1: </h5>
              <p>As a User, I want to be able to click on "add review" button, so that I can write my opinion of the movie</p>
              <h6>Acceptance Criteria:</h6>
              <ol>
                <li>On movie details page there should be a clickable button that says <b>"add review"</b> (might need to be apart of movie detail page task)</li> 
                <ul>
                  <li>once clicked, it will direct you to a movie review form</li>
                </ul>          
                <li><b>Movie Review Form</b></li>
                <ul>
                  <li>Display movie title and year</li>
                  <li>Display movie poster art</li>
                  <li>Watched date field (for journal log)</li>
                  <li>Review text input box</li>
                  <li>Add tags option</li>
                  <li>Give Star rating</li>
                  <li>"Contains Spoilers" checkbox</li>
                  <li>Submit Button: which should submit the review & direct user back to their journal page to see it has been posted in their activities </li>
                </ul>
              </ol>
            </div>
          </div>   
        <br />
        <br />    
        <br />  

          <div className='section-container'>
            <ImagePopup img="/images/UserStory1.png" caption="Click Image to Enlarge"/>
            <div className='section-text'>
              <h5>User Story Example 2:</h5>
              <p>As a User, I want to be able to see the details of the movie I searched, so I can learn more about the movie and/or have journal interactions with the movie.</p>
              <h6>Acceptance Criteria:</h6>
              <div className="ac-columns">
              <ol>
                <li><b>Movie Detail Card Component</b> that displays that movie data collected from the API</li> 
                <ul>
                  <li>Movie Title (Year Release)</li>
                  <li>Movie Release Date</li>
                  <li>Movie Genre</li>
                  <li>Movie Overview</li>
                  <li>Movie Director(s)</li>
                  <li>Movie Poster Art Image</li>
                </ul>          
                <li><b>Movie Cast Member Card Component</b></li>
                <ul>
                  <li>picture</li>
                  <li>Display movie poster art</li>
                  <li>name</li>
                  <li>movie role</li>
                </ul>
                </ol>

                <ol start="3">
                <li><b>User Interaction Component</b></li>
                <ul>
                  <li>rating button (5 star)</li>
                  <li>like button</li>
                  <li>add to want to watch list</li>
                  <li>add a movie review</li>
                </ul>
                <li><b>User Review Interaction Features</b></li>
                <ul>
                  <li>like review button</li>
                  <li>like review counter</li>
                  <li>add comment button</li>
                </ul>
              </ol>
            </div>
          </div>
          </div>  
        </section>                  
  
        <section id="future-improvements">
          <div className='section-container'>
            <div className='section-text'>
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
              <p>Since LaunchCode, I've expanded movie review threads so users can now directly reply to specific comments rather than seeing one long discussion thread.</p>
            </div>
          </div>
        </section>

        <section id="final-thoughts">
          <div className='section-container'>
            <div className='section-text'>
              <h4>Final Thoughts: </h4>
              <p>Media Wrangler reflects how far I've come in full-stack development—from backend architecture to thoughtful UI design to user    engagement. It also demonstrates how collaboration and planning (especially in group projects) elevate functionality and experience.</p>
            </div>
          </div>
        </section>
        <br />
        <br />

        <p><b>Back to</b> <a href="#intro">the Top</a></p>
        <p><b>Back to</b> <a href="/projects">Project List</a></p> 
            
    </div>
    
  )
}

export default MediaWrangler
