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
          .where('request', '==', user.uid)
      : undefined
  );

  const offered = useFirestoreQuery<RequestModel>(
    user
      ? firestore()
          .collection('offers')
          .where('user', '==', user.uid)
      : undefined
  );

  const history = useHistory();

  return (
    <div className="Form">
      <h1 className="text-lg">Request ของฉัน</h1>
      {/* {offers.map(offer => {
        return (
          <div key="id">
            <div>
              <span>
                {request.title} แลก {request.exchange}
              </span>
            </div>
            <div>{request.user} ส่ง Offer มา</div>
          </div>
        );
      })} */}
      <h1 className="text-lg">Offer ของ Request ฉัน</h1>
      <div className="p-2">
        {requests.map(request => {
          return (
            <div
              onClick={() => history.push('/request')}
              key={request.title}
              className="p-2 bg-orange-400 mb-2 w-full"
            >
              <span className="text-base text-white">
                {request.title} แลก {request.exchange}
              </span>
            </div>
          );
        })}
      </div>
      <h1 className="text-lg">Offer ที่ตกลงกันแล้ว</h1>
      <h1 className="text-lg">Reviews</h1>
    </div>
  );
};
