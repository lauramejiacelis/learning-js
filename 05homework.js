/*
 * Tu eres la encargada de hacer el código que devuelve la "devuelta"
 * de una maquinita de comidas
 * 
 * 
 *  product price = 3.750
 *  pay with = 50.000
 * 
 *  46.250 (20.000 x 2)
 *   6.250 (5.000  x 1)
 *   1.250 (1.000  x 1)
 *     250 (200    x 1)
 *      50 (50     x 1)
 * 
 *  50.000
 *  20.000
 *  10.000
 *  5.000
 *  2.000
 *  1.000
 *  500
 *  200
 *  100
 *  50
 */

/*
1. inputs (payWith, productPrice) y outputs ()
2. recorrerlo todo?  no
3. operador? %
4. estrategía? 
5. resultado?  ()
*/

console.log(cashBackMachine(50000, 3750))

function cashBackMachine(payWith, productPrice){
    var cashBack = payWith - productPrice;
    console.log(cashBack % 20000);
    return cashBack;
}