
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChefHat, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check if user is logged in on component mount
  useEffect(() => {
    const authToken = localStorage.getItem('culinaryAuthToken');
    const email = localStorage.getItem('culinaryUserEmail');
    if (authToken) {
      setIsLoggedIn(true);
      setUserEmail(email || "");
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('culinaryAuthToken');
    localStorage.removeItem('culinaryUserEmail');
    setIsLoggedIn(false);
    setUserEmail("");
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt sur Explorateur Culinaire !",
    });
    navigate('/');
  };

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
          
          {isLoggedIn ? (
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center">
                <UserRound className="h-5 w-5 mr-1 text-culinary-brown" />
                <span className="text-sm text-culinary-brown font-medium">{userEmail}</span>
              </div>
              <Button 
                onClick={handleLogout}
                variant="outline"
                className="border-culinary-terracotta text-culinary-terracotta hover:bg-culinary-terracotta/10"
              >
                Déconnexion
              </Button>
            </div>
          ) : (
            <Button 
              as="Link"
              onClick={() => navigate('/login')}
              className="hidden md:flex bg-culinary-green hover:bg-culinary-sage text-white"
            >
              Connexion
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
