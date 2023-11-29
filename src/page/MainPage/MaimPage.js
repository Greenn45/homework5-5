import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInputOne, changeInputTwo, divide, minus, multiply, plus} from "./calcSlice";


const MaimPage = () => {
    const dispatch = useDispatch();
    const {result} = useSelector(state => state.calc)

    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');

    const changeInputOneF = (e) => {
        setInputOne(parseFloat(e.target.value) || '');
    };
    const changeInputTwoF = (e) => {
        setInputTwo(Number(e.target.value) || '');
    };

    const plusNumbers = () => {
            dispatch(changeInputOne(inputOne));
            dispatch(changeInputTwo(inputTwo));
            dispatch(plus());
    };

    const minusNumbers = () => {
        dispatch(changeInputOne(inputOne));
        dispatch(changeInputTwo(inputTwo));
        dispatch(minus());
    };

    const multiplyNumbers = () => {
        dispatch(changeInputOne(inputOne));
        dispatch(changeInputTwo(inputTwo));
        dispatch(multiply());
    };

    const diviideNumbers = () => {
        dispatch(changeInputOne(inputOne));
        dispatch(changeInputTwo(inputTwo));
        dispatch(divide());
    }



    return (
        <div>
            <input type="number"
                    value={inputOne}
                    onChange={changeInputOneF}
                    required/>
            <input type="number"
                    value={inputTwo}
                    onChange={changeInputTwoF}
                    required/>
            <button onClick={plusNumbers}>Plus</button>
            <button onClick={minusNumbers}>Minus</button>
            <button onClick={multiplyNumbers}>Multiply</button>
            <button onClick={diviideNumbers}>Divide</button>

            <div>Sum:{result} </div>
        </div>
    );
};

export default MaimPage;