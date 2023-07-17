
const ventasJuana = [];
const ventasPedro = [];
let resultado = "";

const registros = {
    "juana": {
      200: [],
      180: [],
      160: [],
      150: []
    },
    "pedro": {
      200: [],
      180: [],
      160: [],
      150: []
    }
  };




function dineroRecolectado() {
    let vendedor = document.getElementById("nombreVendedor").value;
    let productoVendido = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;

    let cantidadTotal = productoVendido * cantidad;

    if (vendedor == "juana") {
        ventasJuana.push(parseInt(cantidadTotal));
    } else {
        ventasPedro.push(parseInt(cantidadTotal));
    }
    //console.log(vendedor, productoVendido);
    const sumaJuana = ventasJuana.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
    }, 0);

    const sumaPedro = ventasPedro.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
    }, 0);
    //console.log(sumaJuana);
    //console.log(sumaPedro);
    document.getElementById("sumaJuana").value = sumaJuana;
    document.getElementById("sumaPedro").value = sumaPedro;

    if (sumaJuana > sumaPedro) {
        resultado = "Juana";
    } else if (sumaJuana < sumaPedro) {
        resultado = "Pedro";
    } else if (sumaJuana == sumaPedro) {
        resultado = ("Empate en ventas");
    }

    document.getElementById("resultado").value = resultado;

    const registrosVendedor = registros[vendedor];

  if (registrosVendedor.hasOwnProperty(productoVendido)) {
    registrosVendedor[productoVendido].push(parseInt(cantidad));
    //console.log(registrosVendedor[productoVendido]);
  }

  const sumaAquaJuana = registros.juana[200].reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
}, 0);

 const sumaEmocionJuana = registros.juana[180].reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
}, 0);

const sumaAlegriaJuana = registros.juana[160].reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
}, 0);

const sumaFrescuraJuana = registros.juana[150].reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
}, 0);

const sumaAquaPedro = registros.pedro[200].reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
}, 0);

 const sumaEmocionPedro = registros.pedro[180].reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
}, 0);

const sumaAlegriaPedro = registros.pedro[160].reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
}, 0);

const sumaFrescuraPedro = registros.pedro[150].reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
}, 0);

  document.getElementById("aquaJuana").value = sumaAquaJuana;
  document.getElementById("emocionJuana").value = sumaEmocionJuana;
  document.getElementById("alegriaJuana").value = sumaAlegriaJuana;
  document.getElementById("frescuraJuana").value = sumaFrescuraJuana;

  document.getElementById("aquaPedro").value = sumaAquaPedro;
  document.getElementById("emocionPedro").value = sumaEmocionPedro;
  document.getElementById("alegriaPedro").value = sumaAlegriaPedro;
  document.getElementById("frescuraPedro").value = sumaFrescuraPedro; 
 
}


















