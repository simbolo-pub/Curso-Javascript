// DESAFIO PRIMER ENTRGABLE

// CORE

let lifeBoss = 100
let warriorLife = 50

function reglas() {
    alert("welcome guerrero, Estas a punto de iniciar una batalla con Κοάλεμος");
    let player = prompt("¿Cual es tu nombre guerrero?");
    alert(`Un placer conocerte ${player}, veras... necesito que termines con Κοάλεμος para que yo pueda hacer mi entrega en CODERHOUSE`);
    alert("Asi que te mostrare como hacerlo");
    alert("El juego es muy simple, tienes que derrotar a Κοάλεμος usando el poder de sophia");
    alert("Κοάλεμος tiene una vida de 100 puntos");
    alert("Tu tienes 3 opciones de ataque")
    alert(`Tu primer ataque es un ataque fisico que quita 10 puntos de vida. para usarlo tendras que escribir "A"
    Tu segundo ataque es un hechizo que quita 20 puntos de vida y para usarlo escribiras "B".
    Tambien tienes 1 potenciador, con el que podras fortificar tu ataque.
    Con el potenciador "S", invocaras un compañero que multiplicara tu daño x3.
    `);
    let inicio = prompt("¿Lista para empezar?")

    while (true) {
        if (inicio == "si" || inicio == "yes") {
            break
        }
        alert("¿seguro que no quieres continuar?");
        inicio = prompt("Entraste en un espacio infinito por cobarde... ¿Listo para empezar?");
    }
}

function juego() {
    alert("vale comenzemos...");


    let ataquewarrior = prompt(`Carga tu ataque, recuerda...
Tu primer ataque es un ataque fisico que quita 10 puntos de vida. para usarlo tendras que escribir "A"
    Tu segundo ataque es un hechizo que quita 20 puntos de vida y para usarlo escribiras "B".
    Tambien tienes 1 potenciador, con el que podras fortificar tu ataque.
    Con el potenciador "S", invocaras un compañero que multiplicara tu daño x3.`);

    while (ataquewarrior !== 1) {
        ataquewarrior = prompt("Escoje un ataque...")
}
switch (ataquewarrior) {
    case "A":
        alert("atacaras con 10 puntos");
        let aWinner = prompt("Hay algo que, aunque te pertenezca, la gente siempre lo utiliza más que tú. ¿Qué es?")
        break;
    case "B":
        alert("atacaras con 20 puntos");
        break;
    case "S":
        alert("atacaras con 20 puntos");
        break;
}

}
//if (ataquewarrior == "Tu nombre") {lifeBoss - 10}


// for (lifeBoss = 100; lifeBoss <= 0; )


reglas()
juego()