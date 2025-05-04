
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Mail, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const loginFormSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse e-mail valide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, always succeed
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur Explorateur Culinaire !",
      });
      
      // Store a dummy auth token in localStorage
      localStorage.setItem('culinaryAuthToken', 'demo-token');
      localStorage.setItem('culinaryUserEmail', data.email);
      
      // Redirect to home page
      window.location.href = '/';
    }, 1500);
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
            Connexion
          </h1>
          <p className="text-lg text-culinary-brown/80 mb-8">
            Connectez-vous pour accéder à vos recettes favorites et vos recommandations personnalisées.
          </p>
        </div>
        
        {/* Login Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse e-mail</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input 
                            placeholder="vous@example.com" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                      <FormDescription>
                        <Link 
                          to="/forgot-password" 
                          className="text-culinary-terracotta hover:text-culinary-brown text-sm"
                        >
                          Mot de passe oublié ?
                        </Link>
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-culinary-green hover:bg-culinary-sage text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion en cours..." : "Se connecter"}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Vous n'avez pas de compte ? 
                <Link 
                  to="/register" 
                  className="ml-1 text-culinary-terracotta hover:text-culinary-brown font-medium"
                >
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-culinary-brown text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Explorateur Culinaire. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
