import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categorys, activeId}) => {
    return (
        <div>
            <h2 className="font-bold text-lg"> All Categories</h2>
        <ul className="flex flex-col gap-3 mt-5">
          {categorys.news_category.map((category) => {
            return <li key={category.category_id} className={
                `${activeId === category.category_id && "bg-purple-600 text-white"}
                 p-2 rounded-md font-bold text-center text-md`}
                 >
                    <Link href={`/category/${category.category_id}`} className='block p-1'>
                    {" "}{category.category_name}
                    </Link></li>
          })}
        </ul>
        </div>
    );
};

export default LeftSidebar;