// - - COMPRA DE ACCIONES EN EL MERCADO SECUNDARIO (MS) ONLINE - -

let company = 0;
let price = 0;
let quantity = 0;
let maxQuantity = 0;

// EL SERVICIO TIENE UN COSTO DEL 5% DE LA COMPRA TOTAL.
const fee = x => x * 1.05

// SE ELIJE UNA DE LAS 4 EMPRESAS. CADA UNA TIENE UN PRECIO Y UNA CANTIDAD LIMITADA DE COMPRA.
function buy() {
    while (company == 0 || company > 4 || !company) {
        company = Number(
            prompt(
                "Ingresa un número para elegir la empresa que deseas comprar acciones: \n 1 - Broota INC. = $200 CLP x acción (Max. 5.600 acciones) \n 2 - Farmaloop LLC = $180 CLP x acción (Max. 7.200 acciones) \n 3 - Ecopass Inc. = $210 CLP x acción (Max. 4.300 acciones) \n 4 - Kidsbook Enterprise = $60 CLP x acción (Max. 9.550 acciones)")
        );
    }
    switch (company) {
        case 1:
            company = "Broota INC";
            maxQuantity = 5600;
            price = 200;
            break;
        case 2:
            company = "Farmaloop LLC";
            maxQuantity = 7200;
            price = 180;
            break;
        case 3:
            company = "Ecopass INC";
            maxQuantity = 4300;
            price = 210;
            break;
        case 4:
            company = "Kidsbook Enterprise";
            maxQuantity = 9550;
            price = 60;
            break;
    }

    // ANTES DE COMPRAR, INFORMA LA MAXIMA COMPRA DISPONIBLE DE LA EMPRESA ELEGIDA.
    while (quantity === 0 || !quantity || quantity > maxQuantity) {
        alert(`La cantidad de acciones a comprar no puede ser mayor a ${maxQuantity}.`)
        quantity = Number(
            prompt("Empresa elegida: " + company + "\n ¿Cuántas acciones deseas comprar?")
        );
    }
}

buy(); // SE EJECUTA LA FUNCION

let result = price * quantity;

// SI ES COMPRA PARCIAL, SE INDICA CUANTAS QUEDAN DISPONIBLES. SI ES COMPRA TOTAL DE ACCIONES, SE MUESTRA QUE LAS COMPRO TODAS.
let messagePartial = `Compraste ${quantity} acciones de ${company} a $ ${price} CLP. \n Valor a pagar + comisión 5%: $ ${fee(result)} \n Quedan ${maxQuantity - quantity} acciones disponibles.`
let messageAll = `Compraste todas las acciones de ${company} a $ ${price} CLP. \n Valor a pagar + comisión 5%: $ ${fee(result)}`

fee(result);

if (quantity != maxQuantity) {
    alert(messagePartial);
} else { alert(messageAll); }