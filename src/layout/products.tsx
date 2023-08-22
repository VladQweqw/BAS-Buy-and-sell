import SearchBar from "../components/searchBar"
import UseAPi from '../components/useApi';
import { Product } from "./product";

export default function Products() {

   const {data, error, isLoading }: {
    data: ProductType[],
    error: string | null,
    isLoading: boolean,
  } = UseAPi('https://fakestoreapi.com/products?limit=30', 'GET')

   return(
    <article className="article products-wrapper">
        <SearchBar />
         <h1 className="section-title">Main Categories</h1>
         <div className="products">
                {isLoading ? <h1>Loading...</h1> :
                   error ? <h1>Error</h1> :
                   data?.map((product: ProductType, index: number) => {
                    return <Product {...product} key={index} />
                    })
                }
         </div>
         
    </article>
   )
}
