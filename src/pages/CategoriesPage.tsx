import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { categories } from '@/data/categories';

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-culinary-beige/30">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-culinary-terracotta hover:text-culinary-brown transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Retour à l'accueil
          </Link>
          
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-culinary-brown mb-4">
            Toutes les catégories
          </h1>
          <p className="text-lg text-culinary-brown/80">
            Explorez nos collections de recettes par catégories pour trouver l'inspiration.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}  // Redirection vers la page de catégorie
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              {/* Image et description de la catégorie */}
              <div className="relative h-48">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white font-serif text-2xl font-bold">{category.name}</h2>
                  <p className="text-white/90">{category.description}</p>
                </div>
              </div>
              
              {/* Texte de lien pour voir les recettes */}
              <div className="p-4 flex justify-end">
                <span className="inline-flex items-center text-culinary-terracotta group-hover:text-culinary-brown transition-colors">
                  Voir les recettes <ChevronRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
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

export default CategoriesPage;
