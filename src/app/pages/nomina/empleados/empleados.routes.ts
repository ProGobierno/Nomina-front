import { Routes } from "@angular/router";
import { MaestroEmpleados } from "./maestro-empleados/maestro-empleados";
import { MaestroEmpleToluca } from "./maestro-emple-toluca/maestro-emple-toluca";
import { UpdateDatosPersonales } from "./update-datos-personales/update-datos-personales";
import { DatosAdicionales } from "./datos-adicionales/datos-adicionales";
import { TrayectoriaLaboral } from "./trayectoria-laboral/trayectoria-laboral";
import { UpdateBeneficiarios } from "./update-beneficiarios/update-beneficiarios";
import { DatosAdicionalesBenefi } from "./datos-adicionales-benefi/datos-adicionales-benefi";
import { PrintContracts } from "./print-contracts/print-contracts";
import { UpdateHistoryEmpl } from "./update-history-empl/update-history-empl";

export default [
    { path: 'maestro', data: { breadcrumb: 'Maestro de Empleados' }, component: MaestroEmpleados },
    { path: 'maestroToluca', data: { breadcrumb: 'Maestro de Empleados Toluca' }, component: MaestroEmpleToluca },
    { path: 'updateDatosPersonales', data: { breadcrumb: 'Actualizacion de Datos Personales' }, component: UpdateDatosPersonales },
    { path: 'datosAdicionales', data: { breadcrumb: 'Datos Adicionales' }, component: DatosAdicionales },
    { path: 'trayectoria', data: { breadcrumb: 'Trayectoria Laboral' }, component:  TrayectoriaLaboral},
    { path: 'updateBeneficiarios', data: { breadcrumb: 'Actualización de Beneficiarios' }, component: UpdateBeneficiarios },
    { path: 'adicionlBeneficiarios', data: { breadcrumb: 'Datos Adicionales Beneficiarios' }, component: DatosAdicionalesBenefi },
    { path: 'printContratos', data: { breadcrumb: 'Impresión de Contratos' }, component: PrintContracts },
    { path: 'updateHisEmpleados', data: { breadcrumb: 'Actualización Histórico Empleados' }, component: UpdateHistoryEmpl },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
