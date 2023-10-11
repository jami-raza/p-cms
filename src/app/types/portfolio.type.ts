export type IPorfolio = {
    id: number,
    name: string,
    image: string,
    description: string,
    category: string,
    subtitle: string,
    tags: string,
    gallery: string
}
export type Portfolio = {
    data: IPorfolio[],
    status: string
}