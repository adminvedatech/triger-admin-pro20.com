import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  // menu: any[] = [];

  menuUser: any = [
    {
      titulo: "Usuarios",
      icono: "mdi mdi-account-multiple",
      submenu: [
        { titulo: "Listado de Usuarios", url: "/usuarios" },
        { titulo: "Forma de Usuarios", url: "/form-user-register" },
        { titulo: "Lista de Usuarios Registrados", url: "/usuarios-registrados" },

      ],
    },
  ];

  menuBank: any = [
    {
      titulo: "Bancos",
      icono: "mdi mdi-bank",
      submenu: [
        { titulo: "Dashboard", url: "/dashboard" },
        { titulo: "Cuentas Bancarias", url: "/bancos" },
        { titulo: "Movimientos Bancarios", url: "/bancos/movimientos" },

      ],
    },
  ];
  menuClientes: any = [
    {
      titulo: "Clientes",
      icono: "mdi mdi-bank",
      submenu: [
        { titulo: "Ventas", url: "/clientes/ventas" },
      ],
    },
  ];
  menuProveedores: any = [
    {
      titulo: "Proveedores",
      icono: "mdi mdi-bank",
      submenu: [
        { titulo: "Compras", url: "/proveedores/compras" },
      ],
    },
  ];

}
