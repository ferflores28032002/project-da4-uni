import { Router } from 'express';
import routeVehiculo from './vehiculo.route.js';
import routeTipoVehiculo from './tipoVehiculo.route.js';
import routeModeloVehiculo from './modelo.route.js';

const router = Router();

router.use(routeVehiculo);
router.use(routeTipoVehiculo);
router.use(routeModeloVehiculo);

export default router;
