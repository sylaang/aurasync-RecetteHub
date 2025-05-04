
import { Link } from "react-router-dom";
import { Search, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-culinary-terracotta" />
          <Link to="/" className="font-serif text-2xl font-bold text-culinary-brown">
            Explorateur Culinaire
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-culinary-brown font-medium hover:text-culinary-terracotta transition-colors">
            Accueil
          </Link>
          <Link to="/categories" className="text-culinary-brown font-medium hover:text-culinary-terracotta transition-colors">
            Catégories
          </Link>
          <Link to="/preferences" className="text-culinary-brown font-medium hover:text-culinary-terracotta transition-colors">
            Mes Préférences
          </Link>
          <Link to="/recommendations" className="text-culinary-brown font-medium hover:text-culinary-terracotta transition-colors">
            Recommandations
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Rechercher des recettes..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-culinary-green"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-culinary-brown"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button className="hidden md:flex bg-culinary-green hover:bg-culinary-sage text-white">
            Connexion
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
