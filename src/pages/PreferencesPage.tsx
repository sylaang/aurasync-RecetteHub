
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import PreferenceSelector from '@/components/PreferenceSelector';
import { ChevronLeft } from 'lucide-react';
import { UserPreferences } from '@/components/PreferenceSelector';

const PreferencesPage = () => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
  });

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
            Mes préférences
          </h1>
          <p className="text-lg text-culinary-brown/80 mb-8">
            Personnalisez vos préférences alimentaires pour obtenir des recommandations adaptées à vos besoins.
          </p>
        </div>
        
        {/* Preferences Section */}
        <div className="max-w-xl mx-auto">
          <PreferenceSelector 
            initialPreferences={userPreferences}
            onSavePreferences={setUserPreferences}
          />
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-serif text-xl font-semibold mb-4 text-culinary-brown">Pourquoi définir vos préférences ?</h2>
            <p className="text-gray-700 mb-4">
              En configurant vos préférences alimentaires, notre système d'IA pourra vous recommander 
              des recettes parfaitement adaptées à vos besoins et restrictions. Plus vous fournissez
              d'informations précises, meilleures seront nos recommandations.
            </p>
            <p className="text-gray-700">
              Vos préférences sont enregistrées localement et utilisées uniquement pour 
              personnaliser votre expérience sur Explorateur Culinaire.
            </p>
          </div>
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

export default PreferencesPage;
