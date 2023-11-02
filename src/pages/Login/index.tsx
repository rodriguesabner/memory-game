import {Form, Header, Input, Layout, LoginButton} from "./styles.tsx";
import Logo from "../../assets/logo.png";
import Brain from "../../assets/cerebro.jpg";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import 'animate.css';

const Login = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [disabledButton, setDisabledButton] = useState<boolean>(true)

    useEffect(() => {
        if (name.length <= 3) {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
    }, [name]);

    const goToGame = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name) return alert('Digite seu nome');

        localStorage.setItem('player', name);
        navigate("/game");
    }

    return (
        <Layout>
            <Form onSubmit={(e) => goToGame(e)}>
                <Header>
                    <img className="animate__animated animate__pulse animate__infinite" src={Logo} alt="logo"/>
                    <img className="animate__animated animate__pulse animate__infinite" src={Brain} alt="brain icon"/>
                    <h1>Jogo da Memória</h1>
                </Header>

                <Input placeholder="Qual o seu nome?" value={name} onChange={(e) => setName(e.target.value)}/>
                <LoginButton type="submit" disabled={disabledButton}>
                    Jogar
                </LoginButton>
            </Form>
        </Layout>
    );
};

export default Login;
