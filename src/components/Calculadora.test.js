import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculadora from './Calculadora';

test('clicar em 1, 2, 3 deve exibir 123 como resultado', () => {
    const { getByText, getByTestId } = render(<Calculadora />);
    const resultado = getByTestId('resultado');
    const botao1 = getByText('1');
    const botao2 = getByText('2');
    const botao3 = getByText('3');

    fireEvent.click(botao1);
    fireEvent.click(botao2);
    fireEvent.click(botao3);

    expect(resultado.textContent).toBe('123');
});

