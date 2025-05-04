
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import RecipeCard from '@/components/RecipeCard';
import PreferenceSelector from '@/components/PreferenceSelector';
import { ChevronLeft } from 'lucide-react';
import { UserPreferences } from '@/components/PreferenceSelector';
import { getRecommendedRecipes } from '@/data/recipes';

const RecommendationsPage = () => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
  });
  
  const [showPreferenceEditor, setShowPreferenceEditor] = useState(false);
  const recommendedRecipes = getRecommendedRecipes(userPreferences);

  // Try to load preferences from localStorage
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
    setShowPreferenceEditor(false);
    
    // Save to localStorage for persistence
    try {
      localStorage.setItem('culinaryPreferences', JSON.stringify(preferences));
    } catch (e) {
      console.error('Failed to save preferences', e);
    }
  };

  return (
    <div className="min-h-screen bg-culinary-beige/30">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-culinary-terracotta hover:text-culinary-brown transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Retour à l'accueil
          </Link>
          
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-culinary-brown mb-4">
            Recommandations personnalisées
          </h1>
          <p className="text-lg text-culinary-brown/80">
            Des recettes sélectionnées spécialement pour vous en fonction de vos préférences.
          </p>
        </div>
        
        {/* Toggle Preferences Editor */}
        <button 
          onClick={() => setShowPreferenceEditor(!showPreferenceEditor)}
          className="mb-6 px-4 py-2 bg-culinary-green hover:bg-culinary-sage text-white rounded-md transition-colors"
        >
          {showPreferenceEditor ? 'Masquer les préférences' : 'Modifier mes préférences'}
        </button>
        
        {/* Preferences Editor (conditional) */}
        {showPreferenceEditor && (
          <div className="mb-8">
            <PreferenceSelector 
              initialPreferences={userPreferences}
              onSavePreferences={handleSavePreferences}
            />
          </div>
        )}
        
        {/* Recommendations */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-culinary-brown mb-6">
            Vos recettes recommandées
          </h2>
          
          {recommendedRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-culinary-brown text-lg mb-4">
                Aucune recette ne correspond actuellement à vos préférences.
              </p>
              <p className="text-culinary-terracotta mb-4">
                Essayez d'ajuster vos préférences alimentaires pour obtenir des recommandations.
              </p>
              <button 
                onClick={() => setShowPreferenceEditor(true)}
                className="px-4 py-2 bg-culinary-terracotta hover:bg-culinary-brown text-white rounded-md transition-colors"
              >
                Modifier mes préférences
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-culinary-brown text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Explorateur Culinaire. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default RecommendationsPage;
