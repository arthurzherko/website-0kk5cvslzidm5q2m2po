import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-primary">FitTrack</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-foreground hover:text-primary">Home</Link></li>
            <li><Link to="/features" className="text-foreground hover:text-primary">Features</Link></li>
            <li><Link to="/pricing" className="text-foreground hover:text-primary">Pricing</Link></li>
            <li><Link to="/contact" className="text-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <Button className="hidden md:inline-flex">Download App</Button>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-background px-4 py-2">
            <ul className="space-y-2">
              <li><Link to="/" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/features" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>Features</Link></li>
              <li><Link to="/pricing" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>Pricing</Link></li>
              <li><Link to="/contact" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>Contact</Link></li>
              <li><Button className="mt-2 w-full" onClick={toggleMenu}>Download App</Button></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;