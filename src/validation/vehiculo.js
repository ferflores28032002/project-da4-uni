import { body } from 'express-validator';

export const validarCamposVehiculo = () => [
  body('matricula').notEmpty().isString(),
  body('chasis').notEmpty().isString(),
  body('marca').notEmpty().isString(),
  body('color').notEmpty().isString(),
  body('anio').notEmpty().isNumeric().custom(validarAño),
];

function validarAño(año) {
  const añoActual = new Date().getFullYear();
  if (año && !isNaN(año) && año >= 1900 && año <= añoActual + 1) {
    return true;
  }
  throw new Error('El año debe ser un número válido entre 1900 y el año actual más 1.');
}
