import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import sytles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    
    return(
        <div className={ sytles.profileContainer }>
            <img src="https://github.com/souzawes.png" alt="Wesley Souza"/>
            <div>
                <strong>Wesley Souza</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}