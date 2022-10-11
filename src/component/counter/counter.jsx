import { useSelector, useDispatch } from "react-redux"
import { counterDecrementation, counterIncrementation, counterReset } from "../../store/action/counter-action"

const Counter = (props) => {

    const { incr } = props

    // Pour exécuter les actions du store
    const dispatch = useDispatch()

    // Pour récupérer les valeurs du store
    const counter = useSelector(state => state.counter.value)

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(counterIncrementation(incr))}>+</button>
            <button onClick={() => dispatch(counterDecrementation(incr))}>-</button>
            <button onClick={() => dispatch(counterReset())}>Reset</button>
        </>
    )
}

export default Counter