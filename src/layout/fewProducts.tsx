import { Product } from './products'
import { useNavigate } from 'react-router'
import UseAPi from '../components/useApi';

export default function FewProducts() {
   const navigate = useNavigate();

    const {data, error, isLoading }: {
      data: ProductType[],
      error: string | null,
      isLoading: boolean,
    } = UseAPi('https://fakestoreapi.com/products?limit=10', 'GET')
        
   return(
    <article className="article products-wrapper">
    
         <h1 className="section-title">Main Categories</h1>
            <div className="products">
                
                {isLoading ? <h1>Loading...</h1> :
                   error ? <h1>Error</h1> :
                   data?.map((product: ProductType, index: number) => {
                    return <Product {...product} key={index} />
                    })
                }
            </div>
            <div onClick={() => navigate("/products")} className="show-more button button-primary">
            <p>See more</p>
         </div>
    </article>
   )
}