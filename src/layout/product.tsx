import { Link } from "react-router-dom";
import { getTime, capitalize, titleToUrl } from "../assets/functions";

export function Product(data: ProductType) {


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