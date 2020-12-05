export default function html() {
  return `
  <h1>What is Userbuddy?</h1>
  <p>Usability studies and user feedback — in tandem with business requirements — is the foundation in which effective product teams make decisions in the modern era. Userbuddy aims to take this to the next step, combining feedback engines with the flexibility of analytics platforms.</p>
  <p>To explain it simply, Userbuddy can be explained by the following core use cases:</p>
  <ul>
     <li>
        <p>Using an SDK on iOS, Android, and/or Javascript, app developers can trigger in-app surveys for their users.</p>
     </li>
     <li>
        <p>Responses to surveys are stored as custom events, allowing them to create cohorts of users and trigger other related surveys or embedded content, such as:</p>
        <ul>
           <li>
              <p>If a user expressed positive sentiment (i.e. thumbs up vs. down), 24 hours later that user is asked to leave a review on the App Store, all but guaranteeing positive reviews by pre-screening reviewers.</p>
           </li>
           <li>
              <p>Invite a user who recently used X new feature to a paid usability study via Calendly.</p>
           </li>
        </ul>
     </li>
     <li>
        <p>Ability to log custom events, such as a button click, as a custom event using the SDK. These can be used as rules to trigger new surveys, just like responses to survey questions.</p>
     </li>
     <li>
        <p>Admin dashboard for creating/editing surveys, visualizing results, and monitoring user feedback.</p>
     </li>
  </ul>
  <p>While modern tooling has came along way, apps that enable feedback collection generally stop at surveys and feedback forms, with that data not being used outside of conference-room decision making. Userbuddy aims to combine the two, something I've used with much success on other projects.</p>
  <blockquote>
     <p>I'd like to point out that Userbuddy is still a work in progress. We haven't deployed any servers yet, and everything is still being tested locally on our devices. My partner and I have had varying levels of time to work on it, but we are both planning on finishing it. I am publishing this now, since the idea stems from ideas I've implemented across a several projects throughout my career.</p>
  </blockquote>
  <h1>What was my role?</h1>
  <h2>Product Management</h2>
  <p>My partner is someone I work with frequently, a talented full-stack developer named James Hunt. Together, we have scoped out the business requirements, often diagramming system requirements using LucidChart. Tasks are stored on Trello.</p>
  <p>Because this process is something my freelance clients have asked me to implement into their apps (i.e. Pollen Wise), we largely wanted to build this for ourselves so we wouldn't have to code the same functionality multiple times. Thus, we haven't done the same level of research as I normally would, since it is already something validated through past clients and projects.</p>
  <p>That said, we did take steps to make the product more flexible. For example, tooling used in past projects didn't allow for custom in-app surveys, opting for a single generic one that could trigger invitations to surveys on the web, Zoom interviews, etc. Userbuddy is architected to allow for any number of custom surveys within the app, while also supporting embedded content linking to 3rd-party tools like Calendly, which would have been a complete game changer on past projects.</p>
  <h2>Swift &amp; Javascript Library</h2>
  <p>To accomplish the goals of this platform, we need a Swift and Javascript library. These SDKs are mostly working, though they require the server to be run locally using Docker.</p>
  <p>You can view the Swift package <a href="https://github.com/UserBuddy/userbuddy-ios">here</a>, or Javascript <a href="https://github.com/UserBuddy/userbuddy-web">here</a>.</p>
  <h2>Vue.js Dashboard</h2>
  <p>Accompanying the SDK packages is our web dashboard, used for creating surveys, monitoring feedback, setting up API keys, etc. This dashboard is being created using Vue.js — my favorite reactive web-app framework — and is where the bulk of my ongoing work for this project will be.</p>
  <p>Since developing other Vue.js projects like Corzo, development on this dashboard has gone without a hitch, though there is quite a lot of backend work to be done before it can be completed. </p>
  `;
}
