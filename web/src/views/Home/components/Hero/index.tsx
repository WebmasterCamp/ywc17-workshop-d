import React from 'react';
// import { Button } from '../../../../core/components/Button';
import CardTile from '../../../../core/components/CardTile';
import Swipeable from '../Swipeable';

export const Hero: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-64 p-4 flex flex-col">
        <h1 className="text-xl mb-2">รายการขอความช่วยเหลือ !!!</h1>
        <h1 className="text-center mb-2">ต้องการความช่วยเหลือใช่ไหม ?</h1>
      </div>
    </>
  );
};
