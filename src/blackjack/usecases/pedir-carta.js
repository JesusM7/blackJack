
/**
 * retorna una carta aleatoria del deck y la elimina
 * @returns {string}
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
