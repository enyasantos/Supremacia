import React, { useState, useEffect } from 'react';

import './styles.css';

import backgroundImage from '../../assets/images/background.png';
import armyImage from '../../assets/images/espada.png';
import churchImage from '../../assets/images/religiao.png';
import peopleImage from '../../assets/images/povo.png';
import moneyImage from '../../assets/images/dinheiro.png';
import jokerCard from '../../assets/images/joker.png';

import { 
    frases, 
    opcoes, 
    consequencias, 
    personagens, 
    personagensNomes, 
    colorBackgound 
} from '../../services/game';

export default function Main(){
    const [flip, setFlip] = useState('');
    const [noVisible, setNoVisible] = useState('no-visible');
    const [visible, setVisible] = useState('visible');
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const [phrase, setPhrase] = useState('');

    const [ character, setCharacter ] = useState();
    const [ characterName, setCharacterName ] = useState('');
    const [ characterBackground, setCharacterBackground ] = useState('');

    const [ army, setArmy ] = useState(50);
    const [ church, setChurch ] = useState(50);
    const [ people, setPeople ] = useState(50);
    const [ money, setMoney ] = useState(50);

    const [ numRandom, setNumRandom ] = useState(0);

    const [ changeArmy, setChangeArmy ] = useState('alterado-hidden');
    const [ changeChurch, setChangeChurch ] = useState('alterado-hidden');
    const [ changePeople, setChangePeople ] = useState('alterado-hidden');
    const [ changeMoney, setChangeMoney ] = useState('alterado-hidden');

    async function fliper(op) {
        setNoVisible('visible');
        setVisible('no-visible');
        setFlip('flip');
        if(op === 'op1'){
            setArmy(army + consequencias[numRandom][0][0]);
            setChurch(church + consequencias[numRandom][0][1]);
            setPeople(people + consequencias[numRandom][0][2]);
            setMoney(money + consequencias[numRandom][0][3]);
        }
        else if(op === 'op2'){
            setArmy(army + consequencias[numRandom][1][0]);
            setChurch(church + consequencias[numRandom][1][1]);
            setPeople(people + consequencias[numRandom][1][2]);
            setMoney(money + consequencias[numRandom][1][3]);
        }
        createRandom();
    }

    function changeItensHeader(op) {
        if(op === 'op1'){
            if(consequencias[numRandom][0][0] !== 0)
                setChangeArmy('alterado');
            if(consequencias[numRandom][0][1] !== 0)
                setChangeChurch('alterado');
            if(consequencias[numRandom][0][2] !== 0)
                setChangePeople('alterado');
            if(consequencias[numRandom][0][3] !== 0)
                setChangeMoney('alterado');
        } else if(op === 'op2'){
            if(consequencias[numRandom][1][0] !== 0)
                setChangeArmy('alterado');
            if(consequencias[numRandom][1][1] !== 0)
                setChangeChurch('alterado');
            if(consequencias[numRandom][1][2] !== 0)
                setChangePeople('alterado');
            if(consequencias[numRandom][1][3] !== 0)
                setChangeMoney('alterado');
        }
    }

    function clearChangeItensHeader(op) {
        setChangeArmy('alterado-hidden');
        setChangeChurch('alterado-hidden');
        setChangePeople('alterado-hidden');
        setChangeMoney('alterado-hidden');
    }

    function next() {
        setFlip('');
        setNoVisible('no-visible');
        setVisible('visible');
    }

    function createRandom() {
        const num = Math.floor(Math.random() * 10);
        setNumRandom(num);
        console.log(num);
    }

    useEffect(() => {
        setPhrase(frases[numRandom]);
        setOptionOne(opcoes[numRandom][0]);
        setOptionTwo(opcoes[numRandom][1]);
        setCharacter(personagens[numRandom]);
        setCharacterName(personagensNomes[numRandom]);
        setCharacterBackground(colorBackgound[numRandom]);
    }, [createRandom]);

    return (
        <>
            <header className="background">
                <img src={backgroundImage} alt="background page"/>
            </header>
            <main className="card">
                <section className="card-body">
                    <div className="card-header">
                        <ul className="card-header-icons">
                            <li className={changeArmy}>
                                <img src={armyImage} alt="army"/>
                                <p>{`${army}%`}</p>
                            </li>
                            <li className={changeChurch}>
                                <img src={churchImage} alt="church"/>
                                <p>{`${church}%`}</p>
                            </li>
                            <li className={changePeople}>
                                <img src={peopleImage} alt="people"/>
                                <p>{`${people}%`}</p>
                            </li>
                            <li className={changeMoney}>
                                <img src={moneyImage} alt="money"/>
                                <p>{`${money}%`}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="card-main">
                        <p className={`text`}>
                            {phrase}
                        </p>
                        <div className="card-main-image">
                            <div className="card">
                                {/*<div className={`character-image-back`}>
                                    <p className="text-card-back">
                                        {phrase}
                                    </p>
                                </div>*/}
                                <div className={`character-image-front`} style={{ background: characterBackground }}>
                                    <img src={character} alt="character"/>
                                </div>
                            </div>
                        </div>
                        <p className={`character-name`}>{characterName}</p>
                    </div>
                    <div className="card-footer">
                        {/*<div className={`btn-next ${noVisible}`} onClick={(e) => { 
                            next(); 
                            console.log('next')
                            }}>
                            <p>Continuar</p>
                        </div>*/}
                        <div className={`options`}>
                            <div 
                                className="btn-1" 
                                onClick={(e) => { fliper('op1'); }}
                                onMouseEnter={() => changeItensHeader('op1')}
                                onMouseLeave={() => clearChangeItensHeader('op1')}
                            >
                                <p>{optionOne}</p>
                            </div>
                            <div 
                                className="btn-2" 
                                onClick={(e) => { fliper('op2'); }}
                                onMouseEnter={() => changeItensHeader('op2')}
                                onMouseLeave={() => clearChangeItensHeader('op2')}
                            >
                            <p>{optionTwo}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}