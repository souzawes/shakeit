import { useState, useEffect, useContext } from 'react';
import { start } from 'repl';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown 
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={ styles.countdownContainer }>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                disabled                
                className={ styles.countdownButtton }                
                >
                    Acabouuuu!
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={ `${ styles.countdownButtton } ${ styles.countdownButttonActive }` }
                            onClick={ resetCountdown } 
                        >
                            Abandonar ciclo
                        </button>

                    )
                    :
                    (
                        <button 
                            type="button" 
                            className={ styles.countdownButtton }
                            onClick={ startCountdown }
                        >
                            Inciar ciclo
                        </button>
                    )}
                </>
            )}

            


        </div>
    );
}