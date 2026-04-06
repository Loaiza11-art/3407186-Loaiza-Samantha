// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: [Tu dominio asignado]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// TODO: Define las constantes globales de tu dominio
// Ejemplo: const TAX_RATE = 0.19;
//          const CURRENCY = "USD";
//          const DOMAIN_NAME = "Mi Dominio";
const DOMAIN_NAME = "Contabilidad PYME";
const VALUE_LABEL = "monto"; // Ej: "precio", "cantidad", "duración"

// TODO: Define un array con al menos 5 elementos de tu dominio.
// Cada elemento debe ser un objeto con propiedades relevantes.
// Ejemplo (Biblioteca):
// const items = [
//   { id: 1, name: "El Quijote",  category: "clásico",    value: 15,  active: true },
//   { id: 2, name: "1984",        category: "distopía",   value: 12,  active: true },
//   ...
// ];
const items = [

   { id: 1, name: "Venta productos", category: "Ingreso", value: 500000, active: true },
  { id: 2, name: "Pago arriendo", category: "Gasto", value: 200000, active: true },
  { id: 3, name: "Compra insumos", category: "Gasto", value: 150000, active: false },
  { id: 4, name: "Servicio técnico", category: "Ingreso", value: 300000, active: true },
  { id: 5, name: "Pago internet", category: "Gasto", value: 80000, active: true }

  // TODO: Agrega tus elementos aquí
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

// TODO: Implementa una arrow function que reciba un elemento
// y devuelva un string formateado para mostrar en pantalla.
// Debe usar template literals y al menos 2 propiedades del elemento.
//
// Ejemplo (Biblioteca):
// const formatItem = (book) =>
//   `📚 ${book.name} [${book.category}] — $${book.value}`;
//
// Ejemplo (Farmacia):
// const formatItem = (medicine) =>
//   `💊 ${medicine.name} — Stock: ${medicine.stock} — $${medicine.price}`;

const formatItem = (item) =>
  `💼 ${item.name} [${item.category}] — $${item.value.toLocaleString()}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// TODO: Implementa una función pura que calcule algún valor relevante
// del dominio a partir de parámetros numéricos.
// Debe ser una función pura: mismo input → siempre mismo output.
//
// Ejemplo (Biblioteca): calcular multa por días de retraso
// const calculateValue = (baseValue, factor) => baseValue * factor;
//
// Ejemplo (Farmacia): calcular total de compra con descuento
// const calculateValue = (price, quantity, discountPct = 0) =>
//   +(price * quantity * (1 - discountPct / 100)).toFixed(2);

const calculateValue = (baseValue, factor = 1) => {
  // TODO: Implementar el cálculo relevante para tu dominio
  return baseValue * factor;
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// TODO: Implementa una función que reciba un elemento y devuelva
// true o false según una regla del dominio.
//
// Ejemplo (Biblioteca): verificar si el libro está disponible
// const isValid = (book) => book.available === true;
//
// Ejemplo (Farmacia): verificar si hay suficiente stock
// const isValid = (medicine) => medicine.stock > 0;
//
// Ejemplo (Gimnasio): verificar si el miembro está activo
// const isValid = (member) => member.active === true;

const isValid = (item) => {

  // TODO: Implementar la condición de validez de tu dominio
  return item.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// TODO: Implementa una función que use al menos un parámetro
// por defecto significativo para tu dominio.
//
// Ejemplo (Biblioteca): crear un registro con valores por defecto
// const createRecord = (name, category = "general", available = true) =>
//   ({ name, category, available });
//
// Ejemplo (Farmacia): formatear precio con moneda por defecto
// const formatPrice = (price, currency = "USD", showTax = false) =>
//   showTax ? `${currency} ${(price * 1.19).toFixed(2)}` : `${currency} ${price.toFixed(2)}`;


const formatWithDefault = (value, label = VALUE_LABEL, currency = "$") =>
  `${label}: ${currency}${value.toLocaleString()}`;

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

// TODO: Genera un reporte completo usando las funciones anteriores.
// Debe:
// 1. Mostrar el título del dominio
// 2. Recorrer items con for...of y mostrar cada uno con formatItem()
// 3. Contar los elementos válidos con isValid()
// 4. Calcular el total o promedio con calculateValue()
// 5. Mostrar el resumen final con formatWithDefault()

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

// TODO: Reemplaza este código de ejemplo con la implementación real

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const item of items) {
    // TODO: Usa formatItem(item) para mostrar cada elemento
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const item of items) {
    // TODO: Usa isValid(item) para contar los válidos
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\n✅ Elementos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const item of items) {
    // TODO: Usa calculateValue() con las propiedades de tu item
    totalValue += calculateValue(item.value ?? 0);
  }
  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);
