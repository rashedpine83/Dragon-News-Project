import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: "1",
    title: "Breaking News: Major event unfolds in the city.",
  },
  {
    _id: "2",
    title: "Breaking News: New policy announced by the government.",
  },
  {
    _id: "3",
    title: "Breaking News: Sports team wins championship.",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center gap-3 bg-gray-200 py-3 px-2 container mx-auto">
      <button className="btn bg-pink-600 text-white">Latest News</button>

      <Marquee pauseOnHover={true} speed={100}>
        {news.map((n) => (
          <span key={n._id} className="mr-10">
            {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;