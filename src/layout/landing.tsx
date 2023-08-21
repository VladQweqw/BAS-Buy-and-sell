import { Categories } from "../assets/data"
import anime from "animejs"
import { Link } from "react-router-dom";
import SearchBar from "../components/searchBar";

export default function Landing() {

   anime.timeline({
      targets: '.category',
      delay: anime.stagger(100),
      opacity: [0, 1],
      translateY: ['10%', '0%']
   }).add({
      targets: '.section-title',
      delay: anime.stagger(100),
      opacity: [0, 1],
      translateY: ['10%', '0%']
   }).add({
      targets: '.search-bar-wrapper',
      opacity: [0, 1],
      translateY: ['10%', '0%']
   })
   

   return(
      <article className="categories-wrapper article">   
         <svg className="svg hero-svg" width="269" height="307" viewBox="0 0 269 307" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M146.727 131.715C224.982 163.366 260.848 261.76 269 307V0H0C16.303 30.7167 68.4727 100.063 146.727 131.715Z" fill="#1A4E4A"/>
         <path d="M179 96.9625C236.6 120.263 263 192.696 269 226V0H71C83 22.6123 121.4 73.662 179 96.9625Z" fill="#67FAD7"/>
         </svg>

         <svg className="svg hero-svg hero-svg-bottom" width="269" height="307" viewBox="0 0 269 307" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M146.727 131.715C224.982 163.366 260.848 261.76 269 307V0H0C16.303 30.7167 68.4727 100.063 146.727 131.715Z" fill="#1A4E4A"/>
         <path d="M179 96.9625C236.6 120.263 263 192.696 269 226V0H71C83 22.6123 121.4 73.662 179 96.9625Z" fill="#67FAD7"/>
         </svg>

         <div>
            <h1 className="section-title">Main Categories</h1>
            <div className="categories">
            {Categories.map((item: CategoryType, index: number) => {
                  return <Category {...item} key={index} />
            })}
            </div>
         </div>
      
         <div className="search-bar-wrapper">
            <h1 className="section-title">Try a search</h1>

            <SearchBar /> 
         </div>
      </article>
   )
}


function Category(data: {
   image: string,
   name: string,
}) {
   
   return(
      <Link to={`/${data.name.toLocaleLowerCase()}`}>
         <div className="category">
         <div className="category-image-wrapper">
            <div className="back-image"></div>
            <div className="front-image-wrapper">
               <img src={data.image} alt={data.name} className="front-image" />
            </div>
         </div>

         <h3 className="category-name">{data.name}</h3>
      </div>
      </Link>
   )
}