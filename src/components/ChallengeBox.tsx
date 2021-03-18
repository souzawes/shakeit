import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activieChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function hadleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={ styles.challengeBoxContainer }>
           { activieChallenge ? (
               <div className={ styles.challengeActive }>
                   <header>Ganhe {activieChallenge.amount} xp</header>

                   <main>
                       <img src={`icons/${activieChallenge.type}.svg`} alt=""/>
                       <strong>Novo desafio</strong>
                       <p>{activieChallenge.description}</p>
                   </main>

                   <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={hadleChallengeSucceeded}
                        >
                            Completei
                        </button>
                   </footer>
               </div>
           )            
           : 
           (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo para receber a próxima tarefa!
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level-up"/>
                        Bora upar, é só completar os desafios jovem!
                    </p>
                </div>
           )}
        </div>
    )
}