export default function SearchBar() {

   return(
    <div className="search-bar">
        <input placeholder='Look for an item' className='search-input' type="search" name="search" id="search" />
        <div className="search-option location-filter">
            <i className="fa-solid fa-location-dot"></i>
        </div>
        
        <button className="search-option search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>

    </div>
   )
}