// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: [completar con tu dominio]
// ============================================

// ============================================
// CONFIGURACIÓN GENERAL DEL SISTEMA
// ============================================

// Nombre del sistema (nuestro dominio)
const DOMAIN_NAME = "ACCOUNTING_APP";

// Nombre de los elementos que manejamos (transacciones)
const VALUE_LABEL = "transactions";

// Límite máximo de registros permitidos
const MAX_ITEMS = 1_000;


// ============================================
// BASE DE DATOS (ARRAY PRINCIPAL)
// ============================================

// Este array simula una base de datos de transacciones contables
const items = [
  {
    id: 1, // Identificador único
    description: "Venta de productos", // Qué ocurrió
    amount: 500, // Valor monetario
    type: "income", // Tipo: ingreso
    active: true, // Estado: activo
    category: "ventas", // Categoría
  },
  {
    id: 2,
    description: "Pago de arriendo",
    amount: 300,
    type: "expense", // Tipo: gasto
    active: true,
    category: "gastos fijos",
    notes: "Pago mensual", // Propiedad opcional
  },
  {
    id: 3,
    description: "Compra de insumos",
    amount: 200,
    type: "expense",
    active: false, // Este está inactivo
    category: "inventario",
  },
  {
    id: 4,
    description: "Mantenimiento",
    amount: 150,
    type: "expense",
    active: true,
    category: "servicios",
  },
  {
    id: 5,
    description: "Asesoría contable",
    amount: 400,
    type: "income",
    active: true,
    category: "servicios",
  },
  {
    id: 6,
    description: "Pago internet",
    amount: 100,
    type: "expense",
    active: true,
    category: "gastos fijos",
  },
];


// ============================================
// FUNCIONES CRUD (OPERACIONES BÁSICAS)
// ============================================

/**
 * Agrega una nueva transacción al sistema
 */
const addItem = (item) => {
  // Verifica que no se supere el límite permitido
  if (items.length >= MAX_ITEMS) {
    console.log("❌ Límite alcanzado");
    return;
  }

  // Agrega el nuevo elemento al array
  items.push(item);

  // Mensaje de confirmación
  console.log(`✅ Transacción agregada: ${item.description}`);
};


/**
 * Busca una transacción por su ID
 */
const findById = (id) => {
  // Usa find para devolver el primer elemento que coincida
  return items.find(item => item.id === id);
};


/**
 * Obtiene todas las transacciones activas
 */
const getActive = () => {
  // Filtra solo los elementos cuyo estado sea true
  return items.filter(item => item.active);
};


/**
 * Filtra transacciones por cualquier campo
 */
const filterByField = (field, value) => {
  // Accede dinámicamente a la propiedad usando item[field]
  return items.filter(item => item[field] === value);
};


// ============================================
// FUNCIONES DE ANÁLISIS
// ============================================

/**
 * Actualiza una transacción sin modificar el array original
 */
const updateItem = (id, changes) => {
  return items.map(item =>
    // Si el id coincide, crea una copia con los cambios
    item.id === id
      ? { ...item, ...changes }
      : item // Si no, lo deja igual
  );
};


/**
 * Calcula estadísticas sobre un campo numérico
 */
const calculateStats = (field) => {
  // Extrae todos los valores del campo (ej: amount)
  const values = items.map(i => i[field]);

  // Suma todos los valores usando reduce
  const total = values.reduce((acc, val) => acc + val, 0);

  // Obtiene el valor mínimo
  const min = Math.min(...values);

  // Obtiene el valor máximo
  const max = Math.max(...values);

  // Calcula el promedio
  const avg = total / values.length;

  // Retorna un objeto con todos los resultados
  return { min, max, avg, total };
};


// ============================================
// FUNCIONES DE VISUALIZACIÓN
// ============================================

/**
 * Formatea una transacción para mostrarla en consola
 */
const formatItem = (item) => {
  return `[${item.id}] ${item.description.padEnd(25)} | $${item.amount} | ${item.type} | ${item.active ? "Activo" : "Inactivo"} | ${item.notes ?? "Sin notas"}`;
};


/**
 * Genera un reporte completo del sistema
 */
const buildReport = () => {
  console.log(`📊 Reporte de ${DOMAIN_NAME}`);
  console.log("=".repeat(50));

  // Muestra todas las transacciones formateadas
  items.forEach(item => console.log(formatItem(item)));

  // Calcula activos
  const active = getActive();
  console.log(`\nActivos: ${active.length}`);
  console.log(`Inactivos: ${items.length - active.length}`);

  // Muestra estadísticas del campo amount
  const stats = calculateStats("amount");
  console.log(`\nTotal: ${stats.total}`);
  console.log(`Promedio: ${stats.avg.toFixed(2)}`);

  // Muestra las propiedades del primer objeto
  console.log("\nPropiedades del primer item:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  // Total de registros
  console.log(`\nTotal de registros: ${items.length}`);
};


// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

// Encabezado del programa
console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME}`);
console.log("=".repeat(40));


// Buscar una transacción
const found = findById(1);
console.log("Encontrado:", found?.description ?? "No existe");


// Obtener activos
const active = getActive();
console.log("Activos:", active.length);


//Calcular estadísticas
const stats = calculateStats("amount");
console.log("Stats:", stats);


// Generar reporte completo
buildReport();


// ➕ Agregar nueva transacción
addItem({
  id: 7,
  description: "Nuevo ingreso",
  amount: 600,
  type: "income",
  active: true,
  category: "ventas",
});
