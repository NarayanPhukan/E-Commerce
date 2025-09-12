import React, { useContext, useState } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'

const Collection = () => {

  const {products} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'}/> Men
            </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'}/> Women
            </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'}/> Kids
            </p>
          </div>
        </div>
        {/* Sub-Catogry Filter */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'}/>Top Wear
            </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'}/>Bottom Wear
            </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'}/> Winter Wear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Sort */}
          <select className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Collection