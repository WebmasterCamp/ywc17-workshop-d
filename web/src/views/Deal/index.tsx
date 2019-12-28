import React, { useEffect, useState } from 'react';
import trading from '../../assets/svgs/transfer.svg';
import { useParams, useHistory } from 'react-router';
import { useFirestoreDoc, useAuth } from '../../hooks/firebase';
import { firestore } from 'firebase';
import { User } from '../../core/models/user';
import { Star } from '../Review';
import { OfferModel } from '../Request/model';
import { Button } from '../../core/components/Button';

export const ViewDeal: React.FC<{}> = () => {
  const { id } = useParams();
  const deal = useFirestoreDoc<any>(
    id
      ? firestore()
          .collection('deals')
          .doc(id)
      : undefined
  );
  const [userData, setUserData] = useState<User>();
  const [currentUser] = useAuth();
  const history = useHistory();
  const [helpModal, setHelpModal] = useState(false);

  useEffect(() => console.log(deal), [deal]);

  return deal ? (
    <>
      <div className="flex flex-col justify-center">
        <div
          className="flex flex-col items-center justify-center mt-8 mb-4"
          style={{}}
        >
          <h1 className="text-lg text-center">
            {deal.offer.userData?.username} กำลังช่วยเหลือคุณ
          </h1>
          <div className="mt-8 shadow-md py-1 w-10/12 h-40 bg-gray-200 flex flex-col justify-around items-center">
            <p className="text-lg">
              {deal.offer.requestData && deal.offer.requestData.title}
            </p>
            <div
              className="h-12 w-12"
              style={{
                backgroundSize: 'cover',
                transform: 'rotate(-90deg)',
                backgroundImage: `url(${trading})`,
              }}
            ></div>
            <p className="text-lg">
              {deal.offer.requestData && deal.offer.requestData.exchange}
            </p>
          </div>
        </div>
        <div className="border p-2 rounded-md">
          <ul className="text-base">
            <li className="text-base">
              Skill: {deal.offer.requestData.requiredSkill}
            </li>
            <li className="text-base">
              ความเร่งด่วน: {deal.offer.requestData.urgency}
            </li>
            <li className="text-base">
              สถานที่: {deal.offer.requestData.location}
            </li>
          </ul>
        </div>
        <div className="p-2">
          <h1 className="text-lg text-center">
            ข้อมูลการติดต่อคน Request : {deal.offer.userData?.username}
          </h1>
          <ul className="text-base">
            <li className="text-base">เบอร์โทร: {deal.offer.phoneno}</li>
            <li className="text-base">เมลล์: {deal.offer.email}</li>
            <li className="text-base">
              facebook: {deal.offer.requestData?.facebook || '-'}
            </li>
            <li className="text-base">
              line: {deal.offer.requestData?.line || '-'}
            </li>
          </ul>
        </div>
        <div className="p-2">
          <h1 className="text-lg text-center">
            ข้อมูลการติดต่อคน Offer : {deal.offer.username || '-'}
          </h1>
          <ul className="text-base">
            <li className="text-base">เบอร์โทร: {deal.offer.phoneno || '-'}</li>
            <li className="text-base">เมลล์: {deal.offer.email || '-'}</li>
          </ul>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => history.push('/review')}>รีวิว</Button>
        </div>
      </div>
    </>
  ) : (
    <h1 className="text-lg">Loading...</h1>
  );
};
