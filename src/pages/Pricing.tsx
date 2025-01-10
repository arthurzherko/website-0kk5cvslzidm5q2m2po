import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Workout tracking',
        'Basic analytics',
        'Goal setting',
      ],
    },
    {
      name: 'Pro',
      price: '$9.99/month',
      description: 'For serious fitness enthusiasts',
      features: [
        'All Basic features',
        'Advanced analytics',
        'Customizable workout plans',
        'Nutrition tracking',
      ],
    },
    {
      name: 'Elite',
      price: '$19.99/month',
      description: 'The ultimate fitness experience',
      features: [
        'All Pro features',
        'Personal coach access',
        'Exclusive workout videos',
        'Priority support',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Choose Your Plan</h1>
      <p className="mb-12 text-center text-xl text-muted-foreground">Select the perfect plan to achieve your fitness goals</p>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-3xl font-bold">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;