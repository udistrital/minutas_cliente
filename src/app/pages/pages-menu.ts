import { MenuItem } from './menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    key: 'dashboard',
  },
  {
    title: 'Gestión Minutas',
    icon: 'nb-compose',
    link: '/pages/gestion-minutas',
    key: 'gestion-minutas',
    children: [
      {
        title: 'Plantillas',
        link: '/pages/gestion-minutas/plantillas',
        key: 'plantillas',
      },
    ],
  },
]
