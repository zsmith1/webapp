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
      skills: ["Python", "SQL", "Java", "Javascript", "Typescript", "Go"],
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
      skills: ["Gitlab CI", "CircleCI", "Jenkins", "ArgoCD", "Prometheus", "Grafana", "ELK"],
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
      skills: ["Django", "Express", "Flask", "HTML", "EJS", "Render", "Vercel", "Supabase"],
    },
    {
      id: "other",
      title: "Other Technologies",
      icon: Sailboat,
      skills: ["Git/Github/Gitlab", "Agile Development/Scrum", "Trunk-based Development", "Jira/Confluence"],
    },
  ];

  return (
    <Accordion type="multiple" className="w-full space-y-2">
      {skillCategories.map((category) => {
        const IconComponent = category.icon;
        return (
          <AccordionItem key={category.id} value={category.id} className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <IconComponent className="h-5 w-5 text-primary" />
                <span className="font-medium text-left">{category.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="flex flex-wrap gap-2 mt-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-sm font-normal"
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