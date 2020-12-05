export default function html() {
  return `
<h1>What is Pollen Wise?</h1>
<p>Owned by the company Pollen Sense, Pollen Wise is an app that uses data from sensors across the globe to provide accurate pollen counts to allergy suffers. Pollen Sense sensors use machine-learning on imaged air-samples to detect what specific particulates are in the air, such as tree and grass pollen — the first of its kind.</p>
<p>While the sensors are used by University researchers and local news stations across the country, Pollen Wise was meant to provide immediate pollen information to the roughly 10-30% of adults with allergic rhinitis worldwide, according to data from the <a href="https://www.aaaai.org/about-aaaai/newsroom/allergy-statistics#:~:text=Worldwide%2C%20allergic%20rhinitis%20affects%20between,and%2030%20%25%20of%20the%20population.&amp;text=Worldwide%2C%20sensitization%20(IgE%20antibodies),to%2040%25%20of%20the%20population.&amp;text=In%202012%2C%207.5%25%20or%2017.6,in%20the%20past%2012%20months." rel="noopener noreferrer nofollow">AAAAI</a>.</p>
<h1>What was my role?</h1>
<p>When I first met the founders of Pollen Wise, they had a clunky MVP that was built in Unity (of all things). The app was released on a trial basis the previous year, showing high enough demand to attract investment capital, but growth had stagnated and churn was high. It only had a few mediocre reviews on the App Store and Google Play.</p>
<p>My job was to transform the app into an elegant, modern application that clearly conveyed complex information. Our top priority was to reduce churn so they could expand to a wider audience. For starters, that meant advising them on how to turn their vision into a new and improved MVP and talking to allergy suffers to understand their needs. From there, we iterated on designs until we reached consensus before developing the rebuilt app in Flutter.</p>
<h2>Product Strategy</h2>
<p>Before I began crafting the user experience, I set out to create a clear and cohesive product strategy. This meant receiving clear requirements of what would be included in our first release.</p>
<p>Because peak tree pollen season was quickly approaching, the founders felt strongly that we needed to finish this project in 2-4 weeks. Normally I would balk at a timeline like that, but in this case the backend was already in place, and the existing Unity app only had a couple screens.</p>
<p>Fortunately, they had already done some research for me, and the CEO had his PHD in pollen ecology. I was able to quickly get up to speed on what their target audience was (adult allergy suffers in Utah and Texas, to start), what lessons they had learned from their first release, and what features they saw as most important. We had an initial meeting in a small conference room with a white board, sketching out our ideas and requirements.</p>
<p>After the meeting, we felt good about where we were, but it was now up to me to deliver them a high-fidelity render of the app we'd be building. Before I felt comfortable doing that, however, we felt it was important that I schedule some calls with friends and family of the team who had allergies, so I could understand their needs on a deeper level.</p>
<p><strong>Preliminary User Research</strong></p>
<p>The questions I asked were focused mostly on understanding the knowledge people had of their own allergies. After all, my dad and I both have horrible allergies, but we saw them as fairly normal and untreatable. Pollen Wise had convinced me that that was a common but incorrect view — staying indoors during peak pollen times can help a lot, for example — but I wanted to understand it on a more qualitative level.</p>
<p>The first study I performed asked simple questions such as (but not limited to) the following:</p>
<ul>
   <li>
      <p>Do you know what type of allergies you suffer from? If so, what are they?</p>
   </li>
   <li>
      <p>Have you seen an allergy specialist before? Y/N</p>
   </li>
   <li>
      <p>What remedies or strategies do you use to manage your symptoms?</p>
   </li>
   <li>
      <p>Do you generally know when pollen levels are and aren't high? If so, how does that impact your daily routine?</p>
   </li>
</ul>
<p>What I learned surprised me. There was a clear segment of people that were like me — people who didn't know specifically what they were allergic to and/or thought it was an unavoidable problem. I call this segment the "bulldozers", since we just ignore the problem. What I found interesting, however, was another segment of people who are rigorous about managing their allergies. I call this segment the "Einsteins", due to their experimental approach to improving their understanding of their situation.</p>
<p>Many of the Einsteins talked somewhat frequently to specialists and/or their doctors, but what was most surprising was that many didn't even know that specialists even existed or that their doctor could help. While some wanted to "fix" their allergies, more important to them was understanding them.</p>
<p>Our team agreed that this segment would be our early adopters, but we (correctly) suspected that many of the Bulldozers might be more like the Einsteins if they knew there was another way.</p>
<h2>User Experience</h2>
<p>To discuss this section, I want to lightly discuss the first redesign, before moving on to how I managed the Pollen Wise UX over an extended period of time. It is this process that I'm most proud of, since it led to rapid organic growth and hundreds of positive reviews, so that's where I'll put most of my attention in this section.</p>
<p><strong>Initial Redesign</strong></p>
<p>Using the business requirements in tandem with insights from my early research, I began my normal process of sketching the basic screens on a drawing pad before bringing them to life on Figma.</p>
<p>Each screen was reviewed with the Pollen Wise team via Slack, it didn't take them long to sign off the designs and approve them for initial development, since they: a) liked them, b) were on a time crunch, and c) knew we can change things later. I'll talk about the development in a future section, but for now let's skip ahead.</p>
<p>Once the app was finished, the entire team could breathe a sigh of relief. Even better, there were very few early bugs that were discovered, and for the most part I was able to focus my attention on the next big project: custom usability tools.</p>
<p><strong>Custom Usability Tools</strong></p>
<p>While we did use Firebase for our app analytics, I was really interested in applying some refined ideas I had from other projects. When Pollen Wise explained that the new update was going great, as evidenced by a huge spike in DAU, they mentioned a desire to focus on user testing / research. As a freelance worker, this isn't the most common request, but it was exactly what I wanted to hear.</p>
<p>For me, designing and prototyping is fun, but my favorite experiences are ones where I get to talk to users and discuss their problems, passions, hopes, and dreams. Thus, they must have been somewhat surprised to hear that I already had a proposal ready for them.</p>
<p>Here was my proposal for custom usability tooling, all of which is still in place today:</p>
<ul>
   <li>
      <p>Feedback polling</p>
      <ul>
         <li>
            <p>Embedded in the home feed, periodic feedback will appear asking "How are you liking Pollen Wise?" Below that are thumbs-up and thumbs-down buttons.</p>
         </li>
         <li>
            <p>After expressing sentiment, the user is given an optional open-ended feedback text area, where they can request changes, report bugs, etc. before pressing submit.</p>
         </li>
      </ul>
   </li>
   <li>
      <p>Intelligent app review requests</p>
      <ul>
         <li>
            <p>To increase their App/Play Store presence, we would use the feedback polling history to determine whether or not to request a review from each user. The theory here, which I had used on a past project, was that we could filter out negative opinions on our reviews but still collect negative sentiment using the ongoing polling.</p>
         </li>
         <li>
            <p>If the user had expressed positive sentiment &gt;= 1 day and hadn't been asked recently (on iOS, the API for requesting reviews is throttled, but on Android there isn't an equivalent API), we would request a review.</p>
         </li>
      </ul>
   </li>
   <li>
      <p>Targeted study campaigns (i.e. invitation to a 15-minute Zoom interview or a survey)</p>
      <ul>
         <li>
            <p>If eligible for a study, based on server defined rules (i.e. prior feedback sentiment, usage frequency, etc.), a card would appear on the home page inviting them to the study.</p>
         </li>
         <li>
            <p>Clicking on the card's call-to-action button would take them to the study link and track that they clicked on it.</p>
         </li>
         <li>
            <p>If they dismissed the card, that would be tracked as well, not just so they wouldn't have to see it again, but we could test the effectiveness of our messaging.</p>
         </li>
      </ul>
   </li>
</ul>
<p>The philosophy here was to create a simple feedback loop, though we knew it was important not to ask users for too much, too often. Sentiment responses would influence whether or not to request a review, as well as influence someone's eligibility for specific studies. For example, if we wanted to study people who left negative feedback but still use the app frequently, it was really easy to do that with this system.</p>
<p>Of course, there are tools that aim to do similar things, but the advantage here was that it wasn't just natively embedded in the app's UX, but made the data available for our intertwined use cases.</p>
<blockquote>
   <p><strong><em>Note:</em></strong> <em>For anyone who is interested in this approach, it is worth noting that a friend and I are currently working on a side project that turns this into an iOS, Android, and Javascript SDK. For more information, visit this page </em><a href="https://ryanbliss.me/#/portfolio/userbuddy" rel="noopener noreferrer nofollow"><em>here</em></a><em>.</em></p>
</blockquote>
<p>With the proposal accepted and code put in place, we were able to complete it relatively quickly. The results were better than I could have imagined. As of the time of this writing, here are note-worthy statistics:</p>
<ul>
   <li>
      <p>As of the time of this writing, we have received over ten-thousand feedback responses with ~92% expressing positive sentiment.</p>
   </li>
   <li>
      <p>Since implementing the study invitation feature, I have interviewed over 40 users individually, with almost all of them agreeing to participate in future studies. Sometimes this was just to understand what they do and don't like about the app, how they use it, etc., but I also performed pointed usability tests, observing them complete tasks, comparing A/B designs, etc.</p>
   </li>
   <li>
      <p>On iOS, there are over 400 reviews with a 4.7-star rating. On Google Play, there are over 100 reviews with a 4.2-star average. For reference, before this feature was implemented, there were under 10 reviews per platform.</p>
   </li>
   <li>
      <p>When we took their feedback, they felt even more inclined to tell their friends and family about the app, which led to huge organic growth. I won't give a specific number, but a significant portion of users come through referrals.</p>
   </li>
   <li>
      <p>When searching "allergy" on the App Store, Pollen Wise is currently ranked #4 (above apps like Zyrtec ALLERGYCAST) and has been featured as a top 100 app in the Weather category. Before they started getting high review ratings, they were ranked significantly lower.</p>
   </li>
</ul>
<p>From this point on, the way Pollen Wise prioritized features changed significantly. It was easy to spot trends in what features asked for in the overarching feedback, and in my interviews people would often ask for the same features, which naturally made it easy to tell what was important to users.</p>
<p>Where the freeform feedback gave us the "what", the interviews helped us understand the "why" behind features people wanted. We'd discuss where Pollen Wise fits into their routine, which for most people was before they'd go outside for a run or take their dog on a walk. The stories were incredible, and while I'd done similar studies for other companies, Pollen Wise had an endless stream of passionate users who loved the app and really felt invested in making it even better. The experience was incredibly fulfilling, and helped validate that Pollen Wise had achieved product-market fit.</p>
<p>Pretty much every feature we have worked on since has been influenced in some way by these systems.</p>
<h2>Development</h2>
<p><strong>Flutter / Dart</strong></p>
<p>In developing the Flutter app, the cofounders felt it was important to use a cross-platform framework, which is what led them to use Unity before I arrived. Ultimately, I convinced them to use Flutter, even though it meant their existing developer (then a college student) had to learn it from scratch.</p>
<p>The main benefit of Flutter is that unlike many cross-platform frameworks, it doesn't just run buttery smooth, it also is extremely intuitive. Nodes are laid out using an object view tree, similar in some ways to the new SwiftUI framework or even React. They have a ton of prebuilt components that align with both Android and iOS native styles, they have beautiful transition animations baked in, and platform-specific bugs are less common than other cross-platform tools I've used (though naturally they still exist and always will).</p>
<p>While I do believe Native apps still have their rightful place, Flutter definitely is worth looking into if you are looking at building a new app from scratch. Dart may seem as elegant as Swift or Kotlin (two incredible languages, in my opinion), it is a formidable language that does a good job of staying out of your way while being extremely easy to learn.</p>
<p><strong>Architecture</strong></p>
<p>Before rebuilding the app, the CTO and I collaborated to create the system architecture for the app. While I can't go into too many specifics on their architecture, the app was made using RxDart at its foundation — a reactive framework based on the ReactiveX architecture commonly used across many different languages. When done well, effectively separates business logic from views in the app, causing less bugs and more responsive UI elements.</p>
<p>Architecture planning was done using a whiteboard and LucidChart, which helps to visualize the data flow of an application, especially when using a reactive framework like Rx. This helped ensure we were building something to our business requirements, while also providing a more clear direction for how the app would be made. As the wise Mandolorian once said, "this is the way."</p>
<p>In total, the rebuild for Pollen Wise took only two weeks. It was an extremely fast turnaround time, though to be fair, this didn't include more complex features (i.e. user accounts, in-app purchases, dynamic content, etc.).</p>
<h1>Summary</h1>
<p>Phew, we made it through! Thanks for sticking with me, and hopefully this didn't just help portray my process and experience, but also provided insights you can apply to your own killer apps.</p>
<p>If you'd like to download the app, it is free on <a href="https://apps.apple.com/us/app/pollen-wise/id1474856970">iOS</a> or <a href="https://play.google.com/store/apps/details?id=com.PollenSense.PollenWise&hl=en_US">Android</a>. Cheers!</p>
  `;
}
