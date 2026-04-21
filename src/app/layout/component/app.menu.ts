import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `,
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Estructura',
                items: [
                    { label: 'Entidades Legales', icon: 'pi pi-fw pi-home', routerLink: ['/estructura/entidades'] },
                    { label: 'Departamentos', icon: 'pi pi-fw pi-home', routerLink: ['/estructura/departamentos'] },
                    { label: 'Categorias', icon: 'pi pi-fw pi-home', routerLink: ['/estructura/categorias'] },
                    { label: 'Direcciones', icon: 'pi pi-fw pi-home', routerLink: ['/estructura/direcciones'] },
                    { label: 'Localidades de Pago', icon: 'pi pi-fw pi-home', routerLink: ['/estructura/localidades'] },
                    { label: 'Actualización de Bancos', icon: 'pi pi-fw pi-home', routerLink: ['/estructura/actualizacion'] },
                    { label: 'Registro Patronal', icon: 'pi pi-fw pi-home', routerLink: ['/estructura/registro'] },
                    { label: 'Conceptos de Nómina', icon: 'pi pi-fw pi-home', routerLink: ['/estructura/conceptos'] },
                ]
            },
            {
                label: 'Infraestructura',
                items: [
                    { label: 'Procesos', icon: 'pi pi-fw pi-home', routerLink: ['/infra/procesos'] },
                    { label: 'Periodos de Calculo', icon: 'pi pi-fw pi-home', routerLink: ['/infra/periodos'] },
                    { label: 'Conceptos de Nónima', icon: 'pi pi-fw pi-home', routerLink: ['/infra/conceptoNomina'] },
                    { label: 'Switches', icon: 'pi pi-fw pi-home', routerLink: ['/infra/switch'] },
                    { label: 'Conceptos por Procesos', icon: 'pi pi-fw pi-home', routerLink: ['/infra/conceptoProceso'] },
                    { label: 'Fórmulas de Calculo', icon: 'pi pi-fw pi-home', routerLink: ['/infra/formulas'] },
                ]
            },
            {
                label: 'Nómina',
                items: [
                    {
                        label: 'Seleccion de periodos',
                        icon: 'pi pi-pen-to-square',
                        routerLink: ['/nomina/periodos']
                    },
                    {
                        label: 'Empleados',
                        icon: 'pi pi-users',
                        path: '/nomina/empleados',
                        items: [
                            {
                                label: 'Maestro de Empleados',
                                icon: 'pi pi-fw pi-address-book',
                                routerLink: ['/nomina/empleados/maestro']
                            },
                            {
                                label: 'Maestro de Empleados Toluca',
                                icon: 'pi pi-fw pi-address-book',
                                routerLink: ['/nomina/empleados/maestroToluca']
                            },
                            {
                                label: 'Actualizar Datos Personales',
                                icon: 'pi pi-fw pi-file-edit',
                                routerLink: ['/nomina/empleados/updateDatosPersonales']
                            },
                            {
                                label: 'Datos Adicionales',
                                icon: 'pi pi-fw pi-file-plus',
                                routerLink: ['/nomina/empleados/datosAdicionales']
                            },
                            {
                                label: 'Trayectoria Laboral',
                                icon: 'pi pi-fw pi-chart-line',
                                routerLink: ['/nomina/empleados/trayectoria']
                            },
                            {
                                label: 'Actualización de Beneficiarios',
                                icon: 'pi pi-fw pi-file-edit',
                                routerLink: ['/nomina/empleados/updateBeneficiarios']
                            },
                            {
                                label: 'Datos Adicionales Beneficiarios',
                                icon: 'pi pi-fw pi-file-plus',
                                routerLink: ['/nomina/empleados/adicionlBeneficiarios']
                            },
                            {
                                label: 'Impresión de Contratos',
                                icon: 'pi pi-fw pi-print',
                                routerLink: ['/nomina/empleados/printContratos']
                            },
                            {
                                label: 'Actuzalización Histórico Empleados',
                                icon: 'pi pi-fw pi-calendar-clock',
                                routerLink: ['/nomina/empleados/updateHisEmpleados']
                            }
                        ]
                    },
                    {
                        label: 'Captura de Movimientos',
                        icon: 'pi pi-arrows-alt',
                        path: '/nomina/capMovimientos',
                        items: [
                            {
                                label: 'Incidencias por Concepto',
                                icon: 'pi pi-fw pi-exclamation-circle',
                                routerLink: ['/nomina/capMovimientos/incidenciasConcepto']
                            },
                            {
                                label: 'Incidencias por Empleado',
                                icon: 'pi pi-fw pi-exclamation-circle',
                                routerLink: ['/nomina/capMovimientos/incidenciasEmpleado']
                            },
                            {
                                label: 'Datos Fijos',
                                icon: 'pi pi-fw pi-database',
                                routerLink: ['/nomina/capMovimientos/datosFijos']
                            },
                            {
                                label: 'Préstamos',
                                icon: 'pi pi-fw pi-money-bill',
                                routerLink: ['/nomina/capMovimientos/prestamos']
                            },
                            {
                                label: 'Incapacidades',
                                icon: 'pi pi-fw pi-minus-circle',
                                routerLink: ['/nomina/capMovimientos/incapacidades']
                            },
                            {
                                label: 'Ausencias',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/nomina/capMovimientos/ausencias']
                            },
                            {
                                label: 'Traspaso de Incidencias',
                                icon: 'pi pi-fw pi-arrow-right-arrow-left',
                                routerLink: ['/nomina/capMovimientos/traspasoIncidencias']
                            },
                            {
                                label: 'Interface de Incidencias',
                                icon: 'pi pi-fw pi-desktop',
                                routerLink: ['/nomina/capMovimientos/interfazIncidencia']
                            },
                            {
                                label: 'Interface Datos Fijos',
                                icon: 'pi pi-fw pi-database',
                                routerLink: ['/nomina/capMovimientos/interfazDatosFijos']
                            },
                            {
                                label: 'Pago Recibos Cancelados',
                                icon: 'pi pi-fw pi-credit-card',
                                routerLink: ['/nomina/capMovimientos/pagoRecibosCancel']
                            }
                        ],

                    },
                    {
                        label: 'Procesamiento de Nómina',
                        icon: 'pi pi-fw pi-book',
                        path: '/nomina/proces',
                        items: [
                            {
                                label: 'Cálculo de Nómina',
                                icon: 'pi pi-fw pi-calculator',
                                routerLink: ['/nomina/proces/calculoNom']
                            },
                            {
                                label: 'Cierre Nómina',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/nomina/proces/cierreNom']
                            },
                            {
                                label: 'Traspaso de Incidencias',
                                icon: 'pi pi-fw pi-arrow-right-arrow-left',
                                routerLink: ['/nomina/proces/traspaso']
                            },
                        ]
                    },
                    {
                        label: 'Reportes',
                        icon: 'pi pi-list-check',
                        path: '/nomina/report',
                        items: [
                            {
                                label: 'pendiente',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/nomina/report']
                            }
                        ]
                    },
                    {
                        label: 'Interfaces',
                        icon: 'pi pi-desktop',
                        path: '/nomina/interfaz',
                        items: [
                            {
                                label: 'Interface ISSEMYM',
                                icon: 'pi pi-fw pi-building',
                                routerLink: ['/nomina/interfaz/issemym']
                            },
                            {
                                label: 'Interface de Bancos',
                                icon: 'pi pi-fw pi-building-columns',
                                routerLink: ['/nomina/interfaz/bancos']
                            },
                            {
                                label: 'Carga Nóminas Histórico',
                                icon: 'pi pi-fw pi-calendar-clock',
                                routerLink: ['/nomina/interfaz/hitorico']
                            },
                        ]
                    },
                ]
            },
            {
                label: 'Especiales',
                items: [
                    { label: 'Cálculo de Finiquitos', icon: 'pi pi-fw pi-home', routerLink: ['/especiales/calculo'] },
                    { label: 'Histórico de Acomulados', icon: 'pi pi-fw pi-home', routerLink: ['/especiales/historico'] },
                    { label: 'Reporteador', icon: 'pi pi-fw pi-home', routerLink: ['/especiales/reporteador'] },
                    { label: 'Constancias Percep y Ded', icon: 'pi pi-fw pi-home', routerLink: ['/especiales/constancias'] },
                    { label: 'Cifras de Control', icon: 'pi pi-fw pi-home', routerLink: ['/especiales/cifras'] },
                ]
            },
            {
                label: 'Control de Asistencia',
                items: [
                    { label: 'Ausencias Nomina', icon: 'pi pi-fw pi-home', routerLink: ['/ctrlAsistencia/ausencias'] },
                    { label: 'Días Derecho', icon: 'pi pi-fw pi-home', routerLink: ['/ctrlAsistencia/diasDerecho'] },
                    { label: 'Jornadas', icon: 'pi pi-fw pi-home', routerLink: ['/ctrlAsistencia/jornadas'] },
                    { label: 'Horarios', icon: 'pi pi-fw pi-home', routerLink: ['/ctrlAsistencia/horarios'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-home', routerLink: ['/ctrlAsistencia/roles'] },
                    { label: 'Calendario', icon: 'pi pi-fw pi-home', routerLink: ['/ctrlAsistencia/calendario'] },
                    { label: 'Procesamientos', icon: 'pi pi-fw pi-home', routerLink: ['/ctrlAsistencia/preces'] },
                ]
            },
            {
                label: 'CFDI',
                items: [
                    { label: 'Configuración CFDI', icon: 'pi pi-cog', routerLink: ['/cfdi/conf'] },
                    { label: 'CFDI Nómina', icon: 'pi pi-fw pi-home', routerLink: ['/cfdi/nomina'] },
                ]
            },
            {
                label: 'Póliza Contable',
                items: [
                    { label: 'Póliza Contable', icon: 'pi pi-fw pi-home', routerLink: ['/poliza/contable'] },
                    { label: 'Configuración Póliza Contable', icon: 'pi pi-cog', routerLink: ['/poliza/conf'] },
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                path: '/pages',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        path: '/auth',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    }
                ]
            },
            {
                label: 'Hierarchy',
                path: '/hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        path: '/hierarchy/submenu_1',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                path: '/hierarchy/submenu_1/submenu_1_1',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                path: '/hierarchy/submenu_1/submenu_1_2',
                                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        path: '/hierarchy/submenu_2',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                path: '/hierarchy/submenu_2/submenu_2_1',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                path: '/hierarchy/submenu_2/submenu_2_2',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
