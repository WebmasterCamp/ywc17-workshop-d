import React from 'react';
import { Button } from '../../../../core/components/Button';

export const Hero: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-64 bg-yellow-300 p-4 flex flex-col">
        <h1 className="text-xl mb-2">ขอความช่วยเหลือ !!!</h1>
        <h1 className="text-center mb-2">ต้องการความช่วยเหลือใช่ไหม ?</h1>
        <div className="flex">
          <img className="w-2/5 h-32 bg-blue-300" />
          <div className="w-3/5 p-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium voluptate rem consequatur reprehenderit vitae dolores
              ipsam nesciunt, facere ut. Sint ex repudiandae earum sed beatae
              perferendis laudantium amet cupiditate at.
            </p>
            <div className="flex justify-center flex-col p-2">
              <Button onClick={() => alert('สร้างงง')}>สร้างงงงง</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
