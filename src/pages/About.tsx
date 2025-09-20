import { Link } from "react-router-dom";
import heroImage from "@/assets/spa-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
              Intellipaat Spa
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center gradient-bg">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
            About Our Learning Sanctuary
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Where technology meets tranquility in the pursuit of knowledge
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="spa-card mb-12">
            <h2 className="section-title text-center">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Intellipaat Spa, we believe that learning should be a serene and transformative experience. 
              We've created a unique digital wellness center where cutting-edge technology education meets 
              the calming principles of mindful learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our carefully curated collection of technical resources provides a peaceful pathway to 
              professional growth, allowing you to absorb complex concepts in an environment designed 
              for clarity and focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="spa-card">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Mindful Technology</h3>
              <p className="text-muted-foreground leading-relaxed">
                We integrate the latest in tech education with mindfulness principles, 
                creating a balanced approach to learning that nurtures both skill and well-being.
              </p>
            </div>
            <div className="spa-card">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Curated Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece of content is carefully selected and organized to provide 
                maximum value while maintaining our commitment to a stress-free learning environment.
              </p>
            </div>
          </div>

          <div className="spa-card text-center">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Continue Your Journey with Intellipaat
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to dive deeper into your learning experience? Explore the full range of 
              courses, certifications, and resources available at Intellipaat's main platform.
            </p>
            <a
              href="https://intellipaat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="spa-button inline-block text-lg px-12 py-5"
            >
              Explore Intellipaat
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-spa-sage to-spa-sage-dark rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-primary-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Serenity</h3>
              <p className="text-muted-foreground">
                Creating peaceful learning environments that reduce stress and enhance focus.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-spa-sage to-spa-sage-dark rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-primary-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                Delivering only the highest quality educational content and resources.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-spa-sage to-spa-sage-dark rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-primary-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Growth</h3>
              <p className="text-muted-foreground">
                Fostering continuous learning and professional development in a supportive atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Intellipaat Blogs</h3>
            <p className="text-muted-foreground mb-6">
              Empowering minds through knowledge and tranquil learning experiences
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Support
              </a>
              <a href="https://intellipaat.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Intellipaat.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Intellipaat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;