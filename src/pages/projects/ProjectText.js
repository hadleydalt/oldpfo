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
const dashImages= ["dash/dash9", "dash/dash10", "dash/dash11"]

const pgTitles = ["Your Pets", "Be Productive"]
const pgDescs = ["Name pets and view their randomly generated characteristics", "Enter hours of productivity in exchange for currency which you can use to shop for pets"]
const pgImages = ["petgarden/petg1", "petgarden/petg2"]

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
    </>,

    <>
        <div className="h1">Overview</div>
        <div>I worked as a Mobile Developer for Brown University's Center for Computation and 
            Visualization. I worked on the frontend of an app called Soma. This app enables users to 
            track chronic pain. </div>
        <div className="h1">Responsibilities</div>
        <p>Using <span className="accent">React Native</span>, <span className="accent">JavaScript</span>, <span className="accent">HTML</span>, and <span className="accent">CSS</span> to code responsive iOS and Android app components and screens and simulating in Xcode and Android Studio </p>
        <div>Assessing UI/UX Designs from <span className="accent">Adobe XD</span> to ensure technical feasibility </div>
        <p>Using <span className="accent">Docker Compose</span> to orchestrate the server and database (a <span className="accent">REST API</span> written in <span className="accent">Node.js</span>) </p>
        <div>Submitting work for review from fellow developers and conducting reviews using <span className="accent">Git</span></div>
        <p>Successfully contributed to build and release of the app on the App Store and created an animation in <span className="accent">After Effects</span> to showcase the app, which is also displayed on the App Store.</p>
        <div className="h1">Link to app</div>
        <a style={{textDecoration: "none", color: "black"}} href="https://apps.apple.com/us/app/soma-pain-manager/id6444110898">https://apps.apple.com/us/app/soma-pain-manager/id6444110898</a>
        <p>→ View my After Effects animation below!</p>
        <video style={{width: "25%", height: "auto"}} className="project-visual" controls>
            <source src={require("../../graphics/soma/soma.mp4")} type="video/mp4" style={{objectFit: "cover"}} />
        </video>
        <div className="h1">Full Internship Description</div>
        <p>In this internship, I work alongside other designers, developers and researchers to 
            coordinate the development of the app Soma. This app enables users to track chronic 
            pain. I participate in weekly meetings to discuss project goals, progress, and scope of 
            work, providing feedback pertaining to the User Experience journey associated with the 
            app, user testing, and IRB drafting, documentation, and approval. I also analyze the 
            Adobe Xd files in which the app was designed and drafted, and bring the static design 
            to life using HTML, CSS, and TypeScript, within the React Native coding framework (a 
            version of React optimized for mobile development). Specifically, I code components 
            that can be found throughout the app and organize the components on the app screen, 
            ensuring that the components are customizable so that they can be reused. I submit my 
            work for review and approval from fellow developers. I also review coding submissions 
            from developers and provide feedback. Throughout the process, I am required to make 
            informed design decisions regarding color, layout, readability and other visual aspects 
            to ensure an optimal User Experience journey. I am also required to research and learn 
            the implementation of certain visual features in React (for example, animations), so 
            that they can be integrated into the development of the app as components.</p>
        <div className="h1">Review After One Semester</div>
        <p>Throughout this semester I have enjoyed the honor of working with many amazing designers,
            developers, and researchers working at the Center for Computation and Visualization. I 
            worked under the guidance of Ellen Duong and Bradford Roarr, two research software 
            engineers. Through weekly meetings and check-ins, they helped me to perfect my GitHub 
            and React competencies so that I was able to code functional components and integrate 
            them into user-responsive screens illuminating the different capabilities of the app 
            Soma. Throughout this process, I was able to gain experience with the transcription 
            from static components of an Adobe Xd file to interactive modules accessed via mobile 
            app, within the boundaries posed by the React Native Framework. In response to the tasks 
            I was assigned, I performed extensive research regarding means to correctly implement 
            the designs from the Xd file, which were not originally created with the React Native 
            library in mind as the instrument of their creation. In some cases, the desired 
            implementation strategy was left open-ended. In these cases, I was required to make 
            informed design decisions to bring the specificities to life. During these processes, 
            I prioritized user accessibility while also paying homage to the trademark appearance of 
            the app.</p>
    </>,

    <>
        <div className="h1">Overview</div>
        <div>I designed and coded an original game in Java for a class project. The game provides 
            users with an addictive incentive to study! </div>
        <p>The premise of the game is that the user can log hours of productivity in exchange for 
            currency which can be used to purchase pets, pet toys, and extra features. The pets and 
            toys are then placed into a garden which the user can customize. </p>
        <div className="h1">Design Process</div>
        <p>Because this project was more a test of my coding skills than of my User Research skills, 
            I did not conduct any research prior to designing this project. If I could redo my 
            process, I would go about this by:​​​​​​​</p>
        <p className="accent"><b>1. </b>Conducting a survey geared towards people from elementary-school age to adulthood, because I feel that this game is potentially appealing to a broad age range. </p>
        <div><b>Survey questions would include:</b></div>
        <p>
        <div>1. Do you feel satisfied with your average productivity level? </div>
