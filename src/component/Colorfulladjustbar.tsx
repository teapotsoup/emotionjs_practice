
const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)


const Colorfulladjustbar  = () => {
    return <div>
        <div
            css={{
                width: '1000px',
                backgroundColor: 'green',
                [mq[0]]: {
                    backgroundColor: 'gray'
                },
                [mq[1]]: {
                    backgroundColor: 'hotpink'
                },
                [mq[2]]: {
                    backgroundColor: 'yellow'
                },
                [mq[3]]: {
                    backgroundColor: 'red'
                },
            }}
        >
            Some text!
        </div>
    </div>;
};

export default Colorfulladjustbar;