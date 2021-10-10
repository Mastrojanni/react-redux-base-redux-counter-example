import { Fragment, useState } from 'react';
// basic redux usage
import { useSelector, useDispatch } from 'react-redux';

import './CardCounter.scss';

const CardCounter = () => {
    // card state toggler
    const [counterHide, setCounterHide] = useState(false);

    const setCounterHideHandler = () => {
        setCounterHide( prevState => !prevState );
    };
    

    /* REDUX */
    const counter = useSelector( state => state.counter );
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch( { type: 'increment' } );
    };

    const increaseHandler = () => {
        dispatch( { type: 'increase', payload: 10 } );
    };

    const decrementHandler = () => {
        dispatch( { type: 'decrement' } );
    };

    const subtractHandler = () => {
        dispatch( { type: 'subtract', payload: 10 } );
    };

    const resetHandler = () => {
        dispatch( { type: 'reset' } );
    };


    return (
        <div className='card-counter--container layout-center'>
            <div className='card-counter--content layout-center'>

                <h2>counter:</h2>

                <Fragment>

                    <button className='button-md' onClick={setCounterHideHandler}>toggler</button>

                    { !counterHide &&
                        <Fragment>
                            <div className='layout-center layout-inline'>
                                <button className='button-block button-circle' onClick={decrementHandler}>-</button>

                                <p>{`< ${counter} >`}</p>

                                <button className='button-block button-circle' onClick={incrementHandler}>+</button>
                            </div>

                            <button className='button-md' onClick={resetHandler}>reset</button>

                            <button className='button-md' onClick={increaseHandler}>Add 10</button>
                            <button className='button-md' onClick={subtractHandler}>Sub -10</button>
                        </Fragment>
                    }

                </Fragment>

            </div>
        </div>
    );
};

export default CardCounter;