import { Fragment, useState } from 'react';
// basic redux usage
import { useSelector, useDispatch } from 'react-redux';
import { sliceCounterActions } from '../../core/store';

import './CardCounter.scss';


const CardCounter = () => {
    // card state toggler
    const [counterHide, setCounterHide] = useState(false);

    const setCounterHideHandler = () => {
        setCounterHide( prevState => !prevState );
    };
    

    /* REDUX TOOLKIT */
    //    localState            =           stateSlice or stateVar (generally Slice)
    const counter = useSelector( (state) => state.stateSliceCounter.counter );
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch( sliceCounterActions.increment() );
    };

    const increaseHandler = () => {
        dispatch( sliceCounterActions.increase(10) );
    };

    const decrementHandler = () => {
        dispatch( sliceCounterActions.decrement() );
    };

    const subtractHandler = () => {
        dispatch( sliceCounterActions.subtract(10) );
    };

    const resetHandler = () => {
        dispatch( sliceCounterActions.reset() );
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