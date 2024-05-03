import _ from "underscore"
// Esta función crea un nuevo deck

/**
 * 
 * @param {Array} tiposDeCarta 
 * @param {Array} TiposEspeciales 
 * @returns {Array}
 */
export const crearDeck = (tiposDeCarta, TiposEspeciales) => {

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}