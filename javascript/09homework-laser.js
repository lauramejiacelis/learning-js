/*  
En un plano cartesiano ubicado en el punto de origen [0,0]
Calcular el número mínimo de líneas o lasers que se necesitan 
para destruir todas las estatuas, teniendo en cuenta
que son de cristal y un láser puede atravesar dos
estatuas
*/

var statues = [[-1,1],[-2,2],[2,5],[3,6],[4,-1],[-6,-6],[-3,-3]]
var lara = [0,0]

var laserMap = statues.map(function (x) {
    return x;
})

function lasers(array1) {
    var slope = [];
    for (let i = 0; i < array1.length; i++) {
        var coord = array1[i];
        console.log(`posición 0: ${coord[0]} posición 1: ${coord[1]}`)
        var m = coord[1] / coord[0];//var m = ((y1-y0)/(x1-x0));
        console.log(`pendiente ${m}`)
        slope.push(m);
    }

    //console.log(`Array of Slopes: ${slope}`);
    console.log(slope)
}

lasers(statues)
//console.log(laserMap)