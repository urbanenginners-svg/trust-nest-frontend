// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { z } from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useAuth } from '@/hooks/useAuth';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { useToast } from '@/hooks/use-toast';
// import { Mail, Lock, ArrowRight } from 'lucide-react';

// const loginSchema = z.object({
//     email: z.string().email('Please enter a valid email address'),
//     password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// type LoginFormValues = z.infer<typeof loginSchema>;

// interface LoginFormProps {
//     onSwitchToSignUp: () => void;
// }

// export const LoginForm = ({ onSwitchToSignUp }: LoginFormProps) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const { signIn } = useAuth();
//     const navigate = useNavigate();
//     const { toast } = useToast();

//     const form = useForm<LoginFormValues>({
//         resolver: zodResolver(loginSchema),
//         defaultValues: {
//             email: '',
//             password: '',
//         },
//     });

//     const onSubmit = async (values: LoginFormValues) => {
//         setIsLoading(true);
//         const { error } = await signIn(values.email, values.password);

//         if (error) {
//             toast({
//                 title: 'Login Failed',
//                 description: error.message === 'Invalid login credentials'
//                     ? 'Invalid email or password. Please try again.'
//                     : error.message,
//                 variant: 'destructive',
//             });
//         } else {
//             toast({
//                 title: 'Welcome back!',
//                 description: 'Successfully logged in.',
//             });
//             navigate('/dashboard');
//         }
//         setIsLoading(false);
//     };

//     return (
//         <div className="space-y-6">
//             <div>
//                 <h2 className="font-display text-2xl font-bold text-foreground mb-2">Welcome back</h2>
//                 <p className="text-muted-foreground">Sign in to access your dashboard and pools</p>
//             </div>

//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                     <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Email</FormLabel>
//                                 <FormControl>
//                                     <div className="relative">
//                                         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                                         <Input
//                                             {...field}
//                                             type="email"
//                                             placeholder="you@example.com"
//                                             className="pl-10 h-12"
//                                         />
//                                     </div>
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     <FormField
//                         control={form.control}
//                         name="password"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Password</FormLabel>
//                                 <FormControl>
//                                     <div className="relative">
//                                         <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                                         <Input
//                                             {...field}
//                                             type="password"
//                                             placeholder="••••••••"
//                                             className="pl-10 h-12"
//                                         />
//                                     </div>
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     <div className="flex justify-end">
//                         <button
//                             type="button"
//                             className="text-sm text-primary hover:underline"
//                         >
//                             Forgot Password?
//                         </button>
//                     </div>

//                     <Button
//                         type="submit"
//                         variant="hero"
//                         size="lg"
//                         className="w-full"
//                         disabled={isLoading}
//                     >
//                         {isLoading ? (
//                             <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground" />
//                         ) : (
//                             <>
//                                 Login
//                                 <ArrowRight className="w-5 h-5" />
//                             </>
//                         )}
//                     </Button>
//                 </form>
//             </Form>

//             <p className="text-center text-sm text-muted-foreground">
//                 Don't have an account?{' '}
//                 <button
//                     onClick={onSwitchToSignUp}
//                     className="text-primary font-medium hover:underline"
//                 >
//                     Sign up
//                 </button>
//             </p>
//         </div>
//     );
// };
