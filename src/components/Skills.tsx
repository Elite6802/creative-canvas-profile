
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skillsData: Skill[] = [
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Vue.js", level: 75, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "PostgreSQL", level: 60, category: "backend" },
  { name: "Git", level: 80, category: "tools" },
  { name: "Docker", level: 60, category: "tools" },
];

const Skills = () => {
  // Group skills by category
  const frontendSkills = skillsData.filter(skill => skill.category === "frontend");
  const backendSkills = skillsData.filter(skill => skill.category === "backend");
  const toolsSkills = skillsData.filter(skill => skill.category === "tools");

  return (
    <section id="skills" className="py-20 section-container">
      <h2 className="heading-lg mb-10">
        <span className="text-primary">#</span> Skills &amp; Technologies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="p-6 border border-border rounded-lg bg-card/50 hover:shadow-xl transition-shadow">
          <h3 className="heading-md mb-6 flex items-center">
            <Badge variant="outline" className="text-primary border-primary mr-2">01</Badge>
            Frontend
          </h3>
          <div className="space-y-6">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" indicatorClassName="bg-primary" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 border border-border rounded-lg bg-card/50 hover:shadow-xl transition-shadow">
          <h3 className="heading-md mb-6 flex items-center">
            <Badge variant="outline" className="text-primary border-primary mr-2">02</Badge>
            Backend
          </h3>
          <div className="space-y-6">
            {backendSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" indicatorClassName="bg-primary" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 border border-border rounded-lg bg-card/50 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
          <h3 className="heading-md mb-6 flex items-center">
            <Badge variant="outline" className="text-primary border-primary mr-2">03</Badge>
            Tools &amp; Others
          </h3>
          <div className="space-y-6">
            {toolsSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" indicatorClassName="bg-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-6">Other Technologies I've Worked With</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {["SASS", "Next.js", "GraphQL", "Redux", "Jest", "Webpack", "Firebase", "AWS", "GitHub Actions", "Figma"].map((tech) => (
            <Badge key={tech} variant="secondary" className="py-1.5 px-3">{tech}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
