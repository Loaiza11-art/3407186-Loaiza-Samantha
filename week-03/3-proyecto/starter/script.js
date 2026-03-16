// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

// const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus constantes
const MAX_INVOICES = 100;        // máximo de facturas que puede registrar la empresa
const TAX_RATE = 0.19;           // IVA en Colombia
const MONTHLY_SUBSCRIPTION = 50000;  // costo mensual de la app
// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Datos financieros del mes
const income = 2000000;   // ingresos del negocio
const expenses = 1200000; // gastos del negocio

// cálculo de utilidad
const profit = income - expenses;
console.log("Utilidad del mes:", profit);

// cálculo de impuesto
const tax = profit * TAX_RATE;
console.log("Impuesto estimado:", tax);

// ganancia después de impuestos
const netProfit = profit - tax;
console.log("Ganancia neta:", netProfit);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
let totalSales = 0;

totalSales += 500000;
console.log("Después de la primera venta:", totalSales);

totalSales += 300000;
console.log("Después de la segunda venta:", totalSales);

totalSales *= 1.19;
console.log("Con IVA incluido:", totalSales);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden

const invoicesToday = 50;

const reachedLimit = invoicesToday === MAX_INVOICES;
console.log("¿Se alcanzó el límite de facturas?", reachedLimit);

const hasInvoicesAvailable = invoicesToday < MAX_INVOICES;
console.log("¿Aún se pueden registrar más facturas?", hasInvoicesAvailable);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
const isPremiumUser = true;
const monthlyIncome = income;

const canAccessReports = isPremiumUser && monthlyIncome > 1000000;
console.log("¿Puede acceder a reportes avanzados?", canAccessReports);

const specialSupport = isPremiumUser || monthlyIncome > 5000000;
console.log("¿Tiene soporte especial?", specialSupport);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
console.log("Ingresos:", income);
console.log("Gastos:", expenses);
console.log("Utilidad:", profit);
console.log("Impuesto:", tax);
console.log("Ganancia neta:", netProfit);

console.log("");
