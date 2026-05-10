import React from 'react'

const SearchResult = ({info}) => {
    const{snippet} = info;
    const{description,thumbnails,channelTitle,title} = snippet;
  return (
    <div className='mx-2 rounded-sm mt-8 grid grid-flow-col justify-items-start'>
    <img className="rounded-lg grid-cols-3" alt='thumbnails' src={thumbnails?.medium.url} />
    <div>
    <p className='font-medium grid-cols-5 px-4 w-96'>{title}</p>   
   <p className='font-medium grid-cols-5 px-4 w-96'>{description}</p>
    <p className='text-gray-600 px-4'>{channelTitle}</p>
    </div>
   {/* <p className='text-gray-600'>{finalCount} Views . <span>{diffDays} days ago</span></p>   */}
</div>
  )
}

export default SearchResult