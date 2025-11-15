import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { NavLink } from 'react-router';

export const PagesToRead = ({book}) => {

    const { bookId, author, bookName, category, image, publisher, rating, tags, totalPages, yearOfPublishing} = book;
  return (
    <div className='flex gap-4 p-8 border border-[#13131326] rounded-2xl'>
        <div className='py-7 px-12 bg-gray-100 rounded-xl'>
            <img  src={image} alt={bookName} />
        </div>
        <div>
            <h1 className='text-2xl font-bold text-primary1'>{bookName}</h1>
            <h3 className='py-4 text-base text-[#131313cc]'>By : {author}</h3>
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-base text-primary1 font-bold'>Tag : </h1>
                    <h3 className='text-base py-2 px-5 bg-[#23BE0A0D] rounded-full font-semibold text-[#23BE0A]'># {tags[0]}</h3>
                    <h3 className='text-base py-2 px-5 bg-[#23BE0A0D] rounded-full font-semibold text-[#23BE0A]'> # {tags[1]}</h3>
                </div>
                <div className='flex items-center gap-2 text-[#131313cc] font-medium'>
                    <MdLocationPin />
                    <p>Year of Publishing: {yearOfPublishing}</p>
                </div>
            </div>
            <div className='flex items-center gap-8 my-4'>
                <div className='flex items-center gap-2'>
                    <FaRegUser className='text-xl text-[#13131399]'></FaRegUser>
                    <p className='text-base text-[#13131399]'>Publisher : {publisher}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <MdOutlineContactPage className='text-xl text-[#13131399]'></MdOutlineContactPage>
                    <p className='text-base text-[#13131399]'>Pages : {totalPages}</p>
                </div>
            </div>
            <div className='divider'></div>
            <div className='flex items-center gap-6'>
                <h1 className='py-3 px-5 bg-[#328EFF26] hover:bg-[#145aaf26] duration-500 rounded-full text-[#328EFF]'>Category : {category}</h1>
                <h1 className='py-3 px-5 bg-[#FFAC3326] hover:bg-[#c3822226] duration-500 rounded-full text-[#FFAC33]'>Rating : {rating}</h1>
                <NavLink to={`/pages-to-read/${bookId}`}>
                    <button className='py-3 px-5 bg-[#23BE0A] hover:bg-[#279c15] duration-500 rounded-full text-white cursor-pointer font-medium'>View Details</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}