import InlineLink from "./(components)/InlineLink"
import {
    CodepenLink,
    CSSLink,
    FramerMotionLink,
    GSAPLink,
    HTMLLink,
    JavaScriptLink,
    ReactLink,
    TailwindLink,
} from "./(components)/ReusedLinks"
import Subtitle from "./(components)/Subtitle"

export const bubbles = [
    [
        // row 1
        {
            title: "Landing Page Hero",
            path: "/landing-page-hero",
            mainLink: "https://codepen.io/gibsonmurray/pen/OJdzxyK",
            thumbnail: "/images/thumbnails/landing-page-hero.webp",
            imgs: [
                {
                    title: "Landing Page Hero: Mid-Animation",
                    href: "https://codepen.io/gibsonmurray/pen/OJdzxyK",
                    src: "/images/landing-page-hero/2.jpeg",
                },
                {
                    title: "Landing Page Hero: Button Animation",
                    href: "https://codepen.io/gibsonmurray/pen/OJdzxyK",
                    src: "/images/landing-page-hero/1.jpeg",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#835484", "#ebe1ed"],
            darkColors: ["#4a2c4a", "#2e1f2e"],
            darkBorder: false,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/OJdzxyK">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        An exploration in text splitting effects, cursor
                        following animations, and 3D transforms 🎲. All made
                        with <GSAPLink />.
                    </span>
                    <span>Users can replay the animation at will 👑.</span>
                    <span>
                        This is a landing page hero section based on{" "}
                        <InlineLink
                            text="Poppr's Main Page"
                            href="https://poppr.be"
                            className="text-purple-500"
                            newTab
                        />
                    </span>
                </>
            ),
        },
    ],
    [
        // row 2
        {
            title: "Apple Watch Gestures",
            path: "/apple-watch-gestures",
            mainLink: "https://codepen.io/gibsonmurray/pen/NWowKYg",
            thumbnail: "/images/thumbnails/apple-watch-gestures.webp",
            imgs: [
                {
                    title: "Apple Watch Gestures: Music",
                    href: "https://codepen.io/gibsonmurray/pen/NWowKYg",
                    src: "/images/apple-watch-gestures/1.jpeg",
                },
                {
                    title: "Apple Watch Gestures: Reply to Messages",
                    href: "https://codepen.io/gibsonmurray/pen/NWowKYg",
                    src: "/images/apple-watch-gestures/3.jpeg",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-500",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#000000", "#e5e5e5"],
            darkColors: ["#1a1a1a", "#333333"],
            darkBorder: false,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/NWowKYg">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        A very simple demo of Apple&apos;s watch gestures
                        section of the{" "}
                        <InlineLink
                            text="Apple Watch website ⌚️"
                            href="https://www.apple.com/apple-watch-series-9/"
                            className="text-zinc-900"
                            newTab
                        />
                        . The demo uses the{" "}
                        <InlineLink
                            text="GSAP ScrollTrigger"
                            href="https://greensock.com/scrolltrigger/"
                            className="text-[#0AE447]"
                            newTab
                        />{" "}
                        to achieve the desired effect.
                    </span>
                    <span>
                        This is another one of my tests with scroll animations.
                    </span>
                </>
            ),
        },
        {
            title: "Parallax Seasons",
            path: "/parallax-seasons",
            mainLink: "https://codepen.io/gibsonmurray/pen/jOdwaKb",
            thumbnail: "/images/thumbnails/parallax-seasons.webp",
            imgs: [
                {
                    title: "Parallax Seasons: Spring",
                    src: "/images/parallax-seasons/spring.png",
                },
                {
                    title: "Parallax Seasons: Summer",
                    src: "/images/parallax-seasons/summer.png",
                },
                {
                    title: "Parallax Seasons: Fall",
                    src: "/images/parallax-seasons/fall.png",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#CDDAE4", "#f4faff"],
            darkColors: ["#2c3e50", "#34495e"],
            darkBorder: true,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/jOdwaKb">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        One of my most popular projects on <CodepenLink />, this
                        is a simple parallax effect that I created using just{" "}
                        <HTMLLink />, <CSSLink />, and <JavaScriptLink />. The
                        effect is triggered when the user moves their mouse
                        across the screen.
                    </span>
                    <span>
                        By default, the season on desplay is the current one in
                        the United States 🇺🇸 (as of right now that is{" "}
                        {getCurrentSeason()}
                        ). However, users can change the season by clicking on
                        the menu.
                    </span>
                    <span>
                        This was my entry to getting highly featured on the{" "}
                        <CodepenLink /> trending page and newsletter ❤️.
                    </span>
                </>
            ),
        },
        {
            title: "Parallax Devices",
            path: "/parallax-devices",
            mainLink: "https://codepen.io/gibsonmurray/pen/JjzmrWR",
            thumbnail: "/images/thumbnails/parallax-devices.webp",
            imgs: [
                {
                    title: "Parallax Devices: Laptop",
                    src: "/images/parallax-devices/parallax-devices-2.png",
                    className: "text-zinc-200 border-zinc-200",
                },
                {
                    title: "Parallax Devices: Phone",
                    src: "/images/parallax-devices/parallax-devices-1.jpeg",
                    className: "text-zinc-200 border-zinc-200",
                },
                {
                    title: "Parallax Devices: TV",
                    src: "/images/parallax-devices/parallax-devices-3.jpeg",
                    className: "text-zinc-200 border-zinc-200",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#595F80", "#edefff"],
            darkColors: ["#2c2f3f", "#1a1a2e"],
            darkBorder: true,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/JjzmrWR">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        This project was insired by Nate Smith&apos;s{" "}
                        <InlineLink
                            href="https://natesmith.design/"
                            text="portfolio website"
                            className="text-[#50747A]"
                            newTab
                        />
                        . My goal was to create a parallax effect, transitioning
                        one device 📱 to another 💻.
                    </span>
                    <span>
                        I used <GSAPLink /> timelines to animate the entire
                        demo. This showed me that animation code is quite messy
                        but also very powerful. For those who have done After
                        Effects, it&apos;s like keyframing with text.
                    </span>
                    <span>
                        Parallax effects are very clean for the user but very
                        tedious for the developer.
                    </span>
                </>
            ),
        },
        {
            title: "Photography View Transitions",
            path: "/photography-view-transitions",
            mainLink: "https://codepen.io/gibsonmurray/pen/dyBKmJM",
            thumbnail: "/images/thumbnails/photography-view-transitions.webp",
            imgs: [
                {
                    title: "Photography View Transitions Img 1",
                    src: "/images/photography-view-transitions/1.jpeg",
                    className: "text-zinc-200 border-zinc-200",
                },
                {
                    title: "Photography View Transitions Img 2",
                    src: "/images/photography-view-transitions/2.png",
                    className: "text-zinc-200 border-zinc-200",
                },
            ],
            skills: [
                {
                    text: "React",
                    href: "https://react.dev/",
                    className: "text-blue-400",
                    newTab: true,
                },
                {
                    text: "TailwindCSS",
                    href: "https://tailwindcss.com/",
                    className: "text-cyan-500",
                    newTab: true,
                },
                {
                    text: "Framer Motion",
                    href: "https://www.framer.com/motion/",
                    className: "text-purple-700",
                    newTab: true,
                },
            ],
            colors: ["#ADC8D3", "#f4f4f5"],
            darkColors: ["#2c2f3f", "#1a1a2e"],
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/dyBKmJM">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        This is an entry in a competition on{" "}
                        <InlineLink
                            href="https://x.com/wickedmishra/status/1828092758701342835"
                            text="X/Twitter"
                            className="text-[#508dff]"
                            newTab
                        />
                        . I decided to go for a view transition effect for a
                        social media-inspired design
                    </span>
                    <span>
                        I used <ReactLink /> and <TailwindLink /> to create the
                        UI, then <FramerMotionLink /> for the animations.
                    </span>
                    <span>
                        This was a fun project! Only took a few hours and it is
                        pretty small but I am happy with the result.{" "}
                        <FramerMotionLink /> is a decent tool for <ReactLink />{" "}
                        animations, however I noticed some limitations with
                        seamless view transitions. I believe <GSAPLink /> would
                        have done better here.
                    </span>
                </>
            ),
        },
    ],
    [
        // row 3
        {
            title: "Sticky Notes",
            path: "/sticky-notes",
            mainLink: "https://codepen.io/gibsonmurray/full/gOqMmvE",
            thumbnail: "/images/thumbnails/sticky-notes.webp",
            imgs: [
                {
                    title: "Sticky Notes: TODO Image",
                    src: "/images/sticky-notes/stickies-1.png",
                },
                {
                    title: "Sticky Notes: Trash Image",
                    src: "/images/sticky-notes/stickies-3.png",
                },
                {
                    title: "Sticky Notes: Stacked Notes Image",
                    src: "/images/sticky-notes/stickies-2.png",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#AE8A58", "#fff6e8"],
            darkColors: ["#5c4a2e", "#3e2c1a"],
            darkBorder: false,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/full/gOqMmvE">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        This was a fun little project I made to practice my
                        JavaScript skills. It&apos;s a simple sticky note app
                        where you can create, edit, and delete sticky notes. It
                        also has a trash can that you can use to delete each
                        note or all of them at once.
                    </span>
                    <span>
                        The original plan for this project was to make it a{" "}
                        <InlineLink
                            text="Bento"
                            href="https://bento.me/"
                            newTab
                            className="text-[#768BFF]"
                        />{" "}
                        clone, but I decided to keep it simple and just focus on
                        dragging interactions and animations.
                    </span>
                    <span>
                        It ended up gaining some traction on <CodepenLink /> and
                        I&apos;ve gotten a few messages from people who wanted
                        to use it for their own projects. I&apos;m glad that
                        it&apos;s been helpful to others!
                    </span>
                </>
            ),
        },
        {
            title: "About Me",
            path: "/about",
            mainLink: "",
            thumbnail: "/images/thumbnails/prof-pic.webp",
            imgs: [
                {
                    title: "Jumpy Cards Codepen",
                    href: "https://codepen.io/gibsonmurray/pen/oNrXoaL",
                    src: "https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/qwesgTGQdqfwKZki-SCR-20240713-beie.png?w=1000&h=1000",
                },
                {
                    title: "Magic Terminal Codepen",
                    href: "https://codepen.io/gibsonmurray/full/dyBXxLG",
                    src: "https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/SMKHjHWv1mX2YYQA-dyBXxLG.custom.jpg?w=1000&h=1000",
                },
                {
                    title: "Sticky Notes Codepen",
                    href: "https://codepen.io/gibsonmurray/full/gOqMmvE",
                    src: "https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/sJKfm3vMoZldxdCo-sticky%2520notes%2520thumbnail.png?w=1000&h=1000",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "TypeScript",
                    href: "https://www.typescriptlang.org/",
                    className: "text-blue-500",
                    newTab: true,
                },
                {
                    text: "React",
                    href: "https://reactjs.org/",
                    className: "text-blue-400",
                    newTab: true,
                },
                {
                    text: "Next",
                    href: "https://nextjs.org/",
                    className: "text-zinc-500",
                    newTab: true,
                },
                {
                    text: "Node",
                    href: "https://nodejs.org/en",
                    className: "text-green-500",
                    newTab: true,
                },
            ],
            colors: ["#FDFCF7", "#FDFCF7"],
            darkColors: ["#2e2e2e", "#1a1a1a"],
            darkBorder: false,
            subtitle: <Subtitle>Gibson Murray - Front-End Developer</Subtitle>,
            content: (
                <>
                    <span>
                        Hello world! I&apos;m Gibson, a front-end developer with
                        a passion for creating beautiful and functional web
                        applications. I am currently working on exploring new
                        front-end technologies and frameworks.
                    </span>
                    <span>
                        I also do a lot of side projects and demos, so check out
                        my {<CodepenLink />} for more.
                    </span>
                    <span>Thanks for stopping by! 👋</span>
                    <span className="w-full text-right font-semibold">
                        - Gibson
                    </span>
                </>
            ),
        },
        {
            title: "Dune Thumper",
            path: "/dune-thumper",
            mainLink: "https://codepen.io/gibsonmurray/pen/MWRJajj",
            thumbnail: "/images/thumbnails/dune-thumper.webp",
            imgs: [
                {
                    title: "Dune Thumper: Worm",
                    src: "/images/dune-thumper/thumper-2.png",
                },
                {
                    title: "Dune Thumper: Activated",
                    src: "/images/dune-thumper/thumper-1.png",
                },
            ],
            skills: [
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#f2a682", "#ffe6cc"],
            darkColors: ["#8c5a42", "#4a2e1a"],
            darkBorder: false,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/MWRJajj">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        A short side project I made after I had seen{" "}
                        <InlineLink
                            text="Dune: Part 2 🏜️"
                            href="https://www.imdb.com/title/tt15239678/"
                            newTab
                            className="text-[#DF7506]"
                        />
                        . It is a 2D scene with a thumper hitting the ground,
                        and a worm 🪱 that emerges in the background. The
                        animations and the scene are all made with pure{" "}
                        <HTMLLink /> and <CSSLink /> 😱.
                    </span>
                </>
            ),
        },
    ],
    [
        // row 4
        {
            title: "Trashy Photos",
            path: "/trashy-photos",
            mainLink: "https://codepen.io/gibsonmurray/pen/gONaLwy",
            thumbnail: "/images/thumbnails/trashy-photos.webp",
            imgs: [
                {
                    title: "Trashy Photos",
                    src: "/images/trashy-photos/grid.png",
                },
                {
                    title: "Trashy Photos",
                    src: "/images/trashy-photos/animation.png",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#F1F4F6", "#F1F4F6"],
            darkColors: ["#2e2f30", "#1a1b1c"],
            darkBorder: true,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/gONaLwy">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        I wanted to challenge myself by recreating Emil
                        Kowalski&apos;s{" "}
                        <InlineLink
                            href="https://x.com/emilkowalski_/status/1777316868434411750"
                            text="Demo"
                            className="text-red-500"
                            newTab
                        />{" "}
                        of deleting photos in a stylish way.
                    </span>
                    <span>
                        I only used <GSAPLink /> 🪄 to create the animations.
                        This is all done with vanilla <JavaScriptLink /> . I did
                        not like doing it in vanilla JS, but I wanted to see how
                        far I could get without tools like <ReactLink /> ⚛️.
                    </span>
                </>
            ),
        },
        {
            title: "Jumpy Cards",
            path: "/jumpy-cards",
            mainLink: "https://codepen.io/gibsonmurray/pen/oNrXoaL",
            thumbnail: "/images/thumbnails/jumpy-cards.webp",
            imgs: [
                {
                    title: "Jumpy Cards",
                    src: "/images/jumpy-cards/1.png",
                },
                {
                    title: "Jumpy Cards",
                    src: "/images/jumpy-cards/3.jpeg",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#EEECEC", "#e0e0e0"],
            darkColors: ["#2e2e2e", "#1a1a1a"],
            darkBorder: false,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/oNrXoaL">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        A very simple project with a few cards that jump on
                        launch. Mimics{" "}
                        <InlineLink
                            text="Airbnb's"
                            href="https://www.airbnb.com/"
                            className="text-[#FF385C]"
                            newTab
                        />{" "}
                        micro-interactions as seen on their app.
                    </span>
                    <span>
                        It uses a simple <GSAPLink /> tween used to stagger the
                        scales of the cards.
                    </span>
                    <span>
                        This is the only project I have done with a tutorial.
                        You can check it out{" "}
                        <InlineLink
                            text="here"
                            href="https://x.com/GibsonSMurray/status/1811980098502787267/video/1"
                            className="text-blue-500"
                            newTab
                        />
                        !
                    </span>
                </>
            ),
        },
        {
            title: "100 Days of Framer Motion",
            path: "/100-days-of-framer-motion",
            thumbnail: "/images/thumbnails/100-days-of-framer-motion.png",
            colors: ["#FD008D", "#E4E4E7"],
            darkColors: ["#6706FF", "#18181B"],
        },
        {
            title: "iPhone Widget Flood",
            path: "/iphone-widget-flood",
            mainLink: "https://codepen.io/gibsonmurray/pen/RwEQKrY",
            thumbnail: "/images/thumbnails/iphone-widget-flood.webp",
            imgs: [
                {
                    title: "iPhone Widget Flood: Left",
                    src: "/images/iphone-widget-flood/l.png",
                },
                {
                    title: "iPhone Widget Flood: Right",
                    src: "/images/iphone-widget-flood/r.png",
                },
            ],
            colors: ["##0D0D0D", "#f9edff"],
            darkColors: ["#1a1a1a", "#2e2e2e"],
            darkBorder: false,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/RwEQKrY">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        A very simple scroll animation that scales cards from
                        behind an iPhone 14 Pro.
                    </span>
                    <span>
                        Uses <GSAPLink /> to animate the cards.
                    </span>
                    <span>
                        This is one of my first projects on <CodepenLink />.
                        Could use some performance tweaks but it works well
                        enough once the browser caches the images.
                    </span>
                </>
            ),
        },
    ],
    [
        // row 5
        {
            title: "iPad Parallax Scroll",
            path: "/ipad-parallax-scroll",
            mainLink: "https://codepen.io/gibsonmurray/pen/BaMjoaP",
            thumbnail: "/images/thumbnails/ipad-parallax-scroll.webp",
            imgs: [
                {
                    title: "iPad Parallax Scroll: Left Corner",
                    src: "/images/ipad-parallax-scroll/l.jpeg",
                },
                {
                    title: "iPad Parallax Scroll: Right Corner",
                    src: "/images/ipad-parallax-scroll/r.png",
                },
            ],
            skills: [
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#000000", "#cccccc"],
            darkColors: ["#1a1a1a", "#333333"],
            darkBorder: false,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/BaMjoaP">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        This was my first ever featured <CodepenLink />. It is a
                        very small project designed to gain more experience with{" "}
                        <GSAPLink /> and to learn how to create a scrolling
                        effect.
                    </span>
                    <span>
                        Inspired by the{" "}
                        <InlineLink
                            text="10x Designers Landing Page"
                            href="https://10xdesigners.co/"
                            className="text-indigo-900"
                            newTab
                        />
                        .
                    </span>
                </>
            ),
        },
        {
            title: "Magic Terminal",
            path: "/magic-terminal",
            mainLink: "https://codepen.io/gibsonmurray/pen/dyBXxLG",
            thumbnail: "/images/thumbnails/magic-terminal.webp",
            imgs: [
                {
                    title: "Magic Terminal: Jumbled",
                    src: "/images/magic-terminal/jumbled.png",
                },
                {
                    title: "Magic Terminal: Math",
                    src: "/images/magic-terminal/math.png",
                },
                {
                    title: "Magic Terminal: Known",
                    src: "/images/magic-terminal/known.png",
                },
            ],
            skills: [
                {
                    text: "AI",
                    href: "https://openai.com/api/",
                    className: "text-purple-500",
                    newTab: true,
                },
                {
                    text: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    className: "text-amber-400",
                    newTab: true,
                },
                {
                    text: "HTML",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    className: "text-orange-600",
                    newTab: true,
                },
                {
                    text: "CSS",
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    className: "text-sky-600",
                    newTab: true,
                },
            ],
            colors: ["#1C1D1F", "#e8e9ea"],
            darkColors: ["#0d0d0d", "#1a1a1a"],
            darkBorder: false,
            subtitle: (
                <Subtitle href="https://codepen.io/gibsonmurray/pen/dyBXxLG">
                    Codepen Demo
                </Subtitle>
            ),
            content: (
                <>
                    <span>
                        Imagine a{" "}
                        <InlineLink
                            text="Bash shell"
                            href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
                            className="text-green-600"
                            newTab
                        />{" "}
                        with knowledge of the universe and the future of what is
                        to come... ✨
                    </span>
                    <span>
                        The Magic Terminal is an interactive <CodepenLink />{" "}
                        built with hidden lore. It will answer your questions
                        but sometimes it reveals a bit more than you asked for.
                    </span>
                    <span>
                        This started off as a tiny project to practice a
                        &quot;hacker text&quot; style animation. However, as I
                        went along, I decided to make it a bit more fun.
                    </span>
                </>
            ),
        },
    ],
]

function getCurrentSeason() {
    const currentMonth = new Date().getMonth()
    if (currentMonth >= 2 && currentMonth <= 4) {
        return "Spring 🌸"
    } else if (currentMonth >= 5 && currentMonth <= 7) {
        return "Summer 🏝️"
    } else if (currentMonth >= 8 && currentMonth <= 10) {
        return "Fall 🍂"
    } else {
        return "Winter ❄️"
    }
}
