function sum(a, b) {
    return a + b;
}

module.exports = { sum };

function sub(c, d) {
    return c - d;
}

module.exports = { sub };


/*
Vježba: Jest
Trajanje: cca 30min (~20:55)
1. Napišite dodatne testove za funkciju sum(). Zapitajte se - s čime se sve funkcija može pozvati i koje rezultate treba vratiti?
2. Implementirajte funkciju sub() za oduzimanje jednog broja od drugog. Exportajte funkciju van iz calc.js modula.
3. Napišite testove za funkciju sub() po uzoru na testove za funkciju sum().
---
Za domaću zadaću:
1. Pokušajte popraviti funkciju sum() tako da prolazi sve testove.
2. Pokušajte popraviti funkciju sub() tako da prolazi sve testove.
---
Tko hoće može podići rješenje na svoj GitHub :)
*/