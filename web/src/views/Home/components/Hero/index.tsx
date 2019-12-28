import React from 'react';
// import { Button } from '../../../../core/components/Button';
import CardTile from '../../../../core/components/CardTile';

export const Hero: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-64 p-4 flex flex-col">
        <h1 className="text-xl mb-2">รายการขอความช่วยเหลือ !!!</h1>
        <h1 className="text-center mb-2">ต้องการความช่วยเหลือใช่ไหม ?</h1>
        {['', ''].map(_ => (
          <CardTile
            title="มีใครว่างบ้างงง"
            img="https://images.unsplash.com/photo-1561113500-8f4ad4f80a93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            details={[
              {
                title: 'ทักษะ',
                detail: 'อังกฤษ',
              },
              {
                title: 'ค่าตอบแทน',
                detail: '100',
              },
              {
                title: 'สถานที่',
                detail: 'bkkF',
              },
            ]}
          />
        ))}
      </div>
    </>
  );
};
