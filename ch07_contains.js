function contains(store, product) {
  return search(store, product);
}

function search(object, value) {
  for(let key in object){
    if (typeof object[key] === "object") {
      if(search(object[key], value)){
        return true;
      }
    } else if (object[key] === value) {
      return true;
    }
  };
  return false;
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

console.log(contains(almacen, "cn"));
