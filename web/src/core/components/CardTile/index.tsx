import React from 'react';

import tradeSvg from '../../../assets/svgs/transfer.svg';

interface IDetail {
  title: string;
  detail: string;
}

const FeatureRow: React.FC<{
  logo: any;
  title: string;
}> = ({ logo, title }) => (
  <div className="flex py-2 items-center">
    <div className="w-3 h-3 bg-red-400 mr-2"></div>
    <p className="text-sm">{title}</p>
  </div>
);

const CardTile: React.FC<{
  details: IDetail[];
  title: string;
  img: string;
  exc: string;
  lo: string;
  urg: string;
}> = ({ details, img, title, exc, lo, urg }) => {
  return (
    <div className="max-w-sm w-auto lg:max-w-1/3 lg:flex rounded-full py-2 px-4">
      <div className="้bg-white p-3 flex flex-col justify-between leading-normal mb-2 bg-gray-100 shadow-md">
        <div className="">
          <h2 className="inline-block p-1 rounded-lg bg-purple-theme w-auto text-sm">
            ติวภาษา
          </h2>
          <div className="text-gray-900 font-bold text-xl mb-2 text-orange-theme">
            {!title
              ? 'ครูสอนพิเศษภาษาสเปนไว้ใช้คุยกับแฟน 2 วัน (เสาร์-อาทิตย์)'
              : title}
          </div>
          <div className="flex justify-start w-1/4 py-1">
            <div
              className="h-4 w-4 mr-2"
              style={{
                backgroundImage: `url(${tradeSvg})`,
                backgroundSize: 'cover',
                transform: 'rotate(-90deg)',
              }}
            ></div>
            <p className="text-xs">แลกกับ</p>
          </div>
          <p className="text-gray-800 text-sm font-semibold py-1">{exc}</p>
          <div className="flex flex-col">
            <FeatureRow title={urg} logo="" />
            <FeatureRow title={lo} logo="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTile;
