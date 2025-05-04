
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

const CategoryList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="group relative rounded-lg overflow-hidden shadow-md h-48 recipe-card-transition"
        >
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white font-serif text-xl font-semibold">{category.name}</h3>
            <p className="text-white/80 text-sm">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