<div>2. Have you tried any means of boosting your productivity level? (Apps, lifestyle changes, etc.) What are they? Did any of them work? If so, why do you think they worked? </div>
<div>3. Do you feel addicted to any games? If so, what do you think is addicting about them? Why do you prefer them over other games?</div>
<div>4. Would you be interested in using a game which would enable you to track your hours of productivity in exchange for rewards? </div>
<div>5. Would you be interested owning virtual pets and creating a customizable virtual environment for these pets to live in?</div>
<div>6. Have you ever played such a game? What has been your experience with it? </div>
        </p>
        <p className="accent"><b>2.</b> Synthesizing survey results and using an affinity diagram to map responses.</p>
        <div><b>The results of this survey would allow me insight into:</b></div>
        <p>
        <div>1. Which demographics are more affected by a dissatisfaction with their productivity level </div>
        <div>2. Trends in productivity-boosting tactics which have been effective for consumers, that could be implemented into my game</div>
        <div>3. Trends in gamification and other elements that make games addicting to consumers</div>
        <div>4, 5, 6. Which demographics (if any) might be interested in the premise of the game</div>
        </p>
        <div>I would create an affinity diagram to map the responses to determine which tactics I 
            could implement in my game to maximize productivity and addictiveness. </div>
        <p className="accent"><b>3. </b>Wireframing and Prototyping</p>
        <div>I coded the UI for Pet Garden off the top of my head with no design planning. If I 
            could redo this, I would use wireframe sketches and Figma prototypes to devise the best 
            possible design!</div>
        <div className="h1">What it looks like</div>
        <img className="project-visual" 
            style={{height: "auto", width: "55%"}}
            src={require("../../graphics/petgarden/petgarden.gif")} 
            alt="" />
        <div className="h1">Full Demo</div>
        <video style={{width: "95%", height: "auto"}} className="project-visual" controls>
            <source src={require("../../graphics/petgarden/petgarden.mp4")} type="video/mp4" style={{objectFit: "cover"}} />
        </video>
        <div className="h1">How it works</div>
        <ColVisuals titles={pgTitles} descs={pgDescs} images={pgImages} video={false} />
        <p><span className="accent">Github: </span> <a style={{color: "black", textDecoration: "none", fontFamily: "Work Sans"}} href="http://github.com/hadleydalt/Pet-Garden-Original-Game">http://github.com/hadleydalt/Pet-Garden-Original-Game</a></p>
        <p><span className="accent">Extended User Guide: </span>  <a style={{color: "black", textDecoration: "none", fontFamily: "Work Sans"}} href="https://docs.google.com/document/d/1m_1gO6dKCQhSIOTCUyGH6tWd5Uil2Byv7RXS9LrzWdE/edit?usp=sharing">https://docs.google.com/document/d/1m_1gO6dKCQhSIOTCUyGH6tWd5Uil2Byv7RXS9LrzWdE/edit?usp=sharing</a></p>
    </>
]