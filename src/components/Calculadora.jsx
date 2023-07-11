import React, { useState } from "react";
import './Calculadora.css';
import { Container } from '@mui/material';
import { Box } from "@mui/system"

export default function Calculadora() {
    const [num, setNum] = useState(0);


    function inputNum(e) {
        const input = Number(e.target.value);
        setNum(prevNum => prevNum * 10 + input);
    }

    function limpar() {
        setNum(0)
    }



    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="wrapper">
                        <h1 className="resultado" data-testid="resultado">{num}</h1>
                    <button className="laranja" onClick={limpar}>AC</button>
                    <button className="laranja" value="+">+</button>
                    <button className="laranja">-</button>
                    <button className="laranja">/</button>
                    <button onClick={inputNum} value={1} >1</button>
                    <button onClick={inputNum} value={2} >2</button>
                    <button onClick={inputNum} value={3} >3</button>
                    <button className="laranja">*</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button className="laranja">%</button>
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button className="laranja">=</button>
                    <button onClick={inputNum} value={0}>0</button>
                    <button className="laranja">,</button>
                </div>
            </Container>
        </div>
    )
}