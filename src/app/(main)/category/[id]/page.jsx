import LeftSidebar from '@/components/HomePage/News/LeftSidebar';
import NewsCard from '@/components/HomePage/News/NewsCard';
import RightSidebar from '@/components/HomePage/News/RightSidebar';
import { getCategory, getNewsByCategoryId } from '@/lib/data';




const NewsCategoryPage = async({params}) => {
    const {id} = await params;

    const categorys = await getCategory();

    const news = await getNewsByCategoryId(id);
    
    return (
         <div className="grid grid-cols-12 gap-4 container mx-auto mt-10">
      <div className=" col-span-3">
        <LeftSidebar categorys={categorys} activeId={id}></LeftSidebar>
      </div>
      <div className="text-md col-span-6">
         <h1 className='font-bold text-lg'>News by category</h1>
        <div className="space-y-3 mt-5">
          {news.length > 0 ? news.map((n, index) => {
            return <NewsCard key={index} news={n}></NewsCard>
          }) : <h2 className='font-bold text-5xl my-7 text-center'>No news found</h2>} 
        </div>
      </div>
      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
    );
};

export default NewsCategoryPage;