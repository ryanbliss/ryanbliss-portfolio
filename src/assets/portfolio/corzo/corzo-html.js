export default function html() {
  return `
  <h1>What is Corzo?</h1>
  <p>Corzo is a note-taking tool for account executives that use Salesforce as their CRM. While our CEO was working in enterprise sales, he noticed a lot of his colleagues complaining about having to use Salesforce, especially during sales calls. Account executives are supposed to take meeting notes on Salesforce, but because the UX was so slow and cumbersome, they generally opted to use a personal note tool (i.e. OneNote). This caused difficulties for the organization, especially when transitioning an opportunity to other team members.</p>
  <p>With that problem in mind, we opted to build a dead-simple note-taking tool, with a UX focused specifically around the day-to-day workflow of an account executive. From a new tab on Google Chrome, a user could quickly create a note from their meeting calendar, with the attendee email being matched automatically to a Salesforce record. From there, a user could seamlessly open their Zoom meeting, make outgoing calls through Outreach, and invite team members to collaborate on the note in real time.</p>
  <p>The core of Corzo is the note-taking experience, and a lot of our attention went towards making it as effortless and useful as possible. Based on our interviews with account executives across the US, we knew that a major pain point is data entry on Salesforce, something many organizations required their team to capture during calls (i.e. who makes the final decision on a deal). In Corzo, any field on the Salesforce record could be embedded inside a note / note template, effectively eliminating the friction experienced within Salesforce.</p>
  <h1>What was my role?</h1>
  <p>While my title was theoretically CXO, the reality was that the product team was only me and one other developer. As a result, my role shifted a lot over the course of the project, so I'll break it down into the following:</p>
  <ul>
    <li>
        <p>Product management</p>
    </li>
    <li>
        <p>User experience</p>
    </li>
    <li>
        <p>Frontend development (Vue.js)</p>
    </li>
    <li>
        <p>Backend development (Node.js)</p>
    </li>
  </ul>
  <h2>Product Manager</h2>
  <p>Being the team member with the most experience taking products from zero to one, I was charged with boiling down the hopes and dreams of the CEO into a clearly defined MVP. We interviewed account executives across a wide range of companies, asking them if the pain we identified was real (it was), and if our proposed solution would help (general consensus was yes, it would).</p>
  <p>Throughout the UX process (more on that later), we continued to get feedback on our prototypes / wireframes. It took some time, but in due time consensus was reached on what the MVP of Corzo would be. I worked with our backend developer — a talented full-stack engineer named James Hunt, who I'd worked with on many other past projects — to create Trello tasks, broken out into milestones that would enable us to test key features as quickly as possible.</p>
  <p>Because our team was small, I had to split my time between programming the web app / Chrome extension and creating technical specifications for the backend with James. While some specifications could be explained in PRD-style documents, we spent a lot of time drawing out schemas and system architectures using LucidChart such as <a href="https://lucid.app/lucidchart/invitations/accept/409457fc-63ca-4a7e-8e39-06c688d3ee94" rel="noopener noreferrer nofollow">this one</a>, meant to ensure our system was designed to GDPR compliance.</p>
  <p>This often meant doing preliminary research on Salesforce's behemoth of an API ahead of meetings, creating Postman collections for key endpoints, and coordinating with the CEO to ensure we were getting things right along the way.</p>
  <p>Before each release milestone (i.e. internal testing, closed alpha, etc.), I also made sure we had necessary supporting materials, such as support documentation and a website. I would keep tabs on the progress made on each non-product tasks with the same rigor as product-specific ones, whether it be delegated to a 3rd party or assigned internally.</p>
  <p>As we pushed through our release milestones, it became increasingly important that we interview our users to ensure our product worked as intended. We tracked every bug and reworked our roadmap to accommodate them, as necessary. Before moving forward with new features on our roadmap, we sought feedback on the UX and analyzed usage data recorded on Mixpanel, just to make sure our ongoing roadmap was appropriate to the needs of our users.</p>
  <p>The result is a product I am truly proud of, and while growth was more challenging than hoped (due in part to our inability to pay for security certifications that we feel confident we would have passed), we still have happy, loyal users to this day.</p>
  <h2>User Experience</h2>
  <p>While I touched on this in the previous section, there is more to be said about my role as UX designer on this project, which I'll outline here.</p>
  <p>Before diving into the design of Corzo, I first started out sketching ideas out on paper and iterating there. Like many other UX designers, paper sketching helps me focus on the important things with an experience, such as how features/pages intersect and are presented to a user. It isn't until we felt good about the direction on paper mockups that we went for lo-fi mockups intended for outside feedback.</p>
  <p>In choosing the design software for this project, I went with what I was most comfortable with at the time — Sketch on Mac, made interactive using the Craft plugin by InVision. It is worth mentioning that while I've since moved on to Figma, I had only lightly experimented with it at the time and didn't feel compelled to switch.</p>
  <p>On first pass at lo-fi's, I stuck mostly to dull colors and explicit components (i.e. text tabs instead of icons), to tighten the feedback loop and maximize input on our design direction. Key screens were shown off in slide decks at first, and then phased into interactive prototypes. Once we felt good about the UX and collected as much feedback as we could, I began to iterate higher fidelity mockups, again seeking continuous feedback throughout the process.</p>
  <p>Once designs were approved for development, my work in UX still wasn't done. What I love about frontend development (more on that later) is that I get to experience UX challenges firsthand, and quickly iterate on tweaks without updating the design document right away. Of course, in larger teams this process can be replicated by tighter collaboration among development and UX (something I am a strong advocate of), but I had a blast!</p>
  <p>Finally, as said in the previous section on product management, each release phase wasn't the end of the UX process, rather the next step in it. The thing that worked out great with this process was a simple principle: fix UX kinks early, rather than add new features on top. This kept our users happy and engaged, while improving our code quality and morale.</p>
  <h2>Frontend + Vue.js</h2>
  <p>At first, I didn't plan on doing the frontend development for this project. While I had built quite a few mobile apps by then (mostly using Swift or Dart), I didn't yet have seasoned experience with web development, having only taken a few online courses on Pluralsight for Vue.js. It wasn't that we didn't think I was capable, it was rather we thought there may be better ways to spend my time.</p>
  <p>It wasn't until late in the UX process that we decided I should give it a go anyways, as I realized a deeper knowledge of web development would give me an extra edge in my freelance work. As my team also pointed out, I can get pretty obsessive about the UX of products I build, so the outcome would likely be positive. With a vote-of confidence from my cofounders, I started diving deeper into Vue.js — an elegant web app framework that is even more reactive than React (I've since used both, and while React has wider community adoption and open-source libraries, Vue.js feels better to me).</p>
  <p>At first, I expected the development to be a challenge, and at times it certainly was. As I got into a groove, however, I quickly realized that web development isn't nearly as daunting as many of my peers had led me to believe. While my friends like to poke fun at it for being non-type safe and thus a lack of compile-time errors, I came to appreciate it for what it is: a mature framework with widespread community support.</p>
  <p>After selecting Vue.js as our framework, the most important decision we had to make was what rich-text editor to choose. The most important requirement was to support the following features:</p>
  <ul>
    <li>
        <p>Standard rich-text features, such as headings, lists, images, etc.</p>
    </li>
    <li>
        <p>Real-time collaboration, or more specifically, edit history — something required so the server can handle inevitable conflict resolutions</p>
    </li>
    <li>
        <p>Custom HTML nodes, such as a text-field or iFrame.</p>
    </li>
  </ul>
  <p>While I was doing research, it first appeared as if Quill.js was the best fit, being both popular and theoretically meeting our requirements. I implemented a simple MVP using the framework, and quickly realized it had some glaring shortcomings. For starters, it wasn't always pleasant to use outside of raw Javascript, though that wasn't a huge deal. The main issue with it was that custom nodes weren't a priority, especially when placing text areas within them. Further, their real-time collaboration was possible, but had some real shortcomings.</p>
  <p>While these issues probably weren't a complete deal-breaker, I felt strongly there had so be something better. After doing more research, I finally found Tiptap, a Vue.js library based on Prosemirror. Tiptap checked all the boxes. It not only had standard rich-text features, it also had baked-in support for things like real-time collaboration and powerful custom nodes. While the documentation was at times lacking for more the advanced things required for our project, and I did have to make a couple PRs to fix some bugs I found with their code, the capabilities were all there.</p>
  <p>With a note editor in place, we also made the decision to utilize GraphQL on the backend, which was a joy to use. The app state was managed using Vuex, a state-management tool somewhat similar to Redux. Being able to make flexible API calls using GraphQL worked perfectly with our Vuex structure, and despite Salesforce being a headache to work around, development progressed rather seamlessly.</p>
  <p>A couple months into our development, we had something ready to test internally. Our CEO was still working in sales for LucidChart, and he got approval to use it for his work there. This allowed us to get continual feedback through each release, which allowed us to move much faster.</p>
  <p>Having started out knowing very little about web development, by the time Corzo was being used daily by real account executives, the app was truly something I was proud of. While it still isn't perfect, the code base was large but organized, feature dense yet simple. It was an incredible learning experience, and remains the most ambitious code-related project I've taken on to date.</p>
  <h2>Backend + Node.js</h2>
  <p>While James did most of the backend work, with me helping spec out the system designs, he had his hands pretty full with writing the complex Salesforce integration. As a result, there were a few ways in which I was able to contribute to the backend.</p>
  <p>Powered by Docker Swarm, James made an early decision to break the server up into smaller micro-services, each operating independently (with the exception of a few inter-dependencies managed using internal API calls).</p>
  <p>Most of the code was in the core service — written in Kotlin and the Spring framework — responsible for the major parts of the platform, including GraphQL and the Salesforce integration. James also wrote other services using Kotlin, including the authentication and elastic search micro-services. </p>
  <p>Because of the inherent flexibility of micro-services, and the ability to expose internal API calls using NGINX to communicate across services with minimal effort, I was able to step up to the task of creating our real-time collaboration service in Node.js.</p>
  <p><strong>Collaboration Service</strong></p>
  <p>The purpose of this micro-service was simple:</p>
  <ol>
    <li>
        <p>Powered by sockets, allow authorized users to listen and push changes to the edit history for a note</p>
    </li>
    <li>
        <p>Resolve conflicts that may occur from multiple people editing at the same time</p>
    </li>
    <li>
        <p>Store changes to the note to our Postgres database</p>
    </li>
  </ol>
  <p>While I wish I could say that I did this all myself, fortunately there was an easier solution, using a Prosemirror package called <code>prosemirror-transform</code>. Of course, I had to modify their code to meet our requirements, but the core first two goals of the micro-service were largely accounted for.</p>
  <p><strong>Integrations Service</strong></p>
  <p>The other, more comprehensive micro-service I wrote was one that handled all of our integrations, with the exception of Salesforce. The two integrations supported were Google Calendar and Outreach.</p>
  <p>With some architecture James put in place to easily and securely store generic access + refresh tokens in our database, it made more sense for this simple 3rd-party API wrapper to be written in Javascript. The primary goals of the service were as follows:</p>
  <ul>
    <li>
        <p>Provide a standard way to pass tokens provided by third parties using OAuth to the server, without the client ever receiving direct access to the tokens.</p>
    </li>
    <li>
        <p>Allow the Corzo client to make only the API calls deemed necessary, routed through our API, as opposed to making requests directly through the web app. </p>
    </li>
  </ul>
  <p>The service was relatively simple, but it worked great and helped simplify and secure the web app. </p>
  <h1>Summary</h1>
  <p>While I know this is long, I wanted to be thorough, as the work done on this project was significant. I learned a ton not just about building products, but managing them effectively as well. While the app may not be widely used — selling companies on why our small startup can be trusted with sensitive customer data proved much more difficult than selling account executives on its value — it does have loyal users to this day.</p>
  <p>Moreover, our process in designing and building our idea through constant feedback and iteration was top notch, and I carry that experience into every project I work on today.</p>
  <p>If you'd like to learn more about Corzo, you can visit the website <a href="https://www.corzo.io">here</a>.</p>
`;
}
