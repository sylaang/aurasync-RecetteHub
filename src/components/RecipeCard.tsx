
import { Link } from "react-router-dom";
import { Clock, Utensils, Star } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

const RecipeCard = ({ recipe, className }: RecipeCardProps) => {
  const { id, title, description, image, prepTime, cookTime, difficulty, rating, dietaryInfo } = recipe;
  
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'facile':
        return 'bg-green-100 text-green-800';
      case 'moyen':
        return 'bg-yellow-100 text-yellow-800';
      case 'difficile':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Link 
      to={`/recipe/${id}`} 
      className={cn(
        "block bg-white rounded-lg overflow-hidden shadow-md recipe-card-transition",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          {dietaryInfo.vegetarian && (
            <Badge className="bg-culinary-green text-white hover:bg-culinary-green/90">Végé</Badge>
          )}
          {dietaryInfo.glutenFree && (
            <Badge variant="outline" className="bg-white text-gray-700 border-gray-200">Sans Gluten</Badge>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold mb-2 text-culinary-brown">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {prepTime + cookTime} min
            </span>
            <span className={`px-2 py-0.5 rounded text-xs ${getDifficultyColor()}`}>
              {difficulty}
            </span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
