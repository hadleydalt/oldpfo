import { ColVisuals } from '../ColVisuals'

/*
SAMPLE: 

<>
        <div className="h1">Hello</div>
        <div>HI difj difj idfj fj <span className="accent">hi</span> dkfj</div>
        <div className="project-visual"></div>
        <ColVisuals />
    </>,
*/ 

const dashTitles = ["Create Notes, Move and Resize", "Create Collections and Nested Collections", "Linking Notes Together"]
const dashDescs = [
    "The user is able to populate the screen with 'notes' onto which they can add text, images, videos, or support HTML iFrames (websites with clickable links). ", 
    "The user can also create collections to store additional notes. Collections may be nested inside collections. ", 
    "Finally, the user can link notes by creating and naming 'Folders' which store up to three notes. If a note has been added to a folder, the user has the option to click on and access the other contents that have been stored within that folder."
]
const dashImages= ["dash9", "dash10", "dash11"]

export const Text = [
    
    <>
        <div className="h1">Design Goals</div>
        <div>Create a game that will offer players a refuge from the stress of everyday life.</div>
        <div className="h1">Video Tour</div>
        <div className="project-visual"></div>
        <div className="h1">Full Game Description</div>
        <div>The game can be played on a PC or in VR. In addition, the user can play 
            the game to explore the city, or partake in the scavenger hunt. Either 
            way, the goal is to find your missing cat! I was inspired to make a 
            lighthearted game that users can enjoy as a refuge from the stress of 
            reality. The game focuses on locations that are peaceful and productive: 
            the <span className="accent">Train Station</span>, the <span className="accent">Marketplace</span>, 
            the <span className="accent">Neighborhood</span>, the <span className="accent">Concert Hall</span>, 
            and the <span className="accent">Pond</span>. <span className="accent">Train Stations</span> provide a relaxing vehicle for users to 
            arrive at the destination of their choice, or escape from a place that 
            is holding them back. <span className="accent">Marketplaces</span> foster creativity (vendors bring 
            their own items to sell), sharing and exchange. <span className="accent">Neighborhoods</span> host 
            communities. <span className="accent">Concert Halls</span> invite the exchange of music and performances,
             while <span className="accent">Ponds</span> encourage reflection. The scape is open to explore only, or
              embark on the scavenger hunt which requires interactions with elements 
              in the game.
        </div>
        <div className="h1">Gameplay/Rules</div>
        <div>The player must find a ticket in the train station and offer it to the 
            boy, who is unable to get home without one. The other tasks similarly 
            encourage the player to perform kind deeds or engage positively with 
            elements of the environment. After the player gives the ticket to the boy,
             the player receives an apple in exchange. Then, the player must board the 
             train to take the apple to the marketplace, find a flower, and exchange 
             the apple for the flower. Then the player must take the flower to the 
             violinist, who gives the player a key and some advice in exchange. The 
             advice: take the key to the concert hall and look for clues there. At the
            concert hall, the player will find sheet music, and must take the sheet 
            music to the piano to play it. After playing it, the player finds a muddy 
            collar, suggesting that their cat is by the pond. The player then goes to 
            the pond and finds the cat!
        </div>
    </>,

    <>
        <div className="h1">Overview</div>
        <div>DASH is an IDE for document-based networks developed by Andy Van Dam at 
            Brown University. I was challenged to code my own version of DASH using TypeScript, 
            React, and SCSS, which I had no prior familiarity with. I used this challenge as an 
            opportunity to propose some suggestions for a <span class="accent">hypothetical redesign of the existing 
            web app</span>. </div>
        <div className="h1">Why this redesign?</div>
        <div>Experimenting with DASH, I noticed several features of the UI which made it difficult 
            to navigate and use. I decided to improve upon this issues by simplifying the 
            functionality of DASH to make it more <span className="accent">user-friendly</span>.</div>
            <div className="h1">Defining the problem</div>
        <div>I began by conducting an analysis of the existing web app and identifying some <span className="accent">pain 
            points"</span> that make usability difficult. Unfortunately, the time limitations did not 
            permit me to garner feedback about DASH from other potential users. However, if I had 
            been given more time, I would have included this step in my analysis. </div>
            <div style={{marginTop: "1vh"}}><span className="accent">→ Note:</span> For your understanding, DASH enables users to populate textual "notes" and files onto an unbounded 2D freeform canvas. </div>
            <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash1.png")} alt=""/>
            <div className="h1">Design Process</div>
            <div className="accent">Design Goals</div>
            <p>I concluded that the primary goal of this redesign should be to <b> implement the basic functionalities of DASH</b> and <b>address each of the pain points to make the app easier to navigate and use</b>.</p>
            <p>To tackle Goal 1, I began by breaking up DASH's functionality into four components:</p>
            <img className="project-visual" style={{height: "auto", width: "45%"}}src={require("../../graphics/dash/dash2.png")} alt=""/>
            <p>To address Goal 2, I first created an affinity diagram to map each pain point with its potential solutions.</p>
            <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash3.png")} alt=""/>
            <p className="accent">Wireframe and Prototype</p>
            <div>Synthesizing my findings, I proceeded to make a wireframe sketch that integrated the 
                four goal functionalities of DASH while also addressing the pain points.</div>
            <img className="project-visual" style={{height: "auto", width: "75%"}}src={require("../../graphics/dash/dash4.png")} alt=""/>
            <p>I then transferred the sketch to a prototype in Figma...</p>
            <img className="project-visual" style={{height: "auto", width: "75%"}}src={require("../../graphics/dash/dash5.png")} alt=""/>
            <p>The next step was to code the functional web app using React, TypeScript, and SCSS.</p>
        <div className="h1">The final result</div> 
        <div>These are some screenshots of the final result, and a diagram highlighting how my solution aims to amend to the usability issues posed by the original DASH.</div>
        <p className="accent">Screenshot of result</p>
        <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash6.png")} alt=""/>
        <p className="accent">Diagram of Solution and Functionalities</p>
        <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash7.png")} alt=""/>
        <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash8.png")} alt=""/>
        <p className="accent">Video Tours of The Result</p>
        <ColVisuals titles={dashTitles} descs={dashDescs} images={dashImages} video={true} />
        <div className="h1">Live interactive demo coming soon! <span className="accent" style={{fontStyle: "normal"}}>Github: <a style={{color: "black", textDecoration: "none", fontFamily: "Work Sans"}} href="http://github.com/hadleydalt/DASH-project.git">http://github.com/hadleydalt/DASH-project.git</a></span></div>
    </>
]