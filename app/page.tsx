import Row from "./components/Row";
import { bubbles } from "./bubbles";
import Bubble from "./components/Bubble";

function Home() {
    const rowSizes = [1];
    const rowOffset = 20;

    return (
        <main className="relative flex h-screen w-screen flex-col items-center justify-center">
            <div className="absolute flex h-[10000px] w-[10000px] cursor-grab flex-col items-center justify-center active:cursor-grabbing">
                {rowSizes.map((cols, i) => {
                    const offset =
                        (Math.floor(rowSizes.length / 2) - i) * rowOffset;
                    return (
                        <Row key={i} offset={offset}>
                            {bubbles.map(() => {
                                return Array.from({ length: cols })
                                    .map((_, j) => {
                                        return bubbles[i * cols + j];
                                    })
                                    .map((bubble, j) => {
                                        return (
                                            <Bubble
                                                key={j}
                                                link={bubble.link}
                                                thumbnail={bubble.thumbnail}
                                                color={bubble.color}
                                            />
                                        );
                                    });
                            })}
                        </Row>
                    );
                })}
            </div>
        </main>
    );
}

export default Home;
