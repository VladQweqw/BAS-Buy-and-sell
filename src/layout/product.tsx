import SearchBar from '../components/searchBar';
import UseAPi from '../components/useApi'
import { useParams } from 'react-router'

export default function Product() {
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
                     <h5 className="posted-time"></h5>
                     <h1 className="price">{data?.price}EUR</h1>
                  </div>

                  <div className="product-location">
                     <div className="location-wrapper">
                        <i className="fas fa-marker"></i>
                        <h5 className='location'></h5>
                     </div>

                     <div className="map">

                     </div>
                  </div>

                  <div className="buttons-wrapper">
                     <button className="product-btn message-btn primary-button">Message</button>
                     <button className="product-btn call-btn primary-button">Call</button>
                  </div>
               </div>
            </div>

            {/* <div className="product-description">

            </div>

            <div className="product-seller">

            </div> */}
         </div>

      </article>
   )
}