
export default function CounterButton(props) {
    const { count, setCount } = props;

    function increaseCount() {
        let changedCount = count + 1;
        setCount(changedCount);
    }
    function decreaseCount() {
        let changedCount = count - 1;
        setCount(changedCount);
    }

    return (
        <div id="counter-button">
            <button className="button-deco1" onClick={increaseCount}>+</button>
            <button className="button-deco2" onClick={decreaseCount}>-</button>
        </div>
    )
}