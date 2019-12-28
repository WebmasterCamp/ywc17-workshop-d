import React from 'react';
import trading from '../../assets/svgs/transfer.svg';

export const Star = () => (
  <div
    className="w-5 h-5"
    style={{
      backgroundSize: 'cover',
      backgroundImage:
        "url('https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png')",
    }}
  ></div>
);

export const Review: React.FC<{}> = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-lg">Review</h1>
      <div
        className="flex flex-col items-center justify-center mt-8"
        style={{}}
      >
        <div className="rounded-full h-40 w-40 bg-red-400"></div>
        <p className="text-base text-center mt-2">
          นายอนิร เต้ย <span className="text-sm block">username</span>
        </p>
        <div className="mt-8 shadow-md py-1 w-10/12 h-40 bg-gray-200 flex flex-col justify-around items-center">
          <p>สอนหนังสือ</p>
          <div
            className="h-12 w-12"
            style={{
              backgroundSize: 'cover',
              transform: 'rotate(-90deg)',
              backgroundImage: `url(${trading})`,
            }}
          ></div>
          <p>แลกกับ: เงิน</p>
        </div>
        <div className="flex justify-around w-8/12 mt-8">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
};
