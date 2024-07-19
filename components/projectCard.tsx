import { Card, Text } from '@mantine/core';

export function ProjectCard({repo}) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder component="a" href={repo.html_url} target="_blank" style={{height: '10rem', marginLeft: 10}}>
            <Text fw={500}>{repo.name}</Text>
            <Text size="sm" c="dimmed">
                {repo.description}
            </Text>
        </Card>
    )
}