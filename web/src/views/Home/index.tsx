import React from 'react';
import { Carousel } from './components/Carousel';
import Swipeable from './components/Swipeable';
import family from '../../assets/svgs/Group-1022.svg';
import { useHistory } from 'react-router';

const Title = ({ title }: any) => <h1 className="p-4 text-xl">{title}</h1>;
const Form = () => (
  <form action="#" className="flex flex-col px-1 text-black">
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
);

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
    <div className="w-12 h-12 bg-gray-200 rounded"></div>
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
  const history = useHistory();
  return (
    <>
      <section
        className="bg-orange-theme"
        style={{
          height: '50vh',
          position: 'relative',
        }}
      >
        <img
          src={family}
          style={{
            position: 'absolute',
            top: '8%',
            left: '-22%',
          }}
        />
        <div
          className=""
          style={{
            position: 'absolute',
            zIndex: 2,
            right: '0px',
            top: '15%',
            width: '10rem',
            color: '#505050',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            เปลี่ยนทักษะของคุณ ให้มีมูลค่า
          </p>
          <p
            className="mr-3"
            style={{
              fontSize: '12px',
              textAlign: 'right',
            }}
          >
            ลงทะเบียนแลกเปลี่ยนกับ SKILL'SWAP เพื่อลดค่าใช้จ่ายและเพิ่มมูลค่า
            ให้กับงานของคุณ
          </p>
        </div>
        <p
          style={{
            position: 'absolute',
            fontSize: '18px',
            color: '#505050',
            bottom: '30%',
            width: '100%',
            textAlign: 'center',
          }}
        >
          2,158 การแลกเปลี่ยนทักษะที่ลงทะเบียนในระบบ
        </p>
        <div
          className="flex w-full justify-around"
          style={{
            position: 'absolute',
            fontSize: '18px',
            color: 'white',
            bottom: '8%',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              width: 'w-1/2',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                letterSpacing: '1.5px',
              }}
            >
              1,725{' '}
            </span>
            <div>
              การแลกเปลี่ยนที่
              <br /> ประสบความสำเร็จ
            </div>
          </p>
          <p
            style={{
              width: 'w-1/2',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                letterSpacing: '1.5px',
              }}
            >
              433{' '}
            </span>
            <div>
              การแลกเปลี่ยนที่
              <br /> ต้องการความช่วยเหลือ
            </div>
          </p>
        </div>
        <div
          className="shadow-md bg-white text-center py-2 px-4"
          style={{
            width: '90%',
            display: 'inline-block',
            height: '15rem',
            position: 'absolute',
            bottom: '-55%',
            left: '1.1rem',
            borderRadius: '10px',
            color: 'white',
          }}
        >
          <div style={{}} className="mt-10">
            <Form />
          </div>
          <button
            className="bg-orange-theme shadow-md mt-3"
            style={{
              padding: '.5rem 2rem',
              width: '95%',
              borderRadius: '8px',
            }}
          >
            ค้นหา
          </button>
          <button
            onClick={() => {
              history.push('/request/add');
            }}
            className="bg-orange-theme shadow-md mt-3"
            style={{
              padding: '.5rem 2rem',
              width: '95%',
              borderRadius: '8px',
            }}
          >
            ขอความช่วยเหลือ
          </button>
        </div>
      </section>

      <section
        className="py-1"
        style={{
          backgroundColor: '#E8D4B4',
        }}
      >
        <div className="flex flex-col justify-around items-center ml-2 mt-64">
          <div className="flex justify-around w-full">
            <Catagory title="กราฟฟิค" />
            <Catagory title="ภาษา" />
            <Catagory title="สื่อ" />
            <Catagory title="ความงาม" />
            <Catagory title="ทำเว็บไซต์" />
          </div>
          <div className="flex justify-around w-full mt-5">
            <Catagory title="ติวเตอร์" />
            <Catagory title="ให้คำปรึกษา" />
            <Catagory title="Project assistent" />
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
