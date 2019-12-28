import React, { useEffect, useState } from 'react';
import trading from '../../assets/svgs/transfer.svg';
import { useParams, useHistory } from 'react-router';
import { useFirestoreDoc, useAuth } from '../../hooks/firebase';
import { firestore } from 'firebase';
import { User } from '../../core/models/user';
import { Star } from '../Review';
import { OfferModel } from '../Request/model';
import { Button } from '../../core/components/Button';

export const ViewOffer: React.FC<{}> = () => {
  const { id } = useParams();
  const offer = useFirestoreDoc<OfferModel>(
    id
      ? firestore()
          .collection('offers')
          .doc(id)
      : undefined
  );
  const [userData, setUserData] = useState<User>();
  const [currentUser] = useAuth();
  const history = useHistory();
  const [helpModal, setHelpModal] = useState(false);

  const deal = async () => {
    try {
      const ref = firestore().collection('offers');
      const deal = await ref.add({
        request: id,
        offer,
        accepter: offer?.user,
      });
      await ref.doc(offer?.id).delete();
      history.push('/activities');
    } catch (e) {
      alert('something went wrong');
    }
  };

  useEffect(() => console.log(offer), [offer]);

  return offer ? (
    <>
      <div className="flex flex-col justify-center">
        <div
          className="flex flex-col items-center justify-center mt-8 mb-4"
          style={{}}
        >
          <h1 className="text-lg text-center">
            {offer.userData?.username} ต้องการช่วยเหลือคุณ
          </h1>
          <div className="mt-8 shadow-md py-1 w-10/12 h-40 bg-gray-200 flex flex-col justify-around items-center">
            <p className="text-lg">
              {offer.requestData && offer.requestData.title}
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
              {offer.requestData && offer.requestData.exchange}
            </p>
          </div>
        </div>
        <div className="border p-2 rounded-md">
          <ul className="text-base">
            <li className="text-base">Skill: {offer.userData?.skill}</li>
            <li className="text-base">โน้ต: {offer.note}</li>
          </ul>
        </div>
        {userData && (
          <div className="flex justify-between items-middle">
            <span className="text-base text-center mt-2">
              คนขอ: {userData.fname} {userData.lname}{' '}
            </span>
            <div className="flex self-end justify-around">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <Button onClick={() => history.goBack()}>กลับ</Button>
          <Button onClick={() => deal()}>รับ Offer</Button>
        </div>
      </div>
    </>
  ) : (
    <h1 className="text-lg">Loading...</h1>
  );
};
