import React, { useState } from 'react';

import './styles.css';

import backgroundImage from '../../assets/images/background.png';
import armyImage from '../../assets/images/espada.png';
import churchImage from '../../assets/images/religiao.png';
import peopleImage from '../../assets/images/povo.png';
import moneyImage from '../../assets/images/dinheiro.png';
import jokerCard from '../../assets/images/joker.png';

export default function Main(){
    const [flip, setFlip] = useState('');
    const [noVisible, setNoVisible] = useState('no-visible');
    const [visible, setVisible] = useState('visible');

    const [army, setArmy] = useState(100);
    const [ church, setChurch] = useState(100);
    const [ people, setPeople] = useState(100);
    const [ money, setMoney] = useState(100);

    async function fliper(op) {
        setNoVisible('visible');
        setVisible('no-visible');
        setFlip('flip');
        if(op === 'op1'){
            const newValue = army - 10;
            setArmy(newValue);
        }
        else if(op === 'op2'){
            const newValue = people - 15;
            setPeople(newValue);
        }
            
    }

    function reFliper(e) {
        setFlip('');
        setNoVisible('no-visible');
        setVisible('visible');
    }

    return (
        <>
            <header className="background">
                <img src={backgroundImage} alt="background page"/>
            </header>
            <main className="card">
                <section className="card-body">
                    <div className="card-header">
                        <ul className="card-header-icons">
                            <li>
                                <img src={armyImage} alt="army"/>
                                <p>{`${army}%`}</p>
                            </li>
                            <li>
                                <img src={churchImage} alt="church"/>
                                <p>{`${church}%`}</p>
                            </li>
                            <li>
                                <img src={peopleImage} alt="people"/>
                                <p>{`${people}%`}</p>
                            </li>
                            <li>
                                <img src={moneyImage} alt="money"/>
                                <p>{`${money}%`}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="card-main">
                        <p className="text">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Mauris ac lacus id eros interdum 
                            feugiat at malesuada metus.
                        </p>
                        <div className="card-main-image">
                            <div className="card">
                                <div className={`character-image-back`}>
                                    <p className="text-card-back">
                                        Lorem ipsum dolor 
                                        sit amet, consectetur 
                                        adipiscing elit. Mauris
                                        ac lacus id.
                                    </p>
                                </div>
                                <div className={`character-image-front ${flip}`}>
                                    <img src={jokerCard} alt="character"/>
                                </div>
                            </div>
                        </div>
                        <p className="character-name">Bobo da Corte</p>
                    </div>
                    <div className="card-footer">
                        <div className={`btn-next ${noVisible}`} onClick={(e) => { 
                            reFliper(e); 
                            console.log('next')
                            }}>
                            <p>Continuar</p>
                        </div>
                        <div className={`options ${visible}`}>
                            <div className="btn-1" onClick={(e) => { fliper('op1'); console.log('click1')}}>
                                <p>Opção de escolha numero um.</p>
                            </div>
                            <div className="btn-2" onClick={(e) => { fliper('op2'); console.log('click2')}}>
                                <p>Opção de escolha numero dois.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}