/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y 
separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
*/
stringSeparator('Ana')
stringSeparator('AyiyiyAAyyy') 

function stringSeparator(a){
    let separated= Array.from(a, char=> char.toUpperCase()+" ");
    let separado= separated.filter(separated => separated.trim().length > 0);
    separated = separado.toString().slice(0, -1);
    console.log(separated)
    return separated
    }; 
/*Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. 
Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/
numeroPalabras('Amigo mio solo tu encuentras leña')  

function numeroPalabras(a){
    let palabras = a.trim().split(' ').filter(palabra => palabra !== '').length;
    console.log(palabras);  
    return palabras;    
}

/*Entregad vuestra solución por campus virtual. Si os da tiempo, pensad varias maneras de resolverlo y enviad vuestras soluciones. 
Podéis enviar una primera solución y luego añadir otras en comentarios.*/