import * as Yup from 'yup';
import { RegisterModel } from './model';

export const registerSchema = Yup.object().shape<RegisterModel>({
  username: Yup.string().required('username'),
  fname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('โปรดใส่ชื่อจริง'),
  lname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('โปรดใส่นามสกุล'),
  email: Yup.string()
    .email('Invalid email')
    .required('โปรดใส่อีเมลล์'),
  skill: Yup.string(),
});
