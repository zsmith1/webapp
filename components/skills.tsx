import { Code2, Network, Workflow, TestTube, Container, Globe, Sailboat } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const skillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "SQL", "Java", "Javascript", "Typescript"],
    },
    {
      id: "iac",
      title: "Infrastructure as Code",
      icon: Network,
      skills: ["Ansible", "Terraform/OpenTofu", "AWS", "Azure"],
    },
    {
      id: "cicd",
      title: "CI/CD & DevOps",
      icon: Workflow,
      skills: ["Gitlab CI", "CircleCI", "Prometheus", "Grafana", "ELK"],
    },
    {
      id: "testing",
      title: "Testing",
      icon: TestTube,
      skills: ["Spock", "Pytest", "Selenium", "Geb", "Behave", "Jest"],
    },
    {
      id: "containerization",
      title: "Containerization",
      icon: Container,
      skills: ["Kubernetes", "Docker"],
    },
    {
      id: "webdev",
      title: "Web Development",
      icon: Globe,
      skills: ["Django", "Express", "Flask", "HTML", "Next.js", "Render", "Vercel", "Supabase"],
    },
    {
      id: "other",
      title: "Other Technologies",
      icon: Sailboat,
      skills: ["Git/Github/Gitlab", "Agile Development/Scrum", "Trunk-based Development", "Jira/Confluence"],
    },
  ];

  return (
    <Accordion type="multiple" className="w-full space-y-4">
      {skillCategories.map((category) => {
        const IconComponent = category.icon;
        return (
          <AccordionItem 
            key={category.id} 
            value={category.id} 
            className="border border-border/50 rounded-2xl px-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border/30">
                  <IconComponent className="h-5 w-5 text-blue-500" />
                </div>
                <span className="font-semibold text-left text-lg hover:text-blue-500 transition-colors duration-300">
                  {category.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <div className="flex flex-wrap gap-3 mt-4">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm font-medium px-4 py-2 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/40 hover:border-border hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:text-foreground hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}