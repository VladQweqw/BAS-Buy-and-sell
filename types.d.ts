interface CategoryType {
    name: string,
    image: string
}

interface ProductType {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number,
    },
    title: string,
}
