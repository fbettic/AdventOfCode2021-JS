// ---------- Challenge 01 ----------

function countSheep(ovejas) {
  var ovejasFiltradas = ovejas.filter(
    (oveja) =>
      oveja.color == "rojo" &&
      oveja.name.toLowerCase().includes("a") &&
      oveja.name.toLowerCase().includes("n")
  );
  return ovejasFiltradas;
}

// ---------- Challenge 01 ----------

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

console.log(contarOvejas(ovejas));
