export interface ServiceProps {
    id: number;
    image: string;
    logo: string;
    name: string;
    address: {
        city: string;
        state: string
    };
    evaluation: number;
    categories: string[];
    service: string;
}
