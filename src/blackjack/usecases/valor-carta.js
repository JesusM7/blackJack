
/**
 * recibe el valor de la carta y valida si tiene letra o no para retornar su valor
 * @param {string} carta 
 * @returns {number}
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}