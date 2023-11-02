import { Container, Layout } from "./styles.tsx";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const EndGame = () => {
    const navigate = useNavigate();

    const [playerName, setPlayerName] = useState('')
    const [timer, setTimer] = useState('00')

    useEffect(() => {
        checkPlayerName();
    }, []);

    const checkPlayerName = () => {
        if (
            !localStorage.getItem('player')
            || !localStorage.getItem('timer')
        ) {
            navigate('/');
            return;
        } else {
            const localTimer = localStorage.getItem('player') ?? '';
            setPlayerName(localTimer);

            const timer = localStorage.getItem('timer') ?? '';
            setTimer(timer);

            localStorage.removeItem('timer');
        }
    }

    const convertSeconds = () => {
        const minutes = Math.floor(+timer / 60);
        const seconds = +timer % 60;

        if (minutes === 0) return `${seconds}s`;

        return `${minutes}m${seconds}s`;
    }

    return (
        <Layout>
            <Container>
                <h3>
                    Parabéns {playerName}!<br />Seu tempo de jogo foi: {convertSeconds()}
                </h3>
                <p>
                    Você deseja jogar novamente?
                </p>

                <footer>
                    <button onClick={() => navigate('/game')}>
                        Sim
                    </button>
                    <button onClick={() => navigate('/')}>
                        Não
                    </button>
                </footer>
            </Container>
        </Layout>
    );
};

export default EndGame;
