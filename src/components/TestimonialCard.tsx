import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  content: string;
  author: string;
  avatar: string;
}

const TestimonialCard = ({ content, author, avatar }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <p className="text-muted-foreground">"{content}"</p>
      </CardContent>
      <CardFooter className="flex items-center">
        <Avatar className="mr-2">
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{author}</span>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;