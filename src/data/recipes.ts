import { createClient } from '@supabase/supabase-js'


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export interface Recipe {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: number;
    cook_time: number;
    servings: number;
    difficulty: 'facile' | 'moyen' | 'difficile';
    categories: string[];
    ingredients: string[];
    instructions: string[];
    dietary_info: {
      vegetarian: boolean;
      vegan: boolean;
      glutenFree: boolean;
      dairyFree: boolean;
    };
    rating: number;
    featured?: boolean;
  }

export async function recipes() {
    const { data, error } = await supabase
        .from('recipes')
        .select('*')

    if (error) {
        console.error('Erreur lors de la récupération des recettes :', error)
        return []
    }

    return data
}

export const getAllRecipes = async (): Promise<Recipe[]> => {
    const { data, error } = await supabase
        .from('recipes')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data as Recipe[];
};
export const getRecipeById = async (id: string): Promise<Recipe | null> => {
    const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data ? (data as Recipe) : null;
};

export const getRecipesByCategory = async (categoryId: string): Promise<Recipe[]> => {
  const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .contains('categories', JSON.stringify([categoryId])); // ✅ Correction ici

  if (error) {
      throw new Error(error.message);
  }

  return data as Recipe[];
};

export const getRecommendedRecipes = async (preferences: {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
}): Promise<Recipe[]> => {
  const filters: string[] = [];

  if (preferences.vegetarian) filters.push('dietary_info->>vegetarian.eq.true');
  if (preferences.vegan) filters.push('dietary_info->>vegan.eq.true');
  if (preferences.glutenFree) filters.push('dietary_info->>glutenFree.eq.true');
  if (preferences.dairyFree) filters.push('dietary_info->>dairyFree.eq.true');

  let query = supabase.from('recipes').select('*');

  if (filters.length > 0) {
    query = query.or(filters.join(','));
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data as Recipe[];
};

export const getRecipesByDifficulty = async (difficulty: 'facile' | 'moyen' | 'difficile'): Promise<Recipe[]> => {
    const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .eq('difficulty', difficulty);

    if (error) {
        throw new Error(error.message);
    }

    return data as Recipe[];
};

export const getFeaturedRecipes = async (): Promise<Recipe[]> => {
    const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .eq('featured', true);

    if (error) {
        throw new Error(error.message);
    }

    return data as Recipe[];
};
