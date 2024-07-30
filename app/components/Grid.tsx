"use client"

import Block from "./Block"

export default function Grid() {
    return (
        <div className="grid place-items-center">
            <Block
                size="1x2"
                title="Wordle+"
                thumbnail="https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/t6z9iWc7mHHwOhCx-wordle%252B.png?w=750&h=750"
                className="-translate-x-[240px] -translate-y-[120px]"
            />
            <Block
                size="1x1"
                title="Trash Photos"
                titlePosition="top"
                thumbnail="https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/nrYlkJvOF6cn2stz-SCR-20240715-keql.png?w=750&h=750"
                className="-translate-y-[240px]"
            />
            <Block
                size="1x1"
                title="About Me"
                thumbnail="/images/prof-pic.png"
            />
            <Block
                size="2x1"
                title="Magic Terminal"
                thumbnail="https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/SMKHjHWv1mX2YYQA-dyBXxLG.custom.jpg?w=750&h=750"
                className="translate-x-[106px] translate-y-[240px]"
            />
        </div>
    )
}
