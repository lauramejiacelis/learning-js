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

cashBackMachine(50000, 3750)
cashBackMachine(70000, 14750)
cashBackMachine(100000, 22750)

function cashBackMachine(payWith, productPrice){
    var cashBack = payWith - productPrice;
    var bills = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50];
    var mod = 0;
    var billsQuantity =  0;
    console.log(`La devuelta es ${cashBack}`);
    for (let i = 0; i < bills.length; i++) {
        var billSelected = bills[i];
        //console.log("Current cashbak " + cashBack);
        if (cashBack >= billSelected) {
            mod = cashBack % billSelected;
            //console.log(`Billete seleccionado: ${billSelected}`);
            //console.log(`Resto ${mod}`);
            var moneyReturn = cashBack - mod;
            cashBack = cashBack - moneyReturn;
            //console.log(`Money Return ${moneyReturn}`)
            //console.log(`Nuevo CashBack ${cashBack}`)
            billsQuantity = moneyReturn/billSelected;
            if (billSelected >= 1000) {
                console.log(`Devuelvo ${billsQuantity} billetes de ${billSelected}`)
            } else {
                console.log(`Devuelvo ${billsQuantity} monedas de ${billSelected}`)
            }
        }        
    }
}