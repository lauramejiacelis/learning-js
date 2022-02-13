/*
Dadas las coordenadas de unas estatuas y partiendo que desde el punto cero se lanza un láser para destruir cada estatua

Calcular el número mínimo de líneas que se necesitan para destruir todas las estatuas, teniendo en cuenta que las estatuas son de cristal y un mismo láser puede destruir a dos de ellas */

var statues = [[-1,1],[-2,2],[2,5],[3,6],[4,-1],[-6,-6],[-3,-3]];
var lara=[0,0];
var slope = [];

/*var laserMap = statues.map(function (x) {
    return x;
})*/

function laser(locations) {
    for (let i = 0; i < locations.length; i++) {
        var coord = locations[i];
        //console.log(`coordenada 0: ${coord[0]} coordenada 1: ${coord[1]}`);
        var m = (coord[1]-lara[1])/(coord[0]-lara[0]);// var m = ((y1-y0)/((x1-x0)))
        //console.log(`pendiente ${m}`)
        slope.push(m);
    }

    console.log(slope);
    return slope;
}

//console.log(laserMap)
var lasers = laser(statues);
var uniqs = lasers.filter(function (item, index, array) {
    return array.indexOf(item) === index;
})

console.log(`Minimun of lasers need: ${uniqs.length}`);
