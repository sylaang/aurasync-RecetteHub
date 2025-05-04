
export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'appetizers',
    name: 'Entrées',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'Petites bouchées pour commencer le repas'
  },
  {
    id: 'main-dishes',
    name: 'Plats Principaux',
    image: 'https://images.unsplash.com/photo-1546039907-8d4ae9b1452005&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'Plats substantiels pour satisfaire votre appétit'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'Douceurs sucrées pour terminer en beauté'
  },
  {
    id: 'drinks',
    name: 'Boissons',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'Boissons rafraîchissantes et réconfortantes'
  },
  {
    id: 'vegetarian',
    name: 'Végétarien',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'Délicieuses recettes sans viande'
  },
  {
    id: 'quick',
    name: 'Rapide et Facile',
    image: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'Prêt en moins de 30 minutes'
  },
];
