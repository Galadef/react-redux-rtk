import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter'

export const CounterApp = () => {
    const { counter } = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <>
            <p>count is: {counter}</p>
            <div className="card">
                <button onClick={() => { dispatch(increment()) }}>
                    increment
                </button>
            </div>
            <div className="card">
                <button onClick={() => { dispatch(decrement()) }}>
                    decrement
                </button>
            </div>
            <div className="card">
                <button onClick={() => { dispatch(incrementBy(2)) }}>
                    by 2
                </button>
            </div>
        </>
    )
}
