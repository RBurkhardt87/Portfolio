import React from 'react';
import '../Styling/Projects.css';
import ImagePopup from '../components/ImagePopup';
import PlainListCard from '../components/PlainListCard';
import { techStack, coreFeatures, links, BBFeatures, BBLinks, BBStackItems } from '../data/ProjectData';

const BreastFeedingApp = () => {
  return (
    <div>      
      <section id="intro">
        <h1>Welcome to My Begonia Baby</h1>

          <p>Learn about my full-stack breastfeeding application, explore the features, and dive into its technical details. Use the links below to jump to any section:</p>
          <nav className="section-nav">
            <a href="#what-and-why">The What and Why of Begonia Baby</a>
            <a href="#links-stack-features">Project Links, Tech Stack and Core Features</a>
            <a href="#database-overview">Database Overview</a>
            {/* <a href="#planning-process">Planning & Process</a> */}
            <a href="#future-improvements">Future Improvements</a>
            <a href="#final-thoughts">Final Thoughts</a>
          </nav>
        </section>

        <section id="what-and-why">
          <div className='section-container'>           
            <div className='section-text'>
              <h4>What is My Begonia Baby?</h4>            
              <p>My Begonia Baby is a full-stack baby care tracking app I began as both a parent and a lactation consultant. It helps new parents keep track of daily routines like feedings, diaper changes, and sleep — all in one place. By consolidating this information, the app supports trend tracking and simplifies communication with healthcare providers.</p>

              <p>Although the current version focuses on logging core care activities, future updates will expand its functionality to better support parents' emotional and practical needs. The goal is to create a tool that feels genuinely helpful in the real world—whether you're using it on your own or in collaboration with pediatricians or lactation consultants.</p>
            </div>
          
            <div className='section-text'>
              <h4>Why I Built It:</h4>
              <p>New parents have enough on their plates without juggling multiple apps, paper logs, or memory to track essential baby care. As a lactation consultant, I’ve seen how useful detailed tracking can be—but also how clunky and overwhelming most tools are. I built Begonia Baby to simplify that process, reduce daily stress, and give parents confidence in caring for their baby.</p>

              <p>The goal was to create a clean, organized way to log routines like feeding and sleep, support more informed conversations with healthcare providers, and lay the groundwork for features that make tracking feel supportive—like reminders, milestones, and mood journaling.</p>
            </div>  
          </div>
        </section>
        <br />
        <br />
        <br />
        
        <section id="links-stack-features">
          <div className='section-group'>             
               
            <PlainListCard title={ coreFeatures } items={ BBFeatures } />       
            <PlainListCard title={ techStack } items={ BBStackItems } />       
            <PlainListCard title={ links } items={ BBLinks } />          
          </div>
        </section>    
          
       

        <section id="database-overview">
        <div className='section-container'>
          <div className='section-text'>
            <h4>Database Overview: </h4>  
            <p>The breastfeeding tracking application is built on a relational MySQL database centered around the User table. At this stage, three primary logs — breastfeeding, sleep, and diaper changes — are associated with each user, ensuring all tracked data remains personalized and securely stored.</p>
            <div className='pic-container'>
              <ImagePopup img="/public/images/BreastfeedingDB1.png" caption="Click Image to Enlarge" />
              <ImagePopup img="/public/images/BreastfeedingDB2.png" caption="Click Image to Enlarge" />
            </div>
            <p><b>Key relationships:</b></p>
            <ul>
              <li>Each user can create multiple breastfeeding, sleep, and diaper log entries</li>
              <li>Each log captures detailed session information to support thorough, long-term tracking</li>
              <li>Log entries are linked to users via a foreign key (user_id)</li>
            </ul>
            <p>This initial schema establishes a strong foundation for future expansion, including features like journal entries, milestone tracking, reminder systems, and data analysis to help parents monitor trends over days, weeks, and months.</p>            
          </div>
        </div>      
        </section>

        {/* <section id="planning-process">
          <h4>Planning & Process:</h4>        
        </section>                   */}
  
        <section id="future-improvements">
          <div className='section-container'>
            <div className='section-text'>
              <h4>Future Improvements</h4>            
              <p>While the initial foundation is laid, this application is in the earliest of stages. There are many planned features designed to make the application even more helpful, customizable, and engaging for parents. Some planned future improvements include:</p>
              <ul>
                <li>Track breastfeeding sessions with a built-in stopwatch</li>
                <li>Add logs for bottle feeding and pumping</li>
                <li>Enhance sleep tracking with a toggle between nap and nighttime entries</li>
                <li>Incorporate a mood tracker and journaling feature for parental reflection</li>
                <li>Create custom reminders and growth spurt alerts</li>
                <li>Offer fun extras like relaxing soundscapes, customizable avatars, and theme options</li>
                <li>Implement milestone badges to gamify and encourage consistent tracking</li>
                <li>Generate data summaries (daily, weekly, monthly) for clearer insights</li>
                <li>Introduce light/dark mode for better usability at any time of day</li>
                <li>Enable photo uploads within community discussion boards</li>
                <li>Develop a full authentication system with secure user profiles to store private child-related information</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="final-thoughts">
          <div className='section-container'>
            <div className='section-text'>
              <h4>Final Thoughts: </h4>
              <p>This project has been all about learning and leveling up my skills — marking an important step in my journey. I built the breastfeeding app to dive into things I hadn't gotten to try yet, like implementing React Router independently, working with Formik for form handling, and beginning to integrate authentication. I challenged myself to create more dynamic, user-friendly forms that adapt based on user input, offering flexibility without making the experience overwhelming. Moving forward, one of my biggest challenges (and something I'm excited to tackle) is figuring out how to analyze the user logs and turn them into meaningful data. I know it's going to take some learning, but that's exactly what this project is for — pushing myself to keep growing.</p>
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

export default BreastFeedingApp



