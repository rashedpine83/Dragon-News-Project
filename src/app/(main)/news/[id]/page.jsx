import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

export const generateMetadata = async({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id)
    return {
        title: news.title,
        description: news.details
    }
}

const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id)
    return (
        <div className='max-w-5xl mx-auto my-8'>
            <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className='flex justify-between items-center bg-slate-200 p-4'>
                                <div className='flex gap-2 items-center'>
                                    <Image 
                                    src={news.author?.img} 
                                    alt={news.author?.name} 
                                    height={40} 
                                    width={40} 
                                    className='h-auto rounded full'>
                                    </Image>
                                     <div>
                                        <h2 className='font-semibold'>{news.author?.name}</h2>
                                        <p className='text-xs'>{news.author?.published_date}</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <CiShare2></CiShare2>
                                    <CiBookmark></CiBookmark>
                                </div>
                            </div>
                            <h2 className="card-title">{news.title}</h2>
                
                            <figure>
                                <Image
                                src={news.image_url}
                                alt={news.title}
                                width={300}
                                height={300}
                                className='w-full' />
                            </figure>
                            <p>{news.details}</p>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-3'>
                                    <p className='flex items-center gap-3'>
                                        <IoIosStar className='text-yellow-600'></IoIosStar>
                                        {news.rating.number}
                                    </p>
                                    <p className='flex items-center gap-3'>
                                        <FaEye></FaEye>
                                        {news.total_view}
                                    </p>
                                </div>
                                <Link href={`/category/${news.category_id}`}>
                                    <button className='btn bg-pink-600 text-white'>See news same category</button>
                                </Link>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default NewsDetailsPage;