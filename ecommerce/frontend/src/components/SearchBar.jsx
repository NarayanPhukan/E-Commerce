import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';

 const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname !== '/collection') {
            setShowSearch(false);
        }
    }, [location, setShowSearch]);

    return (location.pathname === '/collection' && showSearch) ? (
        <div className='border-t border-b border-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input type="text" placeholder='Search for products...' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { navigate('/collection'); setShowSearch(false); } }}/>
                <img src={assets.search_icon} className='w-4' alt="Search" />
            </div>
            <img src={assets.cross_icon} className='w-3 inline cursor-pointer' onClick={() => setShowSearch(false)} alt="Close" />
        </div>
    ) : null;
};

export default SearchBar