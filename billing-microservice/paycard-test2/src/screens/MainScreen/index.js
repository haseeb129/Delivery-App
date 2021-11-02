import React, {useState, useRef, useCallback} from 'react';
import CForm from './components/form';
import Card from './components/card';
import axios from 'axios'
import qs from 'qs';
import {stripePublishKey, stripTokenUrl} from "../../util/Stripe";


const initialState = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'FULL NAME',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
    isCardFlipped: false,
};


const MainScreen = () => {
    const [state, setState] = useState(initialState);
    const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

    const updateStateValues = useCallback(
        (keyName, value) => {
            setState({
                ...state,
                [keyName]: value || initialState[keyName],
            });
        },
        [state]
    );

    // References for the Form Inputs used to focus corresponding inputs.
    let formFieldsRefObj = {
        cardNumber: useRef(),
        cardHolder: useRef(),
        cardDate: useRef(),
        cardCvv: useRef(),
    };

    let focusFormFieldByKey = useCallback((key) => {
        formFieldsRefObj[key].current.focus();
    });

    // This are the references for the Card DIV elements.
    let cardElementsRef = {
        cardNumber: useRef(),
        cardHolder: useRef(),
        cardDate: useRef(),
    };

    let onCardFormInputFocus = (_event, inputName) => {
        const refByName = cardElementsRef[inputName];
        setCurrentFocusedElm(refByName);
    };

    let onCardInputBlur = useCallback(() => {
        setCurrentFocusedElm(null);
    }, []);

    let doSubmit = () => {
        createToken();
    };

    let createToken = () => {
        const cardNum = state.cardNumber.split(' ').join('');
        let cardDetails = {
            'card[number]': cardNum,
            'card[exp_month]': state.cardMonth,
            'card[exp_year]': state.cardYear,
            'card[cvc]': state.cardCvv,
            'card[name]': state.cardHolder
        }

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            params: {'key': stripePublishKey},
            data: qs.stringify(cardDetails),
            url: stripTokenUrl,
        };
        axios(options).then(res=>{
            console.log(res.data)
        }).catch(err => {
            console.log(err.response)
        })

    }


    return (
        <div className="wrapper">
            <CForm
                handleSubmit={doSubmit}
                cardMonth={state.cardMonth}
                cardYear={state.cardYear}
                onUpdateState={updateStateValues}
                cardNumberRef={formFieldsRefObj.cardNumber}
                cardHolderRef={formFieldsRefObj.cardHolder}
                cardDateRef={formFieldsRefObj.cardDate}
                onCardInputFocus={onCardFormInputFocus}
                onCardInputBlur={onCardInputBlur}
            >
                <Card
                    cardNumber={state.cardNumber}
                    cardHolder={state.cardHolder}
                    cardMonth={state.cardMonth}
                    cardYear={state.cardYear}
                    cardCvv={state.cardCvv}
                    isCardFlipped={state.isCardFlipped}
                    currentFocusedElm={currentFocusedElm}
                    onCardElementClick={focusFormFieldByKey}
                    cardNumberRef={cardElementsRef.cardNumber}
                    cardHolderRef={cardElementsRef.cardHolder}
                    cardDateRef={cardElementsRef.cardDate}
                />
            </CForm>
        </div>
    );
};

export default MainScreen;