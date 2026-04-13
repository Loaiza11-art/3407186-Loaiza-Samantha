// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// TODO: Reemplaza con el nombre de tu dominio
// Ejemplos: "Biblioteca", "Farmacia", "Gimnasio", "Restaurante"
const DOMAIN_NAME = "Contabilidad PYME";

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "Transacciones";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

// TODO: Define al menos 6 objetos con mínimo 5 propiedades cada uno
// Incluye:
//   - id (número)
//   - name (string)
//   - Al menos 1 propiedad numérica (price, pages, duration, capacity, etc.)
//   - Al menos 1 propiedad booleana (available, active, inStock, visible, etc.)
//   - Al menos 1 propiedad opcional (no todos los objetos la tienen)

const items = [
  {
    id: 1,
    name: "Compra de insumos",
    amount: 250000,
    type: "egreso",
    active: true,
    category: "Inventario"
  },
  {
    id: 2,
    name: "Venta producto A",
    amount: 500000,
    type: "ingreso",
    active: true
  },
  {
    id: 3,
    name: "Pago de servicios",
    amount: 150000,
    type: "egreso",
    active: false,
    category: "Servicios"
  },
  {
    id: 4,
    name: "Ingreso por asesoría",
    amount: 300000,
    type: "ingreso",
    active: true
  },
  {
    id: 5,
    name: "Compra de equipo",
    amount: 800000,
    type: "egreso",
    active: true,
    category: "Activos"
  },
  {
    id: 6,
    name: "Venta producto B",
    amount: 450000,
    type: "ingreso",
    active: false
  }
];
// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);

  Object.entries(item).forEach(([key, value]) => {
    console.log(key.padEnd(15), ":", value);
  });
};

/**
 * Calcula estadísticas numéricas del catálogo
 * @param {string} numericKey - El nombre de la propiedad numérica a analizar
 */
const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const promedio = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log("Estadísticas:");
  console.log("Total:", total);
  console.log("Promedio:", promedio);
  console.log("Máximo:", max);
  console.log("Mínimo:", min);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

/**
 * Muestra el detalle de un elemento, incluyendo propiedades opcionales
 * si existen en ese objeto
 * @param {Object} item - El objeto a mostrar
 */
const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log("Monto:", item.amount);
  console.log("Tipo:", item.type);

  if (Object.hasOwn(item, "category")) {
    console.log("Categoría:", item.category);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

/**
 * Imprime todas las propiedades de un objeto usando for...in
 * @param {Object} item - El objeto a recorrer
 */
const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);

  for (let key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(key, ":", item[key]);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

/**
 * Aplica una actualización inmutable a un elemento
 * @param {Object} item - El objeto original
 * @param {Object} changes - Las propiedades a actualizar
 * @returns {Object} Nuevo objeto con los cambios aplicados
 */
const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

/**
 * Filtra los elementos disponibles/activos
 * @returns {Object[]} Array de elementos disponibles
 */
const getAvailable = () => {
  return items.filter(item => item.active);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  return items.find(item => item.id === id);
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */
const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    amountWithIVA: item.amount * 1.19
  }));
};

/**
 * Ordena los elementos por valor numérico (sin mutar el original)
 * @param {boolean} ascending - true para ascendente, false para descendente
 * @returns {Object[]} Nuevo array ordenado
 */
const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) =>
    ascending ? a.amount - b.amount : b.amount - a.amount
  );
};;

// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */


// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

  console.log("Total:", items.length);

  const disponibles = getAvailable();
  console.log("Activos:", disponibles.length);

  calculateStats("amount");

  const ordenados = sortByNumericProp();
  console.log("\nOrdenados:");
  ordenados.forEach(i => console.log(i.name, i.amount));

  console.log("=".repeat(50));
};

// TODO: Llamar a las funciones implementadas en este orden:
// 1. inspectItem(items[0])
// 2. calculateStats("nombreDeTuPropiedadNumerica")
// 3. items.forEach(showWithOptionals)
// 4. printAllProperties(items[0])
// 5. Demostrar updateItem con un ejemplo
// 6. Mostrar elementos disponibles con getAvailable()
// 7. Demostrar findById con un id válido y uno inexistente
// 8. Mostrar addCalculatedProp()
// 9. Mostrar sortByNumericProp()
// 10. buildReport()
