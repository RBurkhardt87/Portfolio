import React from 'react';
import '../Styling/Projects.css';
import ImagePopup from '../components/ImagePopup';
import PlainListCard from '../components/PlainListCard';
import { techStack, coreFeatures, links, WLFeatures, WLLinks, WLStackItems } from '../data/ProjectData';

const WishList = () => {
  return (
    <div>      
    <section id="intro">
      <h1>Welcome to the Wishlist Application</h1>

        <p>Learn about my full-stack wishlist app, explore the features, and dive into its technical details. Use the links below to jump to any section:</p>
        <nav className="section-nav">
          <a href="#what-and-why">The What and Why of the Wishlist</a>
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
              <h4>What is the Wishlist App?</h4>            
              <p>The Wish List App is a simple web app I built for my 12-year-old son to help him keep track of things he wants — instead of writing them on paper and forgetting where he put them. It was my first Spring Boot project and uses Thymeleaf, Hibernate, and MySQL. The app lets users create, view, update, and delete items on a personal wish list. I designed it with my son in mind, so the layout is clean and easy to use — simple enough for him to navigate on his own, but still engaging and functional.</p>
            </div>
          
            <div className='section-text'>
              <h4>Why I Built It:</h4>
              <p>This project was my introduction to full-stack development using Java and Spring Boot. I wanted to build something practical that could actually be used by my family, and the idea of digitizing a wishlist felt fun and rewarding. It allowed me to practice setting up a database, connecting it to a backend, rendering data with Thymeleaf, and deploying a functioning product. Beyond technical practice, it gave me insight into how a small application can solve a real-world problem and evolve into something more scalable.</p>
            </div>          
        </div>
      </section>
      <br />
      <br />
      <br />
      
      <section id="links-stack-features">
        <div className='section-group'>        
          <PlainListCard title={ coreFeatures } items={ WLFeatures } />       
          <PlainListCard title={ techStack } items={ WLStackItems } />       
          <PlainListCard title={ links } items={ WLLinks } />          
        </div>
      </section>    

      <section id="database-overview">
      <div className='section-container'>
        <div className='section-text'>
          <h4>Database Overview: </h4>  
          <p>The Wish List App uses a single MySQL table to store wish list items. Hibernate (JPA) manages the entity-to-table mapping, and data is rendered through Thymeleaf templates.</p>
          <div className='pic-container'>
            {/* <ImagePopup img="/images/DBpicture.png" caption="Click Image to Enlarge" /> */} 
          </div>
          <p><b>Key relationships:</b></p>
          <ul>
            <li>Each wish list item is stored in a single `wishlist_item` table</li>
            <li>Items include a name, description, and store where the item can be found</li>
            <li>There are no user accounts or foreign key relationships in this version</li>
            <li>Data is retrieved and rendered directly through Thymeleaf templates</li>
          </ul>          
          <p>This simple structure worked well for a one-user family list, but future versions will include support for users and multiple lists.</p>          
        </div>
      </div>      
      </section>
      

      {/* <section id="planning-process">
        <h4>Planning & Process:</h4>
        <div className='section-container right'>
        </div>  
      </section>                   */}

      <section id="future-improvements">
        <div className='section-container'>
          <div className='section-text'>
            <h4>Future Improvements</h4>            
            <p>The Wishlist was a simple application created with a specific purpose in mind: to provide a digital, interactive experience for my son — as well as create an opportunity to practice what I had been learning in my web development program. However, there are so many directions this application can grow and I am very excited to start implementing these developments.</p>
            <ul>
              <li>Frontend Rebuild with React: Replace the current Thymeleaf-based frontend with React, enabling a dynamic, responsive, and modern user experience.</li>
              <li>Multi-User Accounts: Allow users to create their own accounts and log in to manage their wishlists independently.</li>
              <li>Multi-Wishlists: Users can create and title multiple wishlists, organizing them by occasion or category.</li>
              <li>Wishlist Sharing: Share wishlists with friends and family through shareable links, making gift-giving easy.</li>
              <li>Collaborative Lists & Gift Purchases: Allow friends and family to claim items as purchased from each other's lists, preventing duplicates.</li>
              <li>Gift-Hiding Logic: Implement logic so that when someone marks an item as “gifted,” it becomes hidden from the list creator but remains visible to others — keeping surprises intact while avoiding duplicate purchases.</li>
              <li>Price Tracking & Sale Alerts: Track price drops on wishlist items and notify users when there are sales or cheaper alternatives.</li>
              <li>Categorizing Lists with Tags: Add tags to wishlists for easier categorization (e.g., Birthday, Holiday, Wedding) and searchability.</li>  
              <li>Support for Images and URLs: Let users upload item images and include links to product pages, making wishlists more visual and informative.</li>          
              <li>Event-Triggered Notifications: Notify users about upcoming events (like birthdays or holidays) related to their shared wishlists.</li>
              <li>Wishlist Integrations: Integrate with eCommerce sites, allowing users to import items directly from platforms like Amazon and Etsy.</li>
              <li>Wishlist Stats: Provide users with insightful data on their wishlists, such as item popularity, trends, and other stats.</li>
            </ul>
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

export default WishList




// What I Learned
// Building and connecting a relational database

// Using Thymeleaf to render dynamic views

// Creating RESTful routes and handling form data

// The power of building something small that actually gets used

// This project is special to me because it represents where I started and how far I’ve come. It also continues to serve as inspiration for building tools that make life easier and more fun.
