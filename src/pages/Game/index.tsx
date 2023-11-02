import { Grid, Header, Layout } from "./styles.tsx";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {
    const navigate = useNavigate();

    const gridRef = useRef<any>(null);
    const [playerName, setPlayerName] = useState('')
    const [timer, setTimer] = useState('00')
    const [isStarted, setIsStarted] = useState(false)

    let firstCard: any = '';
    let secondCard: any = '';

    useEffect(() => {
        loadGame();
    }, []);

    useEffect(() => {
        const disabledCards = document.querySelectorAll('.disabled-card');
        const interval = setInterval(() => {
            const currentTime = +timer;
            setTimer(currentTime + 1 < 10 ? `0${currentTime + 1}` : `${currentTime + 1}`);
        }, 1000);

        setIsStarted(true);

        if (disabledCards.length === 20) {
            clearInterval(interval);
            localStorage.setItem('timer', timer);
            navigate('/end-game');
        }

        return () => {
            clearInterval(interval);
        }
    }, [timer]);

    const loadGame = () => {
        checkPlayerName();

        if (!isStarted) {
            sortCards();
        }
    }

    const checkPlayerName = () => {
        if (!localStorage.getItem('player')) {
            navigate('/');
            return;
        } else {
            const player = localStorage.getItem('player') ?? '';
            setPlayerName(player);
        }
    }

    const sortCards = () => {
        const characters = [
            'beth',
            'jerry',
            'jessica',
            'morty',
            'pessoa-passaro',
            'pickle-rick',
            'rick',
            'summer',
            'meeseeks',
            'scroopy',
        ];

        const duplicateCharacters = [...characters, ...characters];
        const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

        shuffledArray.forEach((character) => {
            const card = createCard(character);
            gridRef.current.appendChild(card);
        });
    }

    const createCard = (character: string) => {
        const card = createElement('div', 'card');
        const front = createElement('div', 'face front');
        const back = createElement('div', 'face back');

        front.style.backgroundImage = `url('../../assets/${character}.png')`;

        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', revealCard);
        card.setAttribute('data-character', character)

        return card;
    }

    const revealCard = (event: Event) => {
        const target = event.target as any;

        if (target.parentNode.className.includes('reveal-card')) {
            return;
        }

        if (firstCard === '') {
            target.parentNode.classList.add('reveal-card');
            firstCard = target.parentNode;
        } else if (secondCard === '') {
            target.parentNode.classList.add('reveal-card');
            secondCard = target.parentNode;

            checkCards();
        }
    }

    const createElement = (tag: string, className: string) => {
        const element = document.createElement(tag);
        element.className = className;
        return element;
    }

    const checkCards = () => {
        const firstCharacter = firstCard.getAttribute('data-character');
        const secondCharacter = secondCard.getAttribute('data-character');

        if (firstCharacter === secondCharacter) {
            firstCard.firstChild.classList.add('disabled-card');
            secondCard.firstChild.classList.add('disabled-card');

            firstCard = '';
            secondCard = '';
        } else {
            setTimeout(() => {
                firstCard.classList.remove('reveal-card');
                secondCard.classList.remove('reveal-card');

                firstCard = '';
                secondCard = '';
            }, 500);
        }
    }

    const convertSeconds = () => {
        const minutes = Math.floor(+timer / 60);
        const seconds = +timer % 60;

        if (minutes === 0) return `${seconds}s`;

        return `${minutes}m ${seconds}s`;
    }

    return (
        <Layout>
            <Header>
                <span className="player">{playerName}</span>
                <span>Tempo: <span className="timer">{convertSeconds()}</span></span>
            </Header>

            <Grid ref={gridRef} />
        </Layout>
    );
};

export default Game;
