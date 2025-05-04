
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChefHat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FeaturedRecipe from '@/components/FeaturedRecipe';
import RecipeCard from '@/components/RecipeCard';
import CategoryList from '@/components/CategoryList';
import PreferenceSelector from '@/components/PreferenceSelector';
import { recipes, getFeaturedRecipes, getRecommendedRecipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { UserPreferences } from '@/components/PreferenceSelector';

const Index = () => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
  });

  // Load saved preferences from localStorage when component mounts
  useEffect(() => {
    const savedPreferences = localStorage.getItem('culinaryPreferences');
    if (savedPreferences) {
      try {
        setUserPreferences(JSON.parse(savedPreferences));
      } catch (e) {
        console.error('Failed to parse saved preferences', e);
      }
    }
  }, []);

  const handleSavePreferences = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
    
    // Save to localStorage
    try {
      localStorage.setItem('culinaryPreferences', JSON.stringify(preferences));
    } catch (e) {
      console.error('Failed to save preferences', e);
    }
  };

  const featuredRecipes = getFeaturedRecipes();
  const recommendedRecipes = getRecommendedRecipes(userPreferences);

  return (
    <div className="min-h-screen bg-culinary-beige/30">
      <Navbar />
      
      {/* Hero section with featured recipe */}
      <section className="container mx-auto px-4 py-8">
        {featuredRecipes.length > 0 && <FeaturedRecipe recipe={featuredRecipes[0]} />}
      </section>
      
      {/* Categories section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-culinary-brown">
            Explorer par catégories
          </h2>
          <Link 
            to="/categories" 
            className="flex items-center text-culinary-terracotta hover:text-culinary-brown transition-colors"
          >
            Voir tout <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <CategoryList />
      </section>
      
      {/* Popular recipes */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-culinary-brown">
            Recettes populaires
          </h2>
          <Link 
            to="/recipes" 
            className="flex items-center text-culinary-terracotta hover:text-culinary-brown transition-colors"
          >
            Voir tout <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      
      {/* Preferences and recommendations section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <PreferenceSelector 
              initialPreferences={userPreferences}
              onSavePreferences={setUserPreferences}
            />
            
            <div>
              <div className="flex items-center mb-6">
                <ChefHat className="h-6 w-6 text-culinary-terracotta mr-2" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-culinary-brown">
                  Vos recommandations
                </h2>
              </div>
              
              {recommendedRecipes.length > 0 ? (
                <div className="space-y-4">
                  {recommendedRecipes.map((recipe) => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={recipe}
                      className="max-w-none" 
                    />
                  ))}
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="mt-4 border-culinary-terracotta text-culinary-terracotta hover:bg-culinary-terracotta hover:text-white"
                  >
                    <Link to="/recommendations">
                      Voir plus de recommandations
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="bg-culinary-beige/50 rounded-lg p-6 text-center">
                  <p className="text-lg text-culinary-brown mb-4">
                    Définissez vos préférences alimentaires pour obtenir des recommandations personnalisées !
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-culinary-brown text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-6 w-6" />
                <span className="font-serif text-xl font-bold">Explorateur Culinaire</span>
              </div>
              <p className="text-white/80 max-w-xs">
                Découvrez des recettes adaptées à vos préférences et contraintes alimentaires.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">Explorer</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-white/80 hover:text-white">Accueil</Link></li>
                  <li><Link to="/categories" className="text-white/80 hover:text-white">Catégories</Link></li>
                  <li><Link to="/recommendations" className="text-white/80 hover:text-white">Recommandations</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">Compte</h3>
                <ul className="space-y-2">
                  <li><Link to="/login" className="text-white/80 hover:text-white">Connexion</Link></li>
                  <li><Link to="/signup" className="text-white/80 hover:text-white">Inscription</Link></li>
                  <li><Link to="/preferences" className="text-white/80 hover:text-white">Préférences</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">À propos</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-white/80 hover:text-white">Notre mission</Link></li>
                  <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Explorateur Culinaire. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
