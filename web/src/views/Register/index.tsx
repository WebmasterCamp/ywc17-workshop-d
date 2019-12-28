import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/firebase';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import { registerSchema } from './schema';
import { FormInput } from '../../core/components/Form/Input';
import { register } from '../../serviceWorker';
import { RegisterModel } from './model';
import { Button } from '../../core/components/Button';
import { firestore } from 'firebase';
export const Register: React.FC = () => {
  const [user, userData] = useAuth();
  const form = useFormik<RegisterModel>({
    validateOnChange: true,
    validationSchema: registerSchema,
    initialValues: {
      username: '',
      fname: '',
      lname: '',
      email: '',
      skill: '',
    },
    onSubmit: data => register(data),
  });
  const history = useHistory();
  const register = async (data: RegisterModel) => {
    if (user) {
      try {
        const ref = firestore()
          .collection('users')
          .doc(user.uid);
        await ref.set({ ...data }, { merge: true });
        history.push('/');
      } catch (e) {
        alert('something went wrong');
        console.log(e);
      }
    }
  };

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
      <FormInput
        name="skill"
        label="ความสามารถที่มี"
        onChange={form.handleChange}
        value={form.values.skill}
        error={form.errors && form.errors.skill}
      />{' '}
      <br />
      <Button onClick={() => form.submitForm()}>สมัคร</Button>
    </div>
  );
};
