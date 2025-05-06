import React, { useState, useEffect } from 'react'; // Ajoute l'importation de React
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RecipeCard from '@/components/RecipeCard';
import { getRecipesByCategory } from '@/data/recipes'; // Import de la fonction

// Assure-toi d'importer l'interface Recipe
import { Recipe } from '@/data/recipes'; // Adapté à ton chemin d'importation

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const categoryNameMap = {
    appetizers: "Entrées",
    "main-dishes": "Plats principaux",
    desserts: "Desserts",
    quick: "Rapides"
  };

  // Vérifie si l'ID existe dans le tableau `categoryNameMap`
  const categoryName = categoryNameMap[id] || "Catégorie";
  
  const [categoryRecipes, setCategoryRecipes] = useState<Recipe[]>([]); // Utilise useState avec l'interface Recipe
  const [loading, setLoading] = useState<boolean>(true); // Utilise useState pour gérer le chargement

  useEffect(() => {
    const fetchRecipes = async () => {
      if (id) {
        try {
          const recipes = await getRecipesByCategory(id); // Appel à la fonction pour récupérer les recettes
          setCategoryRecipes(recipes);
        } catch (error) {
          console.error('Erreur lors de la récupération des recettes:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRecipes();
  }, [id]); // Re-fetch les recettes lorsque l'ID change

  if (loading) {
    return (
      <div className="min-h-screen bg-culinary-beige/30">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-serif font-bold text-culinary-brown mb-4">
            Chargement des recettes...
          </h1>
        </div>
      </div>
    );
  }

  // Si la catégorie n'existe pas
  if (!id) {
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
        {/* Header avec info sur la catégorie */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-culinary-terracotta hover:text-culinary-brown transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Retour à l'accueil
          </Link>
          
          <div className="relative rounded-lg overflow-hidden h-48 md:h-64 mb-6">
            <img 
              src="category-image-url" // Remplace avec l'URL de l'image de la catégorie
              alt="Nom de la catégorie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h1 className="text-white font-serif text-3xl md:text-4xl font-bold">{categoryName}</h1>
              <p className="text-white/90 text-lg">Description de la catégorie</p>
            </div>
          </div>
        </div>
        
        {/* Grille des recettes */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-culinary-brown mb-6">
            Recettes dans la catégorie
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
      
      {/* Footer */}
      <footer className="bg-culinary-brown text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Explorateur Culinaire. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;
