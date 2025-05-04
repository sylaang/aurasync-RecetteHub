
import { Link } from "react-router-dom";
import { Clock, ChefHat, Star } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeaturedRecipeProps {
  recipe: Recipe;
}

const FeaturedRecipe = ({ recipe }: FeaturedRecipeProps) => {
  const { id, title, description, image, prepTime, cookTime, difficulty, rating, dietaryInfo } = recipe;
  
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg animate-fade-in">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end min-h-[400px] text-white">
        <div className="flex space-x-2 mb-3">
          <Badge className="bg-culinary-terracotta text-white hover:bg-culinary-terracotta/90">
            En Vedette
          </Badge>
          {dietaryInfo.vegetarian && (
            <Badge className="bg-culinary-green text-white hover:bg-culinary-green/90">
              Végétarien
            </Badge>
          )}
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-white/90 mb-4 max-w-xl">{description}</p>
        
        <div className="flex flex-wrap items-center text-sm text-white/80 mb-6 gap-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Préparation: {prepTime} min</span>
          </div>
          <div className="flex items-center">
            <ChefHat className="h-4 w-4 mr-1" />
            <span>Cuisson: {cookTime} min</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span>{rating}/5</span>
          </div>
        </div>
        
        <Button 
          asChild
          className="bg-culinary-terracotta hover:bg-culinary-brown text-white w-fit"
        >
          <Link to={`/recipe/${id}`}>Voir la recette</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
