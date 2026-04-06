// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================


// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

const elementName = "Factura 01";           // TODO: nombre del elemento (string)
const elementStatus = "active";         // TODO: estado actual (string: "active", "inactive", etc.)
const elementValue = 1500000;          // TODO: valor numérico para clasificar (ocupación, stock, puntaje…)
const elementType = "income";           // TODO: tipo o categoría (string)
const elementInfo = {
    detail: "Pago del cliente",
    metodo: "Transferencia"
};           // TODO: objeto con información adicional opcional (puede ser null)

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.
let classification;

if (elementValue >= 1000000) {
  classification = "Alto valor";
} else if (elementValue >= 500000) {
  classification = "Valor medio";
} else {
  classification = "Valor bajo";
}

; // TODO: implementar if/else if/else

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

; // TODO: implementar con ternario

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
let typeLabel;

switch (elementType) {
  case "income":
    typeLabel = "Ingreso";
    break;
  case "expense":
    typeLabel = "Gasto";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

; // TODO: implementar con switch

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

const displayName = elementName ?? "Sin nombre";      // TODO: elementName ?? "Sin nombre"
const infoDetail = elementInfo?.detail ?? "Sin información adicional";       // TODO: elementInfo?.detail ?? "Sin información adicional"

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";

const safeProperty = elementInfo?.metodo ?? "No especificado"; // TODO: elementInfo?.tuPropiedad ?? "valor por defecto"

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores
const formattedValue = elementValue.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP"
});

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Valor: ${formattedValue}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);


// TODO: console.log(`Nombre: ${displayName}`);
// TODO: console.log(`Estado: ${statusLabel}`);
// TODO: console.log(`Clasificación: ${classification}`);
// TODO: console.log(`Tipo: ${typeLabel}`);
// TODO: console.log(`Detalle: ${infoDetail}`);
// TODO: console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));
