
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RecipeCard from '@/components/RecipeCard';
import { categories } from '@/data/categories';
import { recipes } from '@/data/recipes';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the current category
  const category = categories.find((cat) => cat.id === id);
  
  // Filter recipes that belong to this category
  const categoryRecipes = recipes.filter((recipe) => {
    // For demo purposes, let's filter recipes for each category
    if (!id) return false;
    
    if (id === 'appetizers' && recipe.id.includes('salade')) return true;
    if (id === 'main-dishes' && recipe.id.includes('coq')) return true;
    if (id === 'desserts' && recipe.id.includes('tarte')) return true;
    if (id === 'drinks' && recipe.id.includes('mousse')) return true;
    if (id === 'vegetarian' && recipe.dietaryInfo.vegetarian) return true;
    if (id === 'quick' && recipe.prepTime < 30) return true;
    
    return false;
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-culinary-beige/30">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-serif font-bold text-culinary-brown mb-4">
            Catégorie non trouvée
          </h1>
          <p className="mb-6">La catégorie que vous recherchez n'existe pas.</p>
          <Link 
            to="/" 
            className="inline-flex items-center text-culinary-terracotta hover:text-culinary-brown transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-culinary-beige/30">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header with category information */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-culinary-terracotta hover:text-culinary-brown transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Retour à l'accueil
          </Link>
          
          <div className="relative rounded-lg overflow-hidden h-48 md:h-64 mb-6">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h1 className="text-white font-serif text-3xl md:text-4xl font-bold">{category.name}</h1>
              <p className="text-white/90 text-lg">{category.description}</p>
            </div>
          </div>
        </div>
        
        {/* Recipes grid */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-culinary-brown mb-6">
            Recettes {category.name.toLowerCase()}
          </h2>
          
          {categoryRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-culinary-brown text-lg mb-4">
                Aucune recette dans cette catégorie pour le moment.
              </p>
              <p className="text-culinary-terracotta">
                Revenez bientôt pour découvrir de nouvelles recettes !
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer - Simple version */}
      <footer className="bg-culinary-brown text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Explorateur Culinaire. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;
