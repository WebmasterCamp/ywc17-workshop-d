import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/firebase';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import { FormInput } from '../../core/components/Form/Input';
import { register } from '../../serviceWorker';
import { Button } from '../../core/components/Button';
import { firestore } from 'firebase';

export const Activites: React.FC = () => {
  const [user, userData] = useAuth();
  const data = firestore()
    .collection('offers')
    .where('user', '==', user?.uid);

  const history = useHistory();

  return (
    <div className="Form">
      <h1>ลงทะเบียน</h1>
      <FormInput
        name="username"
        label="ชื่อผู้ใช้"
        onChange={form.handleChange}
        value={form.values.username}
        error={form.errors && form.errors.username}
      />
      <FormInput
        name="fname"
        label="ชื่อจริง"
        onChange={form.handleChange}
        value={form.values.fname}
        error={form.errors && form.errors.fname}
      />
      <FormInput
        name="lname"
        label="นามสกุล"
        onChange={form.handleChange}
        value={form.values.lname}
        error={form.errors && form.errors.lname}
      />
      <FormInput
        name="email"
        label="อีเมลล์"
        onChange={form.handleChange}
        value={form.values.email}
        error={form.errors && form.errors.email}
      />{' '}
      <br />
      <Button onClick={() => form.submitForm()}>สมัคร</Button>
    </div>
  );
};
