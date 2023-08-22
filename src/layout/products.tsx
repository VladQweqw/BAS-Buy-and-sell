import { Link } from "react-router-dom"
import SearchBar from "../components/searchBar"
import UseAPi from '../components/useApi';

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

export function Product(data: ProductType) {

    function getTime(time: number): string {
        const months = ['Dec', 'Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
        const date = new Date(time);
        
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        
        const day = date.getDate();
        const month = months[date.getMonth()];
        
        
        let formatedTime = `${day} ${month} ${hours}:${minutes}`
        return formatedTime;
    }

    function capitalize(str: string) {
        return str[0].toUpperCase() + str.slice(1);
    }

    function titleToUrl(title: string) {
        return title.toLocaleLowerCase().trim().split(' ').join('-')
    } 


    return(
            <div className="product" key={data.id}>
                <Link to={`/${titleToUrl(data.title)}/${data.id}`}>
                   {Math.random() > .7 && 
                    <div title="Shipping" className='courier'>
                        <i className="fas fa-truck"></i>
                    </div> }

                    <div className="product-image-wrapper">
                        <img src={data.image} alt={data.title} className="product-image" />
                    </div>
                </Link>

                <div className="product-content">
                    <Link to={`/${data.title}`}>
                        <h3 className="product-title">{data.title}</h3>
                    </Link>

                <div className="wrapper">
                        <div className="product-details">
                            <h5 className="product-posted">{getTime(Math.floor(Math.random() * (new Date().getTime())))}, {capitalize(data.category)}, {data.rating.rate} <i className="fas fa-star"></i></h5>
                            <h2 className="product-price">{data.price}EUR</h2>
                        </div>

                        {/* <i className="fas fa-heart"></i> */}
                        <i className="fa-regular fa-heart"></i>
                </div>
                </div>
            </div>
    )
}