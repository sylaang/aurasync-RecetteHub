
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'facile' | 'moyen' | 'difficile';
  categories: string[];
  ingredients: string[];
  instructions: string[];
  dietaryInfo: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
  };
  rating: number;
  featured?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: 'ratatouille-provencale',
    title: 'Ratatouille Provençale',
    description: 'Un plat traditionnel de légumes du sud de la France, riche en saveurs méditerranéennes.',
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3',
    prepTime: 20,
    cookTime: 45,
    servings: 4,
    difficulty: 'moyen',
    categories: ['main-dishes', 'vegetarian'],
    ingredients: [
      '1 aubergine, coupée en cubes',
      '2 courgettes, coupées en rondelles',
      '1 poivron rouge, coupé en morceaux',
      '1 poivron jaune, coupé en morceaux',
      '2 oignons, émincés',
      '3 gousses d\'ail, hachées',
      '4 tomates, concassées',
      '2 cuillères à soupe d\'huile d\'olive',
      'Herbes de Provence',
      'Sel et poivre'
    ],
    instructions: [
      'Faites chauffer l\'huile d\'olive dans une grande poêle.',
      'Ajoutez les oignons et l\'ail, faites revenir jusqu\'à ce qu\'ils soient translucides.',
      'Ajoutez les poivrons et cuisez pendant 5 minutes.',
      'Ajoutez l\'aubergine et les courgettes, cuisez pendant 10 minutes en remuant régulièrement.',
      'Ajoutez les tomates concassées et les herbes de Provence.',
      'Salez, poivrez et laissez mijoter à feu doux pendant 30 minutes.',
      'Servez chaud ou froid, accompagné de pain croustillant.'
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    rating: 4.7,
    featured: true
  },
  {
    id: 'coq-au-vin',
    title: 'Coq au Vin',
    description: 'Un classique de la cuisine française, le poulet mijoté au vin rouge avec des légumes.',
    image: 'https://images.unsplash.com/photo-1547496502-affa22e38ea1?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3',
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    difficulty: 'difficile',
    categories: ['main-dishes'],
    ingredients: [
      '1 poulet entier, découpé en morceaux',
      '200g de lardons',
      '2 oignons, émincés',
      '2 carottes, coupées en rondelles',
      '200g de champignons, émincés',
      '3 gousses d\'ail, écrasées',
      '75cl de vin rouge',
      '2 cuillères à soupe de farine',
      'Bouquet garni',
      'Huile d\'olive',
      'Sel et poivre'
    ],
    instructions: [
      'Faites revenir les lardons dans une cocotte sans ajout de matière grasse.',
      'Retirez-les et faites dorer les morceaux de poulet dans la même cocotte.',
      'Ajoutez les oignons et l\'ail, faites revenir jusqu\'à ce qu\'ils soient translucides.',
      'Saupoudrez de farine et mélangez bien.',
      'Versez le vin rouge, ajoutez le bouquet garni, les carottes et les lardons.',
      'Salez, poivrez, couvrez et laissez mijoter à feu doux pendant 1h30.',
      'Ajoutez les champignons 20 minutes avant la fin de la cuisson.',
      'Servez chaud avec des pommes de terre.'
    ],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true
    },
    rating: 4.9
  },
  {
    id: 'tarte-tatin',
    title: 'Tarte Tatin',
    description: 'Délicieuse tarte aux pommes caramélisées, servie à l\'envers.',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    prepTime: 25,
    cookTime: 45,
    servings: 8,
    difficulty: 'moyen',
    categories: ['desserts'],
    ingredients: [
      '8 pommes Golden',
      '150g de sucre',
      '100g de beurre',
      '1 pâte feuilletée',
      '1 gousse de vanille',
      'Cannelle (optionnel)'
    ],
    instructions: [
      'Préchauffez le four à 180°C.',
      'Épluchez les pommes et coupez-les en quartiers.',
      'Dans un moule à tarte allant au feu, faites fondre le beurre et le sucre jusqu\'à obtenir un caramel blond.',
      'Disposez les quartiers de pommes en cercles concentriques dans le caramel.',
      'Laissez cuire à feu doux pendant 15 minutes.',
      'Recouvrez les pommes avec la pâte feuilletée en rentrant bien les bords à l\'intérieur du moule.',
      'Enfournez pendant 30 minutes jusqu\'à ce que la pâte soit dorée.',
      'Laissez refroidir 10 minutes puis retournez délicatement la tarte sur un plat de service.'
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: false
    },
    rating: 4.8,
    featured: true
  },
  {
    id: 'salade-nicoise',
    title: 'Salade Niçoise',
    description: 'Salade fraîche et colorée originaire de Nice, parfaite pour l\'été.',
    image: 'https://images.unsplash.com/photo-1595907522763-caaf8e41db96?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3',
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: 'facile',
    categories: ['appetizers', 'quick', 'main-dishes'],
    ingredients: [
      '200g de thon en conserve',
      '4 œufs durs',
      '500g de tomates cerises',
      '1 concombre',
      '1 poivron rouge',
      '200g de haricots verts',
      '100g d\'olives noires',
      '1 laitue',
      '4 cuillères à soupe d\'huile d\'olive',
      '2 cuillères à soupe de vinaigre de vin',
      'Sel et poivre'
    ],
    instructions: [
      'Faites cuire les œufs (10 minutes) et les haricots verts (5 minutes).',
      'Lavez et coupez tous les légumes.',
      'Disposez la laitue au fond d\'un grand saladier.',
      'Ajoutez les légumes, le thon émietté, et les œufs coupés en quartiers.',
      'Parsemez d\'olives noires.',
      'Préparez la vinaigrette en mélangeant l\'huile d\'olive, le vinaigre, le sel et le poivre.',
      'Arrosez la salade de vinaigrette juste avant de servir.'
    ],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true
    },
    rating: 4.5
  },
  {
    id: 'quiche-lorraine',
    title: 'Quiche Lorraine',
    description: 'Tarte salée à la crème et aux lardons, spécialité de la région Lorraine.',
    image: 'https://images.unsplash.com/photo-1629463326893-491d0740e533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    difficulty: 'facile',
    categories: ['appetizers', 'main-dishes'],
    ingredients: [
      '1 pâte brisée',
      '200g de lardons',
      '4 œufs',
      '20cl de crème fraîche',
      '10cl de lait',
      '150g de fromage râpé',
      'Noix de muscade',
      'Sel et poivre'
    ],
    instructions: [
      'Préchauffez le four à 180°C.',
      'Étalez la pâte brisée dans un moule à tarte et piquez le fond à la fourchette.',
      'Faites revenir les lardons dans une poêle sans ajout de matière grasse.',
      'Dans un saladier, battez les œufs avec la crème fraîche et le lait.',
      'Ajoutez les lardons, le fromage râpé, la noix de muscade, le sel et le poivre.',
      'Versez la préparation sur le fond de tarte.',
      'Enfournez pour 35 minutes jusqu\'à ce que la quiche soit dorée.'
    ],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false
    },
    rating: 4.6
  },
  {
    id: 'mousse-au-chocolat',
    title: 'Mousse au Chocolat',
    description: 'Dessert aérien au chocolat, un classique de la pâtisserie française.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3',
    prepTime: 20,
    cookTime: 0,
    servings: 6,
    difficulty: 'moyen',
    categories: ['desserts', 'quick'],
    ingredients: [
      '200g de chocolat noir',
      '6 œufs',
      '50g de sucre',
      '1 pincée de sel'
    ],
    instructions: [
      'Faites fondre le chocolat au bain-marie.',
      'Séparez les blancs des jaunes d\'œufs.',
      'Mélangez les jaunes d\'œufs avec le sucre jusqu\'à ce que le mélange blanchisse.',
      'Incorporez le chocolat fondu aux jaunes d\'œufs.',
      'Montez les blancs en neige ferme avec une pincée de sel.',
      'Incorporez délicatement les blancs en neige à la préparation au chocolat.',
      'Versez dans des ramequins et réfrigérez pendant au moins 4 heures avant de servir.'
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: true
    },
    rating: 4.9,
    featured: true
  }
];

export const getRecipesByCategory = (categoryId: string): Recipe[] => {
  return recipes.filter(recipe => recipe.categories.includes(categoryId));
};

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.featured);
};

export const getRecommendedRecipes = (preferences: {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
}): Recipe[] => {
  return recipes.filter(recipe => {
    // Filter based on dietary preferences
    if (preferences.vegetarian && !recipe.dietaryInfo.vegetarian) return false;
    if (preferences.vegan && !recipe.dietaryInfo.vegan) return false;
    if (preferences.glutenFree && !recipe.dietaryInfo.glutenFree) return false;
    if (preferences.dairyFree && !recipe.dietaryInfo.dairyFree) return false;
    
    return true;
  }).slice(0, 3); // Return top 3 matches
};
