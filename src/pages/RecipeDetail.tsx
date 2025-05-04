
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Clock, ChefHat, Users, Star } from "lucide-react";
import { getRecipeById, Recipe, recipes } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import RecipeCard from "@/components/RecipeCard";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const recipe = id ? getRecipeById(id) : undefined;
  
  useEffect(() => {
    if (!recipe) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [recipe, navigate]);
  
  if (!recipe) return null;
  
  const { 
    title, description, image, prepTime, cookTime, servings, 
    difficulty, ingredients, instructions, dietaryInfo, rating
  } = recipe;
  
  // Get similar recipes (recipes in the same category)
  const similarRecipes = recipes
    .filter(r => r.id !== id && r.categories.some(cat => recipe.categories.includes(cat)))
    .slice(0, 3);
  
  const getDifficultyLabel = (level: Recipe['difficulty']) => {
    switch (level) {
      case 'facile': return { label: 'Facile', color: 'bg-green-100 text-green-800' };
      case 'moyen': return { label: 'Intermédiaire', color: 'bg-yellow-100 text-yellow-800' };
      case 'difficile': return { label: 'Difficile', color: 'bg-red-100 text-red-800' };
    }
  };
  
  const difficultyInfo = getDifficultyLabel(difficulty);
  
  return (
    <div className="min-h-screen bg-culinary-beige/30">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          asChild
          className="mb-6 text-culinary-brown hover:text-culinary-terracotta hover:bg-culinary-beige"
        >
          <Link to="/">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Retour
          </Link>
        </Button>
        
        {/* Recipe header */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
          <div className="h-80 md:h-96">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
            <p className="text-white/90 max-w-2xl">{description}</p>
          </div>
        </div>
        
        {/* Recipe metadata */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-culinary-terracotta mr-2" />
              <div>
                <p className="text-sm text-gray-500">Temps de préparation</p>
                <p className="font-medium">{prepTime} minutes</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <ChefHat className="h-5 w-5 text-culinary-terracotta mr-2" />
              <div>
                <p className="text-sm text-gray-500">Temps de cuisson</p>
                <p className="font-medium">{cookTime} minutes</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Users className="h-5 w-5 text-culinary-terracotta mr-2" />
              <div>
                <p className="text-sm text-gray-500">Nombre de portions</p>
                <p className="font-medium">{servings} personnes</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Note</p>
                <p className="font-medium">{rating}/5</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div>
                <p className="text-sm text-gray-500">Difficulté</p>
                <span className={`px-3 py-1 rounded-full text-sm ${difficultyInfo.color}`}>
                  {difficultyInfo.label}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {dietaryInfo.vegetarian && (
              <Badge className="bg-culinary-green text-white hover:bg-culinary-green/90">
                Végétarien
              </Badge>
            )}
            {dietaryInfo.vegan && (
              <Badge className="bg-culinary-green text-white hover:bg-culinary-green/90">
                Végétalien
              </Badge>
            )}
            {dietaryInfo.glutenFree && (
              <Badge variant="outline">Sans Gluten</Badge>
            )}
            {dietaryInfo.dairyFree && (
              <Badge variant="outline">Sans Lactose</Badge>
            )}
          </div>
        </div>
        
        {/* Recipe content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-xl font-semibold mb-4 text-culinary-brown">Ingrédients</h2>
              <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-culinary-terracotta mt-2 mr-3"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-xl font-semibold mb-4 text-culinary-brown">Instructions</h2>
              <ol className="space-y-6">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-culinary-terracotta text-white flex items-center justify-center mr-4 mt-0.5">
                      {index + 1}
                    </span>
                    <p>{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        
        {/* Similar recipes */}
        {similarRecipes.length > 0 && (
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold mb-6 text-culinary-brown">Recettes similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="bg-culinary-brown text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} Explorateur Culinaire. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default RecipeDetail;
