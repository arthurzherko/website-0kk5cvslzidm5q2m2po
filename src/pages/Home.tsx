import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Activity, BarChart2, Target } from 'lucide-react';

const Home = () => {
  const features = [
    { icon: Activity, title: 'Workout Tracking', description: 'Log your exercises, sets, reps, and weights with ease.' },
    { icon: BarChart2, title: 'Progress Analytics', description: 'Visualize your fitness journey with detailed charts and insights.' },
    { icon: Target, title: 'Goal Setting', description: 'Set and track your fitness goals to stay motivated and focused.' },
  ];

  const testimonials = [
    { content: 'FitTrack has completely transformed my fitness routine. I can't imagine working out without it now!', author: 'Sarah L.', avatar: 'https://i.pravatar.cc/150?img=1' },
    { content: 'The progress tracking feature is incredible. Seeing my improvements keeps me motivated every day.', author: 'Mike R.', avatar: 'https://i.pravatar.cc/150?img=2' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Track Your Fitness Journey</h1>
        <p className="mb-8 text-xl text-muted-foreground">Achieve your fitness goals with FitTrack, your personal workout companion.</p>
        <Button size="lg" className="text-lg">Download Now</Button>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-semibold">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-semibold">What Our Users Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="mb-4 text-3xl font-semibold">Ready to Start Your Fitness Journey?</h2>
        <p className="mb-8 text-xl text-muted-foreground">Download FitTrack today and take the first step towards a healthier you.</p>
        <Button size="lg" className="text-lg">Get FitTrack Now</Button>
      </section>
    </div>
  );
};

export default Home;