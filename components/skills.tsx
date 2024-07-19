import { IconCodeCircle, IconTopologyRing2, IconAutomation, IconTestPipe, IconBox, IconWorld, IconSailboat } from '@tabler/icons-react';
import { Accordion, rem, List } from '@mantine/core';

export function Skills() {
    const languages = ["Python", "SQL", "Java", "Javascript", "Typescript", "Go"];
    const iac = ["Ansible", "Terraform/OpenTofu", "AWS", "Azure"];
    const cicd = ["Gitlab CI", "CircleCI", "Jenkins", "ArgoCD", "Prometheus", "Grafana", "ELK"];
    const testing = ["Spock", "Pytest", "Selenium", "Geb", "Behave", "Jest"];
    const containerization = ["Kubernetes", "Docker"];
    const webDev = ["Django", "Express", "Flask", "HTML", "EJS", "Render", "Vercel", "Supabase"];
    const other =["Git/Github/Gitlab", "Agile Development/Scrum", "Trunk-based Development", "Jira/Confluence"];
  return (
    <Accordion variant="contained">
      <Accordion.Item value="languages">
        <Accordion.Control
          icon={
            <IconCodeCircle
              style={{ width: rem(20), height: rem(20) }}
            />
          }
        >
          Programming Languages
        </Accordion.Control>
        <Accordion.Panel>
            <List>
                {languages.map(lang => {
                    return (
                        <List.Item key={lang}>
                            {lang}
                        </List.Item>
                    )
                })}
            </List>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="iac">
        <Accordion.Control
          icon={
            <IconTopologyRing2
              style={{ width: rem(20), height: rem(20) }}
            />
          }
        >
          Infrastructure as Code
        </Accordion.Control>
        <Accordion.Panel>
            <List>
                {iac.map(lang => {
                    return (
                        <List.Item key={lang}>
                            {lang}
                        </List.Item>
                    )
                })}
            </List>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="cicd">
        <Accordion.Control
          icon={
            <IconAutomation
              style={{ width: rem(20), height: rem(20) }}
            />
          }
        >
          CICD
        </Accordion.Control>
        <Accordion.Panel>
            <List>
                {cicd.map(lang => {
                    return (
                        <List.Item key={lang}>
                            {lang}
                        </List.Item>
                    )
                })}
            </List>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="testing">
        <Accordion.Control
          icon={
            <IconTestPipe
              style={{ width: rem(20), height: rem(20) }}
            />
          }
        >
          Testing
        </Accordion.Control>
        <Accordion.Panel>
            <List>
                {testing.map(lang => {
                    return (
                        <List.Item key={lang}>
                            {lang}
                        </List.Item>
                    )
                })}
            </List>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="containerization">
        <Accordion.Control
          icon={
            <IconBox
              style={{ width: rem(20), height: rem(20) }}
            />
          }
        >
          Containerization
        </Accordion.Control>
        <Accordion.Panel>
            <List>
                {containerization.map(lang => {
                    return (
                        <List.Item key={lang} >
                            {lang}
                        </List.Item>
                    )
                })}
            </List>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="webdev">
        <Accordion.Control
          icon={
            <IconWorld
              style={{ width: rem(20), height: rem(20) }}
            />
          }
        >
          Web Development
        </Accordion.Control>
        <Accordion.Panel>
            <List>
                {webDev.map(lang => {
                    return (
                        <List.Item key={lang}>
                            {lang}
                        </List.Item>
                    )
                })}
            </List>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="other">
        <Accordion.Control
          icon={
            <IconSailboat
              style={{ width: rem(20), height: rem(20) }}
            />
          }
        >
          Other
        </Accordion.Control>
        <Accordion.Panel>
            <List>
                {other.map(lang => {
                    return (
                        <List.Item key={lang}>
                            {lang}
                        </List.Item>
                    )
                })}
            </List>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}