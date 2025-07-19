export interface Repository {
    name: string;
    html_url: string;
    description: string;
    [key: string]: unknown;
}