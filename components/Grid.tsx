"use client"

import Block from "./Block"
import { motion } from "framer-motion"

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
        <motion.div className="grid grid-cols-3 grid-rows-3 place-items-center gap-14">
            <Block
                size="1x2"
                title="Wordle+"
                thumbnail="https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/t6z9iWc7mHHwOhCx-wordle%252B.png?w=750&h=750"
                className="col-start-1 row-start-1"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={2}
            />
            <Block
                size="1x1"
                titlePosition="top"
                title="Trash Photos"
                thumbnail="https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/nrYlkJvOF6cn2stz-SCR-20240715-keql.png?w=750&h=750"
                className="col-start-2 row-start-1"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={1}
            />
            <Block
                size="1x1"
                title="About Me"
                thumbnail="/images/prof-pic.png"
                className="col-start-2 row-start-2"
                style={{ opacity: props.doneLaunch ? 1 : 0 }}
            />
            <Block
                size="2x1"
                title="Magic Terminal"
                thumbnail="https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/SMKHjHWv1mX2YYQA-dyBXxLG.custom.jpg?w=750&h=750"
                className="col-start-2 row-start-3"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                custom={1}
            />
        </motion.div>
    )
}
