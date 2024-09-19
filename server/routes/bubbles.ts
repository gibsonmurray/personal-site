// import { CSSProperties, ReactNode } from "react"
// import InlineLink from "./(components)/InlineLink"
// import {
//     CodepenLink,
//     CSSLink,
//     FramerMotionLink,
//     GSAPLink,
//     HTMLLink,
//     JavaScriptLink,
//     JQueryLink,
//     ReactLink,
//     TailwindLink,
// } from "./(components)/ReusedLinks"
// import OlympicMedals from "./(pages)/olympic-medals/OlympicMedals"

// type Bubble = {
//     title: string
//     subtitle: string
//     caption: ReactNode
//     path: string
//     thumbnail: string
//     color: string
//     skills: Skill[]
//     penLink?: string
//     component?: ReactNode
//     style?: CSSProperties
//     className?: string
// }

// type Skill = {
//     text: string
//     href: string
//     className: string
//     newTab: boolean
// }

// export const bubbles: Bubble[] = [
//     {
//         title: "Landing Page Hero",
//         path: "/landing-page-hero",
//         penLink: "https://codepen.io/gibsonmurray/pen/OJdzxyK",
//         thumbnail: "/images/thumbnails/landing-page-hero.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#1D1D1F",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     An exploration in text splitting effects, cursor following
//                     animations, and 3D transforms 🎲. All made with <GSAPLink />
//                     .
//                 </span>
//                 <span>Users can replay the animation at will 👑.</span>
//                 <span>
//                     This is a landing page hero section based on{" "}
//                     <InlineLink
//                         text="Poppr's Main Page"
//                         href="https://poppr.be"
//                         className="text-purple-500"
//                         newTab
//                     />
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Apple Watch Gestures",
//         path: "/apple-watch-gestures",
//         penLink: "https://codepen.io/gibsonmurray/pen/NWowKYg",
//         thumbnail: "/images/thumbnails/apple-watch-gestures.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-500",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#000000",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     A very simple demo of Apple&apos;s watch gestures section of
//                     the{" "}
//                     <InlineLink
//                         text="Apple Watch website ⌚️"
//                         href="https://www.apple.com/apple-watch-series-9/"
//                         className="text-zinc-900"
//                         newTab
//                     />
//                     . The demo uses the{" "}
//                     <InlineLink
//                         text="GSAP ScrollTrigger"
//                         href="https://greensock.com/scrolltrigger/"
//                         className="text-[#0AE447]"
//                         newTab
//                     />{" "}
//                     to achieve the desired effect.
//                 </span>
//                 <span>
//                     This is another one of my tests with scroll animations.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Parallax Seasons",
//         path: "/parallax-seasons",
//         penLink: "https://codepen.io/gibsonmurray/pen/jOdwaKb",
//         thumbnail: "/images/thumbnails/parallax-seasons.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#FFFFFF",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     One of my most popular projects on <CodepenLink />, this is
//                     a simple parallax effect that I created using just{" "}
//                     <HTMLLink />, <CSSLink />, and <JavaScriptLink />. The
//                     effect is triggered when the user moves their mouse across
//                     the screen.
//                 </span>
//                 <span>
//                     By default, the season on desplay is the current one in the
//                     United States 🇺🇸 (as of right now that is{" "}
//                     {getCurrentSeason()}
//                     ). However, users can change the season by clicking on the
//                     menu.
//                 </span>
//                 <span>
//                     This was my entry to getting highly featured on the{" "}
//                     <CodepenLink /> trending page and newsletter ❤️.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Parallax Devices",
//         path: "/parallax-devices",
//         penLink: "https://codepen.io/gibsonmurray/pen/JjzmrWR",
//         thumbnail: "/images/thumbnails/parallax-devices.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#FFFFFF",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     This project was insired by Nate Smith&apos;s{" "}
//                     <InlineLink
//                         href="https://natesmith.design/"
//                         text="portfolio website"
//                         className="text-[#50747A]"
//                         newTab
//                     />
//                     . My goal was to create a parallax effect, transitioning one
//                     device 📱 to another 💻.
//                 </span>
//                 <span>
//                     I used <GSAPLink /> timelines to animate the entire demo.
//                     This showed me that animation code is quite messy but also
//                     very powerful. For those who have done After Effects,
//                     it&apos;s like keyframing with text.
//                 </span>
//                 <span>
//                     Parallax effects are very clean for the user but very
//                     tedious for the developer.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Photography View Transitions",
//         path: "/photography-view-transitions",
//         penLink: "https://codepen.io/gibsonmurray/pen/dyBKmJM",
//         thumbnail: "/images/thumbnails/photography-view-transitions.webp",
//         skills: [
//             {
//                 text: "React",
//                 href: "https://react.dev/",
//                 className: "text-blue-400",
//                 newTab: true,
//             },
//             {
//                 text: "TailwindCSS",
//                 href: "https://tailwindcss.com/",
//                 className: "text-cyan-500",
//                 newTab: true,
//             },
//             {
//                 text: "Framer Motion",
//                 href: "https://www.framer.com/motion/",
//                 className: "text-purple-700",
//                 newTab: true,
//             },
//         ],
//         color: "#F4F4F5",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     This is an entry in a competition on{" "}
//                     <InlineLink
//                         href="https://x.com/wickedmishra/status/1828092758701342835"
//                         text="X/Twitter"
//                         className="text-[#508dff]"
//                         newTab
//                     />
//                     . I decided to go for a view transition effect for a social
//                     media-inspired design
//                 </span>
//                 <span>
//                     I used <ReactLink /> and <TailwindLink /> to create the UI,
//                     then <FramerMotionLink /> for the animations.
//                 </span>
//                 <span>
//                     This was a fun project! Only took a few hours and it is
//                     pretty small but I am happy with the result.{" "}
//                     <FramerMotionLink /> is a decent tool for <ReactLink />{" "}
//                     animations, however I noticed some limitations with seamless
//                     view transitions. I believe <GSAPLink /> would have done
//                     better here.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Sticky Notes",
//         path: "/sticky-notes",
//         penLink: "https://codepen.io/gibsonmurray/full/gOqMmvE",
//         thumbnail: "/images/thumbnails/sticky-notes.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#CD995F",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     This was a fun little project I made to practice my
//                     JavaScript skills. It&apos;s a simple sticky note app where
//                     you can create, edit, and delete sticky notes. It also has a
//                     trash can that you can use to delete each note or all of
//                     them at once.
//                 </span>
//                 <span>
//                     The original plan for this project was to make it a{" "}
//                     <InlineLink
//                         text="Bento"
//                         href="https://bento.me/"
//                         newTab
//                         className="text-[#768BFF]"
//                     />{" "}
//                     clone, but I decided to keep it simple and just focus on
//                     dragging interactions and animations.
//                 </span>
//                 <span>
//                     It ended up gaining some traction on <CodepenLink /> and
//                     I&apos;ve gotten a few messages from people who wanted to
//                     use it for their own projects. I&apos;m glad that it&apos;s
//                     been helpful to others!
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "About Me",
//         path: "/about",
//         penLink: "",
//         thumbnail: "/images/thumbnails/prof-pic.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "TypeScript",
//                 href: "https://www.typescriptlang.org/",
//                 className: "text-blue-500",
//                 newTab: true,
//             },
//             {
//                 text: "React",
//                 href: "https://reactjs.org/",
//                 className: "text-blue-400",
//                 newTab: true,
//             },
//             {
//                 text: "Next",
//                 href: "https://nextjs.org/",
//                 className: "text-zinc-500",
//                 newTab: true,
//             },
//             {
//                 text: "Node",
//                 href: "https://nodejs.org/en",
//                 className: "text-green-500",
//                 newTab: true,
//             },
//         ],
//         color: "#FEFDF8",
//         subtitle: "Gibson Murray - Front-End Developer",
//         caption: (
//             <>
//                 <span>
//                     Hello world! I&apos;m Gibson, a front-end developer with a
//                     passion for creating beautiful and functional web
//                     applications. I am currently working on exploring new
//                     front-end technologies and frameworks.
//                 </span>
//                 <span>
//                     I also do a lot of side projects and demos, so check out my{" "}
//                     {<CodepenLink />} for more.
//                 </span>
//                 <span>Thanks for stopping by! 👋</span>
//                 <span className="w-full text-right font-semibold">
//                     - Gibson
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Dune Thumper",
//         path: "/dune-thumper",
//         penLink: "https://codepen.io/gibsonmurray/pen/MWRJajj",
//         thumbnail: "/images/thumbnails/dune-thumper.webp",
//         skills: [
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#F1925D",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     A short side project I made after I had seen{" "}
//                     <InlineLink
//                         text="Dune: Part 2 🏜️"
//                         href="https://www.imdb.com/title/tt15239678/"
//                         newTab
//                         className="text-[#DF7506]"
//                     />
//                     . It is a 2D scene with a thumper hitting the ground, and a
//                     worm 🪱 that emerges in the background. The animations and
//                     the scene are all made with pure <HTMLLink /> and{" "}
//                     <CSSLink /> 😱.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Trashy Photos",
//         path: "/trashy-photos",
//         penLink: "https://codepen.io/gibsonmurray/pen/gONaLwy",
//         thumbnail: "/images/thumbnails/trashy-photos.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#FDFDFC",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     I wanted to challenge myself by recreating Emil
//                     Kowalski&apos;s{" "}
//                     <InlineLink
//                         href="https://x.com/emilkowalski_/status/1777316868434411750"
//                         text="Demo"
//                         className="text-red-500"
//                         newTab
//                     />{" "}
//                     of deleting photos in a stylish way.
//                 </span>
//                 <span>
//                     I only used <GSAPLink /> 🪄 to create the animations. This
//                     is all done with vanilla <JavaScriptLink /> . I did not like
//                     doing it in vanilla JS, but I wanted to see how far I could
//                     get without tools like <ReactLink /> ⚛️.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Jumpy Cards",
//         path: "/jumpy-cards",
//         penLink: "https://codepen.io/gibsonmurray/pen/oNrXoaL",
//         thumbnail: "/images/thumbnails/jumpy-cards.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#EEECED",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     A very simple project with a few cards that jump on launch.
//                     Mimics{" "}
//                     <InlineLink
//                         text="Airbnb's"
//                         href="https://www.airbnb.com/"
//                         className="text-[#FF385C]"
//                         newTab
//                     />{" "}
//                     micro-interactions as seen on their app.
//                 </span>
//                 <span>
//                     It uses a simple <GSAPLink /> tween used to stagger the
//                     scales of the cards.
//                 </span>
//                 <span>
//                     This is the only project I have done with a tutorial. You
//                     can check it out{" "}
//                     <InlineLink
//                         text="here"
//                         href="https://x.com/GibsonSMurray/status/1811980098502787267/video/1"
//                         className="text-blue-500"
//                         newTab
//                     />
//                     !
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Pressure Grid",
//         path: "/pressure-grid",
//         penLink: "https://codepen.io/gibsonmurray/pen/KKjLRMj",
//         thumbnail: "/images/thumbnails/pressure-grid.webp",
//         color: "#000000",
//         subtitle: "subtitle",
//         skills: [],
//         caption: (
//             <>
//                 <span>
//                     Feeling the pressure? This emulates a touch-sensitive pad
//                     that can be used to control different things. On touch
//                     release a crosshair of cells will meet at the point of
//                     release.
//                 </span>
//                 <span>
//                     Uses <GSAPLink /> and <JQueryLink /> to animate the grid.
//                 </span>
//                 <span>
//                     This was a simple project to practice using <JQueryLink />{" "}
//                     and to explore different animation techniques.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "iPhone Widget Flood",
//         path: "/iphone-widget-flood",
//         penLink: "https://codepen.io/gibsonmurray/pen/RwEQKrY",
//         thumbnail: "/images/thumbnails/iphone-widget-flood.webp",
//         color: "#0D0D0D",
//         subtitle: "subtitle",
//         skills: [],
//         caption: (
//             <>
//                 <span>
//                     A very simple scroll animation that scales cards from behind
//                     an iPhone 14 Pro.
//                 </span>
//                 <span>
//                     Uses <GSAPLink /> to animate the cards.
//                 </span>
//                 <span>
//                     This is one of my first projects on <CodepenLink />. Could
//                     use some performance tweaks but it works well enough once
//                     the browser caches the images.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "iPad Parallax Scroll",
//         path: "/ipad-parallax-scroll",
//         penLink: "https://codepen.io/gibsonmurray/pen/BaMjoaP",
//         thumbnail: "/images/thumbnails/ipad-parallax-scroll.webp",
//         skills: [
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#000000",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     This was my first ever featured <CodepenLink />. It is a
//                     very small project designed to gain more experience with{" "}
//                     <GSAPLink /> and to learn how to create a scrolling effect.
//                 </span>
//                 <span>
//                     Inspired by the{" "}
//                     <InlineLink
//                         text="10x Designers Landing Page"
//                         href="https://10xdesigners.co/"
//                         className="text-indigo-900"
//                         newTab
//                     />
//                     .
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Magic Terminal",
//         path: "/magic-terminal",
//         penLink: "https://codepen.io/gibsonmurray/pen/dyBXxLG",
//         thumbnail: "/images/thumbnails/magic-terminal.webp",
//         skills: [
//             {
//                 text: "AI",
//                 href: "https://openai.com/api/",
//                 className: "text-purple-500",
//                 newTab: true,
//             },
//             {
//                 text: "JavaScript",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//                 className: "text-amber-400",
//                 newTab: true,
//             },
//             {
//                 text: "HTML",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//                 className: "text-orange-600",
//                 newTab: true,
//             },
//             {
//                 text: "CSS",
//                 href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//                 className: "text-sky-600",
//                 newTab: true,
//             },
//         ],
//         color: "#434343",
//         subtitle: "subtitle",
//         caption: (
//             <>
//                 <span>
//                     Imagine a{" "}
//                     <InlineLink
//                         text="Bash shell"
//                         href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
//                         className="text-green-600"
//                         newTab
//                     />{" "}
//                     with knowledge of the universe and the future of what is to
//                     come... ✨
//                 </span>
//                 <span>
//                     The Magic Terminal is an interactive <CodepenLink /> built
//                     with hidden lore. It will answer your questions but
//                     sometimes it reveals a bit more than you asked for.
//                 </span>
//                 <span>
//                     This started off as a tiny project to practice a
//                     &quot;hacker text&quot; style animation. However, as I went
//                     along, I decided to make it a bit more fun.
//                 </span>
//             </>
//         ),
//     },
//     {
//         title: "Olympic Medals",
//         path: "/olympic-medals",
//         thumbnail: "/images/thumbnails/olympic-medals.webp",
//         color: "#F5F5F5",
//         subtitle: "subtitle",
//         skills: [],
//         component: <OlympicMedals />,
//         caption: "caption",
//     },
// ]

// function getCurrentSeason() {
//     const currentMonth = new Date().getMonth()
//     if (currentMonth >= 2 && currentMonth <= 4) {
//         return "Spring 🌸"
//     } else if (currentMonth >= 5 && currentMonth <= 7) {
//         return "Summer 🏝️"
//     } else if (currentMonth >= 8 && currentMonth <= 10) {
//         return "Fall 🍂"
//     } else {
//         return "Winter ❄️"
//     }
// }
