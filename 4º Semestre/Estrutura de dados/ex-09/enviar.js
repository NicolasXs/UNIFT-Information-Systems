const frutas = new Set();

frutas.add("uva");
frutas.add("manga");
frutas.add("banana");
frutas.add("morango");
frutas.add("melancia");

frutas.delete("melancia");

console.log(frutas);

const verduras = new Set();

verduras.add("Couve");
verduras.add("Salsa");
verduras.add("Alface");
verduras.add("Coentro");
verduras.add("Cenoura");

console.log(verduras);


const feiraDaSemana = new Set();

console.log(feiraDaSemana.union(frutas).union(verduras).values());


