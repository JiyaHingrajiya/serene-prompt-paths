import { Link } from "react-router-dom";
import heroImage from "@/assets/spa-hero.jpg";
const blogButtons = [{
  title: "Data Science Models",
  url: "https://intellipaat.com/blog/data-science-models/",
  description: "Explore various data science models and their applications"
}, {
  title: "Data Transformation",
  url: "https://intellipaat.com/blog/data-transformation/",
  description: "Learn about data transformation techniques and best practices"
}, {
  title: "Machine Learning",
  url: "https://intellipaat.com/blog/category/machine-learning/",
  description: "Discover the fundamentals and advanced concepts of ML"
}, {
  title: "Artificial Intelligence",
  url: "https://intellipaat.com/blog/category/artificial-intelligence/",
  description: "Dive into AI technologies and their real-world applications"
}, {
  title: "Cloud Computing",
  url: "https://intellipaat.com/blog/category/cloud-computing/",
  description: "Master cloud platforms and computing services"
}, {
  title: "DevOps",
  url: "https://intellipaat.com/blog/category/devops/",
  description: "Learn DevOps practices and automation tools"
}, {
  title: "Cybersecurity",
  url: "https://intellipaat.com/blog/category/cyber-security/",
  description: "Understand security principles and protection strategies"
}, {
  title: "Big Data",
  url: "https://intellipaat.com/blog/category/big-data/",
  description: "Handle and analyze large-scale data efficiently"
}, {
  title: "Programming",
  url: "https://intellipaat.com/blog/category/programming/",
  description: "Enhance your coding skills across multiple languages"
}, {
  title: "Career Guides",
  url: "https://intellipaat.com/blog/category/career-advice/",
  description: "Navigate your tech career with expert guidance"
}];
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background via-spa-cream to-secondary/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">Intellipaat</Link>
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
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="hero-title mb-8">
            Intellipaat Blogs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover a world of knowledge through our curated collection of technical insights, 
            expert guidance, and industry trends in a serene learning environment.
          </p>
        </div>
      </section>

      {/* Blog Navigation Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Explore Our Learning Paths
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your area of interest and embark on a journey of continuous learning 
              with our expertly crafted content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {blogButtons.map((button, index) => <a key={index} href={button.url} target="_blank" rel="noopener noreferrer" className="spa-card group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-spa-sage to-spa-sage-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {button.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {button.description}
                  </p>
                </div>
              </a>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="section-title mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join thousands of learners who have advanced their careers through our comprehensive 
            educational resources and expert guidance.
          </p>
          <a href="https://intellipaat.com" target="_blank" rel="noopener noreferrer" className="spa-button inline-block text-lg px-12 py-5">
            Visit Intellipaat
          </a>
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
    </div>;
};
export default Index;