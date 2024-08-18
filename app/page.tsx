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
              <a href="https://www.linkedin.com/in/zach-s-smith/" target="_blank" style={{color: "inherit", textDecoration: "none"}}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconBrandLinkedin size={36} stroke={2} color='#0a66c2'/>
                </motion.div>
              </a>
              <a href="https://github.com/zsmith1" target="_blank" style={{color: "inherit", textDecoration: "none"}}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconBrandGithub size={36} stroke={2} color='#181717'/>
                </motion.div>
              </a>
              <a href="mailto:zach.smith2171@gmail.com/" target="_blank" style={{color: "inherit", textDecoration: "none"}}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconMail size={36} stroke={2} color='#dc4e41'/>
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
            Welcome to my portfolio! I am currently a Full-Stack Developer with extensive experience in back-end development and continuous integration, I offer a diverse range of skills and expertise. I have over 4 years of experience in optimizing workflows and automating tasks for increased efficiency.
            <br/>
            <br/>
            I specialize in automation tools, CI/CD, testing using frameworks such as Selenium and server-side solutions using modern technologies such as Python and Node.js.
            <br/>
            <br/>
            I am eager to expand my skill set to include front-end development, seeking to blend my strong back-end and continuous integration expertise with user interfaces to create well-rounded and impactful solutions.
            <br/>
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
