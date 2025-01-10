import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart2, Calendar, Clock, Target, Users } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: Activity, title: 'Workout Tracking', description: 'Log your exercises, sets, reps, and weights with ease.' },
    { icon: BarChart2, title: 'Progress Analytics', description: 'Visualize your fitness journey with detailed charts and insights.' },
    { icon: Target, title: 'Goal Setting', description: 'Set and track your fitness goals to stay motivated and focused.' },
    { icon: Calendar, title: 'Workout Planning', description: 'Plan your workouts in advance and stick to your schedule.' },
    { icon: Clock, title: 'Rest Timer', description: 'Built-in rest timer to optimize your workout intervals.' },
    { icon: Users, title: 'Community Challenges', description: 'Join challenges and compete with friends for extra motivation.' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">FitTrack Features</h1>
      <p className="mb-12 text-center text-xl text-muted-foreground">Discover the powerful features that make FitTrack your ultimate fitness companion.</p>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <feature.icon className="mb-2 h-12 w-12 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;