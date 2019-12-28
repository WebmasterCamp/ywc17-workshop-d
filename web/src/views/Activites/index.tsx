import React, { useEffect } from 'react';
import { useAuth, useFirestoreQuery } from '../../hooks/firebase';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import { FormInput } from '../../core/components/Form/Input';
import { register } from '../../serviceWorker';
import { Button } from '../../core/components/Button';
import { firestore } from 'firebase';
import { RequestModel, OfferModel } from '../Request/model';

export const Activites: React.FC = () => {
  const [user, userData] = useAuth();
  const requests = useFirestoreQuery<RequestModel>(
    user
      ? firestore()
          .collection('requests')
          .where('user', '==', user.uid)
      : undefined
  );

  const offers = useFirestoreQuery<OfferModel>(
    user
      ? firestore()
          .collection('offers')
          .where('requestData.user', '==', user.uid)
      : undefined
  );

  const deals = useFirestoreQuery<any>(
    user
      ? firestore()
          .collection('deals')
          .where('offer.requestData.user', '==', user.uid)
      : undefined
  );

  const history = useHistory();

  useEffect(() => console.log(requests), [requests]);

  return (
    <div className="Form p-5">
      <h1 className="text-lg">Offer ของ Request ฉัน</h1>
      <div className="p-2">
        {offers.map(offer => {
          return (
            <div
              onClick={() => history.push('/offer/' + offer.id)}
              key={offer.requestData?.title}
              className="p-2 bg-orange-400 mb-2 w-full"
            >
              <span className="text-base text-white">
                {offer.userData && offer.userData.username} ต้องการช่วยเหลือคุณ
              </span>
            </div>
          );
        })}
      </div>
      <h1 className="text-lg">Request ของฉัน</h1>
      <div className="p-2">
        {requests.map(request => {
          return (
            <div
              onClick={() => history.push('/request/' + request.id)}
              key={request.title}
              className="p-2 bg-orange-400 mb-2 w-full"
            >
              <span className="text-base text-white">
                {request.title} แลกกับ {request.exchange}
              </span>
            </div>
          );
        })}
      </div>
      <h1 className="text-lg">Offer ที่ตกลงกันแล้ว</h1>
      <div className="p-2">
        {deals.map(deal => {
          return (
            <div
              onClick={() => history.push('/deals/' + deal.id)}
              key={deal.title}
              className="p-2 bg-orange-400 mb-2 w-full"
            >
              <span className="text-base text-white">
                {deal.offer.userData.fname} กำลังช่วยคุณ{' '}
                {deal.offer.requestData.title} แลกกับ{' '}
                {deal.offer.requestData.exchange}
              </span>
            </div>
          );
        })}
      </div>
      <h1 className="text-lg">Reviews</h1>
    </div>
  );
};
