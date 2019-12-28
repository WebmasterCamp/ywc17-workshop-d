import * as Yup from 'yup';
import { RequestModel } from './model';

export const requestSchema = Yup.object().shape<RequestModel>({
  title: Yup.string().required('โปรดใส่หัวข้อ'),
  exchange: Yup.string().required('โปรดใส่สิ่งที่ต้องการแลก'),
  requiredSkill: Yup.string().required('โปรดใส่ความสามารถที่ต้องการ'),
  urgency: Yup.string().required('โปรดใส่ความเร่งด่วน'),
  location: Yup.string().required('โปรดใส่สถานที่'),
  details: Yup.string().required('โปรดใส่รายละเอียด'),
  phoneno: Yup.string().required('โปรดใส่เบอร์โทร'),
  email: Yup.string(),
  facebook: Yup.string(),
  line: Yup.string(),
});
