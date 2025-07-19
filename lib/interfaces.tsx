export interface Repository {
    name: string;
    html_url: string;
    description: string;
    [key: string]: any; // eslint-disable-line no-explicit-any
}