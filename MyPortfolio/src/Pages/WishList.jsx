import React from 'react'

const WishList = () => {
  return (
    <div>
      <h1>Wish List Application</h1>
      <br/>
        <p>Post pictures of the project</p>
        <br/>
        <ul>
            <li>Wireframe/Layout</li>
            <li>Pics of each Page</li>
            <li>Forms</li>
            <li>Features</li>
            <li>MySQL database tables</li>
        </ul>
        <br />
        <p>Give some background information about it</p>
        <br />
        <ul>
        <li>What the app does</li>
        <li>Why build it</li>
        <li>Tech Stack Used</li>
        <li>Future Improvements</li>
        <li>Link Slide Deck (if there is one)</li>
        <li>Link GitHub Repo </li>
        <li>Link video of project run thru</li>
        <li>Link Deployment (if it is deployed)</li>
        <br />
        <li>Back to <a href="/projects">Project List</a></li>
        </ul>
    </div>
  )
}

export default WishList


// Wishlist Application
// Tech Stack: Spring Boot · Thymeleaf · Hibernate · MySQL

// This was the very first full-stack application I built while learning Spring Boot. I created it for my son when he was turning 12 as a fun and practical way for him to build his Christmas wishlist. Instead of writing out what he wanted for the holidays, he used this app to log his wishes.

// The app features full CRUD functionality: users (at the time, just my son!) could create, view, update, and delete wishlist items. It gave me hands-on experience with server-side rendering using Thymeleaf, database modeling with Hibernate and MySQL, and handling user input in a real-world context.

// What I Learned
// Building and connecting a relational database

// Using Thymeleaf to render dynamic views

// Creating RESTful routes and handling form data

// The power of building something small that actually gets used

// Plans for the Future
// While the current version is simple, I have big plans to rebuild and expand this project:

// Rebuild the frontend with React

// Allow users to create multiple lists (e.g., Birthday, Christmas, etc.)

// Add user authentication so the app supports multiple users

// Support image uploads and item URLs

// Add public/private list toggles and gifting features

// Create a search and deal finder for wishlist items

// Implement logic so gifted items are hidden from the list creator but visible to others

// This project is special to me because it represents where I started and how far I’ve come. It also continues to serve as inspiration for building tools that make life easier and more fun.
