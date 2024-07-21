"use client";

import { AppShell, Container, Grid, Title, Group, Space, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {  IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';

import { ProjectCarousel } from '../components/projects';
import { Skills } from '../components/skills';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Container>
          <Group justify='center'>
            <Title>Zach Smith</Title>
            <a href="https://www.linkedin.com/in/zach-s-smith/" target="_blank">
              <IconBrandLinkedin size={40} stroke={2}/>
            </a>
            <a href="https://github.com/zsmith1" target="_blank">
              <IconBrandGithub size={40} stroke={2}/>
            </a>
            <a href="mailto:zach.smith2171@gmail.com/" target="_blank">
              <IconMail size={40} stroke={2}/>
            </a>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container>
          <Title>Bio</Title>
          <Space h="sm" />
          <Text>
            I am currently a Full-Stack Developer with a strong foundation in automation tools, cloud technologies, and CI/CD pipelines, I bring over 4 years of experience in optimizing workflows and automating tasks for enhanced efficiency. 
            <br/>
            <br/>
            Now, I am eager to expand my knowledge, with a long-term goal of transitioning into project management. My aim is to blend my expertise in infrastructure management with my love for crafting innovative software solutions, ultimately leading teams to deliver exceptional projects on time and within budget. 
            <br/>
            <br/>
            Let&apos;s collaborate to bring efficiency, scalability, and excellence to your projects!
          </Text>
        </Container>
        <Space h="sm" />
        <Container>
          <Title>Skills</Title>
          <Space h="sm" />
          <Skills/>
        </Container>
        <Space h="sm" />
        <Container>
          <Title>Projects</Title>
          <Space h="sm" />
          <ProjectCarousel/>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
