// fn que se pasa como parametro para que otra función me la ejecute

// 1. por asbtracción
// 2. asincronía (servidores, base de datos, API)

function callback(param) {
  // usar ese parametro para lo que yo quiera
  console.log(param);
}

function a(cb) {
  // llamo el callback en algún momento
  cb("algún parametro");
}

a(callback);
