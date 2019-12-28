import React, { useEffect, useState } from 'react';
import trading from '../../assets/svgs/transfer.svg';
import { useParams, useHistory } from 'react-router';
import { useFirestoreDoc, useAuth } from '../../hooks/firebase';
import { RequestModel, OfferModel } from './model';
import { firestore } from 'firebase';
import { User } from '../../core/models/user';
import { useFormik } from 'formik';
import { Star } from '../Review';
import { Button } from '../../core/components/Button';
import { offerSchema } from './schema';
import { FormInput } from '../../core/components/Form/Input';

export const ViewRequest: React.FC<{}> = () => {
  const { id } = useParams();
  const request = useFirestoreDoc<RequestModel>(
    firestore()
      .collection('requests')
      .doc(id)
  );
  const [userData, setUserData] = useState<User>();
  const [currentUser] = useAuth();
  const history = useHistory();
  const [helpModal, setHelpModal] = useState(false);

  const form = useFormik<OfferModel>({
    validateOnChange: true,
    validationSchema: offerSchema,
    initialValues: {
      phoneno: '',
      email: '',
      line: '',
      note: '',
    },
    onSubmit: data => offer(data),
  });

  useEffect(() => {
    if (request?.user) {
      (async function getUserData() {
        const userData = (
          await firestore()
            .collection('users')
            .doc(request?.user)
            .get()
        ).data() as any;
        setUserData(userData);
      })();
    }
  }, [request]);

  const offer = async (data: OfferModel) => {
    if (currentUser) {
      try {
        const ref = firestore().collection('offers');
        const doc = await ref.add({
          ...data,
          request: id,
          user: currentUser.uid,
        });
        history.push('/');
      } catch (e) {
        alert('something went wrong');
      }
    }
  };

  const offerHelp = () => {};

  return request ? (
    <>
      <div className="flex flex-col justify-center">
        <div
          className="flex flex-col items-center justify-center mt-8 mb-4"
          style={{}}
        >
          <div className="mt-8 shadow-md py-1 w-10/12 h-40 bg-gray-200 flex flex-col justify-around items-center">
            <p className="text-lg">{request.title}</p>
            <div
              className="h-12 w-12"
              style={{
                backgroundSize: 'cover',
                transform: 'rotate(-90deg)',
                backgroundImage: `url(${trading})`,
              }}
            ></div>
            <p className="text-lg">{request.exchange}</p>
          </div>
        </div>
        <div className="border p-2 rounded-md">
          <ul className="text-base">
            <li className="text-base">Skill: {request.requiredSkill}</li>
            <li className="text-base">ความเร่งด่วน: {request.urgency}</li>
            <li className="text-base">สถานที่: {request.location}</li>
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
        <div className="p-2">
          <h3 className="text-lg">รายละเอียดงาน</h3>
          <p className="text-base">{request.details}</p>
        </div>
      </div>
      <div className="fixed bottom-0 items-middle p-4 bg-blue-400 w-screen left-0 flex justify-between">
        <span>ใช้ 5 coins</span>
        <Button onClick={() => setHelpModal(true)}>ให้ความช่วยเหลือ</Button>
      </div>
      {helpModal && (
        <div className="fixed top-0 left-0 w-screen h-screen">
          <div className="bg-white rounded-md mx-auto w-4/5 top-0 p-2 mx-auto mt-16 relative z-10">
            <h2 className="text-lg mb-2">ให้ความช่วยเหลือ</h2>
            <div className="mb-2">
              <label htmlFor="note" className="font-bold block text-base">
                หมายเหตุ
              </label>
              <textarea
                name="note"
                id="note"
                className="border border-r-md text-base"
                onChange={form.handleChange}
                value={form.values.note}
              ></textarea>
              {form.errors && form.errors.note && (
                <span className="font-bold text-red-400 block text-base">
                  form.errors.note
                </span>
              )}
            </div>
            <FormInput
              name="phoneno"
              label="เบอร์โทร"
              onChange={form.handleChange}
              value={form.values.phoneno}
              error={form.errors && form.errors.phoneno}
            />
            <FormInput
              name="email"
              label="E-mail"
              onChange={form.handleChange}
              value={form.values.email}
              error={form.errors && form.errors.email}
            />
            <FormInput
              name="line"
              label="Line"
              onChange={form.handleChange}
              value={form.values.line}
              error={form.errors && form.errors.line}
            />
            <div className="w-full flex justify-end">
              <Button onClick={() => setHelpModal(false)}>ปิด</Button>
              <span className="w-2"></span>
              <Button onClick={() => form.submitForm()}>
                ส่งความช่วยเหลือ
              </Button>
            </div>
          </div>

          <div className="opacity-25 bg-black w-screen h-screen absolute top-0 z-0"></div>
        </div>
      )}
    </>
  ) : (
    <h1 className="text-lg">Loading...</h1>
  );
};
