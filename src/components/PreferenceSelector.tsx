
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

export interface UserPreferences {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
}

interface PreferenceSelectorProps {
  onSavePreferences: (preferences: UserPreferences) => void;
  initialPreferences?: UserPreferences;
}

const PreferenceSelector = ({ 
  onSavePreferences,
  initialPreferences = { vegetarian: false, vegan: false, glutenFree: false, dairyFree: false } 
}: PreferenceSelectorProps) => {
  const [preferences, setPreferences] = useState<UserPreferences>(initialPreferences);
  const { toast } = useToast();

  const handleToggle = (preferenceName: keyof UserPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [preferenceName]: !prev[preferenceName],
      // If vegan is true, vegetarian should also be true
      ...(preferenceName === 'vegan' && !prev.vegan 
        ? { vegetarian: true } 
        : {})
    }));
  };

  const handleSave = () => {
    onSavePreferences(preferences);
    toast({
      title: "Préférences enregistrées",
      description: "Vos préférences alimentaires ont été mises à jour.",
      variant: "default",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-serif text-2xl font-semibold mb-6 text-culinary-brown">Mes préférences alimentaires</h2>
      
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Végétarien</h3>
            <p className="text-gray-500 text-sm">Exclut la viande et le poisson</p>
          </div>
          <Switch 
            checked={preferences.vegetarian} 
            onCheckedChange={() => handleToggle('vegetarian')}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Végétalien</h3>
            <p className="text-gray-500 text-sm">Exclut tous les produits d'origine animale</p>
          </div>
          <Switch 
            checked={preferences.vegan} 
            onCheckedChange={() => handleToggle('vegan')}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Sans gluten</h3>
            <p className="text-gray-500 text-sm">Exclut les aliments contenant du gluten</p>
          </div>
          <Switch 
            checked={preferences.glutenFree} 
            onCheckedChange={() => handleToggle('glutenFree')}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Sans lactose</h3>
            <p className="text-gray-500 text-sm">Exclut les produits laitiers</p>
          </div>
          <Switch 
            checked={preferences.dairyFree} 
            onCheckedChange={() => handleToggle('dairyFree')}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <Button 
          onClick={handleSave}
          className="w-full bg-culinary-green hover:bg-culinary-sage text-white"
        >
          Enregistrer mes préférences
        </Button>
      </div>
    </div>
  );
};

export default PreferenceSelector;
