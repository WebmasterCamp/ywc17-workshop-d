import React from 'react';
import { Carousel } from './components/Carousel';
import Swipeable from './components/Swipeable';

const Title = ({ title }: any) => <h1 className="p-4 text-xl">{title}</h1>;

const Catalog = () => (
  <div className="w-full h-full">
    <div
      className="bg-gray-200 shadow-md m-1"
      style={{
        height: '7rem',
        width: 'auto',
      }}
    ></div>
    <p className="text-center text-base mt-2">สถิติ</p>
  </div>
);
const Catagory = ({ title }: any) => (
  <div className="w-1/6">
    <div className="w-12 h-12 bg-gray-200"></div>
    <p
      className="mt-1 w-10/12 text-center"
      style={{
        fontSize: '0.6rem',
      }}
    >
      {title}
    </p>
  </div>
);

const ButtonSeeAll = () => (
  <button
    className="rounded-full py-2 px-4"
    style={{
      backgroundColor: '#FF896B',
    }}
  >
    ดูทั้งหมด
  </button>
);

export const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <section className="flex justify-around mt-8">
        <Catalog />
        <Catalog />
        <Catalog />
      </section>
      <section>
        <Title title="ค้นหาความช่วยเหลือ" />
        <form action="#" className="flex flex-col px-8">
          <input
            className="py-1 px-2 shadow-md mb-3"
            style={{
              outline: 'none',
              fontFamily: 'inherit',
              fontSize: '1rem',
            }}
            type="text"
            placeholder="ค้นหา"
          />

          <select
            className="py-1 px-2 shadow-md"
            style={
              {
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '1rem',
              } as any
            }
          >
            <option value="-1">สถานที่</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </section>
      <section className="mt-8">
        <div className="flex flex-col justify-around items-center ml-2">
          <div className="flex justify-center w-full">
            <Catagory title="กราฟฟิค" />
            <Catagory title="ภาษา" />
            <Catagory title="สื่อ" />
            <Catagory title="ความงาม" />
            <Catagory title="ทำเว็บไซต์" />
            <Catagory title="ติวเตอร์" />
          </div>
          <div className="flex justify-center w-full mt-5">
            <Catagory title="ให้คำปรึกษา" />
            <Catagory title="Project assistent" />
            <Catagory title="อาหาร เครื่องดื่ม" />
            <Catagory title="ความบันเทิง" />
            <Catagory title="กีฬา" />
            <Catagory title="อื่น" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center">
          <span className="mr-auto">
            <Title title="ใกล้ฉัน" />{' '}
          </span>
          <span className="mr-3">
            <ButtonSeeAll />
          </span>
        </div>
        <Swipeable></Swipeable>
      </section>
      <section>
        <div className="flex items-center">
          <span className="mr-auto">
            <Title title="ล่าสุด" />{' '}
          </span>
          <span className="mr-3">
            <ButtonSeeAll />
          </span>
        </div>
        <Swipeable></Swipeable>
      </section>
    </>
  );
};
