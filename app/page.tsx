import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail, ArrowDown } from 'lucide-react'
import { ProjectCarouselWrapper } from '../components/projectCarouselWrapper';
import { Skills } from '../components/skills';

export default function HomePage() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/zach-s-smith/',
      icon: FaLinkedin,
      color: 'text-blue-500 hover:text-blue-400 hover:scale-110',
      bgColor: 'hover:bg-blue-500/10',
      label: 'LinkedIn Profile',
    },
    {
      href: 'https://github.com/zsmith1',
      icon: FaGithub,
      color: 'text-gray-700 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white hover:scale-110',
      bgColor: 'hover:bg-gray-500/10',
      label: 'GitHub Profile',
    },
    {
      href: 'mailto:zach.smith2171@gmail.com',
      icon: Mail,
      color: 'text-red-500 hover:text-red-400 hover:scale-110',
      bgColor: 'hover:bg-red-500/10',
      label: 'Email Contact',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Main hero content */}
        <div className="relative z-10 text-center space-y-8 max-w-4xl">
          {/* Name with gradient text */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent animate-in slide-in-from-bottom-8 duration-1000">
              Zach Smith
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-in slide-in-from-bottom-4 duration-1000 delay-300"></div>
          </div>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto animate-in slide-in-from-bottom-6 duration-1000 delay-500">
            Full-Stack Developer specializing in automation, CI/CD, and modern web technologies
          </p>

          <div className="relative pb-20">
            {/* Social links */}
            <div className="flex justify-center gap-6 animate-in slide-in-from-bottom-4 duration-1000 delay-700">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-2xl border border-border/50 backdrop-blur-sm transition-all duration-300 ${link.color} ${link.bgColor} hover:shadow-lg hover:shadow-current/10 hover:-translate-y-1`}
                    aria-label={link.label}
                  >
                    <IconComponent size={28} />
                  </a>
                );
              })}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce animate-in fade-in duration-1000 delay-1000">
              <ArrowDown className="text-muted-foreground/60" size={28} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Bio Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid gap-8 md:gap-12">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p className="hover:text-foreground transition-colors duration-300 p-6 rounded-2xl hover:bg-card/50 border border-transparent hover:border-border/50">
                  Welcome to my portfolio! I am currently a Full-Stack Developer with extensive experience in back-end development and continuous integration. I offer a diverse range of skills and expertise with over 4 years of experience in optimizing workflows and automating tasks for increased efficiency.
                </p>
                <p className="hover:text-foreground transition-colors duration-300 p-6 rounded-2xl hover:bg-card/50 border border-transparent hover:border-border/50">
                  I specialize in automation tools, CI/CD, testing using frameworks such as Selenium and server-side solutions using modern technologies such as Python and Node.js.
                </p>
                <p className="hover:text-foreground transition-colors duration-300 p-6 rounded-2xl hover:bg-card/50 border border-transparent hover:border-border/50">
                  I am eager to expand my skill set to include front-end development, seeking to blend my strong back-end and continuous integration expertise with user interfaces to create well-rounded and impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 py-20 bg-card/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex justify-center">
              <ProjectCarouselWrapper />
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 ${link.color} hover:bg-current/10`}
                    aria-label={link.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Zach Smith. Built with Next.js and shadcn/ui.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}