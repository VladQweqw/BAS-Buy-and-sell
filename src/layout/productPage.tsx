import SearchBar from '../components/searchBar';
import UseAPi from '../components/useApi'
import { useParams } from 'react-router'
import { getTime } from '../assets/functions';
import { Product } from './product';

export default function ProductPage() {
   const { id } = useParams();

   const {data, error, isLoading}: {
      data: ProductType,
      error: string | null,
      isLoading: boolean,
    } = UseAPi(`https://fakestoreapi.com/products/${id}`, 'GET')


   
   if(error) return <h1>error</h1>
   if(isLoading) return <h1>Loading...</h1>

   return(
      <article className="article product-page-wrapper">
         <SearchBar />
         
         <div className="product-page-container">
            <div className="product-page">
               <div className="product-image-wrapper">
                  <img src={data?.image} alt={data?.title} className="product-image" />
               </div>

               <div className="product-details">
                  <h1 className="product-title">{data?.title}</h1>

                  <div className="price-wrapper">
                     <p className="posted-time">{getTime(Math.floor(Math.random() * (new Date().getTime())))}</p>
                     <h1 className="price">{data?.price}EUR</h1>
                  </div>

                  <div className="product-location">
                     <div className="location-wrapper">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className='location'>Galati</p>
                     </div>

                     <div className="map">
                        <img src='https://www.olx.ro/app/static/media/staticmap.65e20ad98.svg' alt="map" />
                     </div>
                  </div>

                  <div className="buttons-wrapper">
                     <button className="product-btn message-btn button button-primary">Message</button>
                     <button className="product-btn call-btn button button-primary">Call</button>
                  </div>
               </div>
            </div>

            <div className="product-description">
              <h2 > Description:</h2>
               <br />
               {data?.description}
            </div>

            <div className="product-seller">

            </div>
            
         </div>

         <SuggestedProducts />

      </article>
   )
}


function SuggestedProducts() {

   const {data, error, isLoading}: {
      data: ProductType[],
      error: string | null,
      isLoading: boolean,
   } = UseAPi(`https://fakestoreapi.com/products?limit=15`, 'GET')

   if(isLoading) return <h1>Loading...</h1>
   if(error) return <h1>Error</h1>    

   return(
 
         <div className="suggested-products">
         
            {data?.map((item: ProductType, index: number) => {
               return <Product {...item} key={index} />
            })}
         </div>

   )

}