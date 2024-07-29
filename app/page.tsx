"use client";

import { AppShell, Container, Title, Group, Space, Text, Stack } from '@mantine/core';
import {  IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';
import { motion } from "framer-motion"

import { ProjectCarousel } from '../components/projects';
import { Skills } from '../components/skills';

export default function HomePage() {
  return (
    <AppShell
      header={{ height: 100 }}
      padding="md"
    >
      <AppShell.Header>
        <Container>
          <Stack align='center' justify='center'>
            <Title>Zach Smith</Title>
            <Group justify='center'>
              <a href="https://www.linkedin.com/in/zach-s-smith/" target="_blank">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconBrandLinkedin size={36} stroke={2}/>
                </motion.div>
              </a>
              <a href="https://github.com/zsmith1" target="_blank">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconBrandGithub size={36} stroke={2}/>
                </motion.div>
              </a>
              <a href="mailto:zach.smith2171@gmail.com/" target="_blank">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconMail size={36} stroke={2}/>
                </motion.div>
              </a>
            </Group>
          </Stack>
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
