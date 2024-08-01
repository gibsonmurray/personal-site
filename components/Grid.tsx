"use client"

import Block from "./Block"
import { motion } from "framer-motion"
import profPic from "../public/images/prof-pic.svg"

export default function Grid(props: { doneLaunch: boolean }) {
    const blockVariants = {
        hidden: {
            scale: 0,
        },
        show: (custom: number) => ({
            scale: 1,
            transition: {
                delay: custom * 0.1,
            },
        }),
    }

    return (
        <motion.div className="grid grid-cols-9 grid-rows-9 place-items-center gap-14">
            <Block
                size="1x1"
                title="About Me"
                thumbnail={profPic}
                className="col-start-5 row-start-5"
                style={{ opacity: props.doneLaunch ? 1 : 0 }}
                gray
            />
            <Block
                size="1x1"
                title="Trash Photos"
                thumbnail="/images/trash-photos.jpg"
                className="col-start-5 row-start-4"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={1}
                gray
            />
            <Block
                size="2x1"
                title="Jumpy Cards"
                thumbnail="/images/jumpy-cards.jpg"
                className="col-start-6 row-start-4"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={2}
                gray
            />
            <Block
                size="1x1"
                title="Parallax Seasons"
                thumbnail="/images/parallax-seasons.jpg"
                className="col-start-6 row-start-5"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={3}
                gray
            />
            <Block
                size="2x1"
                title="Magic Terminal"
                thumbnail="/images/magic-terminal.jpg"
                className="col-start-5 row-start-6"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={4}
                gray
            />
            <Block
                size="2x2"
                title="Parallax Devices"
                thumbnail="/images/parallax-devices.jpg"
                className="col-start-3 row-start-4"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={5}
                gray
            />
            <Block
                size="2x1"
                title="Sticky Notes"
                thumbnail="/images/sticky-notes.jpg"
                className="col-start-3 row-start-3"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={6}
                gray
            />
            <Block
                size="2x2"
                title="Wordle+"
                thumbnail="/images/wordle-plus.jpg"
                className="col-start-7 row-start-5"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={7}
                gray
            />
            <Block
                size="1x1"
                title="iPad Parallax Scroll"
                thumbnail="/images/ipad-parallax-scroll.jpg"
                className="col-start-5 row-start-7"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={8}
                gray
            />
            <Block
                size="2x2"
                title="Dune Thumper"
                thumbnail="/images/dune-thumper.jpg"
                className="col-start-3 row-start-6"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={9}
                gray
            />
            <Block
                size="2x1"
                title="iPhone Widget Flood"
                thumbnail="/images/iphone-widget-flood.jpg"
                className="col-start-7 row-start-3"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={10}
                gray
            />
            <Block
                size="1x1"
                title="Barrage"
                thumbnail="/images/barrage.jpg"
                className="col-start-2 row-start-4"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={10}
                gray
            />
            <Block
                size="1x1"
                title="Apple Watch Gestures"
                thumbnail="/images/apple-watch-gestures.jpg"
                className="col-start-2 row-start-7"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={11}
                gray
            />
            <Block
                size="2x1"
                title="Landing Page Hero"
                thumbnail="/images/landing-page-hero.jpg"
                className="col-start-6 row-start-7"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={12}
                gray
            />
        </motion.div>
    )
}
