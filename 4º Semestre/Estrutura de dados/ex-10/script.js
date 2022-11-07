const dict = new Dictionary();

dict.set('Silas', 'silas@ftc.edu.br', '123456');
dict.set('Sabrina', 'sabrinagatinha2009@gmail.com', '123456');
dict.set('Iago', 'elnashor@gmail.com', '123456');
dict.set('Juliel', 'sabrinasato@gmail,com', '123456');
dict.set('Mateus', 'ronaldo@ftc.edu.br', '123456');
dict.set('Luis', 'augusto@ftc.edu.br', '123456');
dict.set('Lucas', 'luisrd@gmail.com', '123456');

console.log(dict.get('Silas'))
console.log(dict.keyValues());
let count= 0;

dict.forEach((k,v,t)=>{
    console.log(`${++count}`, `Nome:${k}, Email:${v}, Telefone:${t}`);
});