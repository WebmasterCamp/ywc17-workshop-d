import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/firebase';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import { FormInput } from '../../core/components/Form/Input';
import { Button } from '../../core/components/Button';
import { firestore } from 'firebase';
import { RequestModel } from './model';
import { requestSchema } from './schema';

export const AddRequest: React.FC = () => {
  const [user, userData] = useAuth();
  const form = useFormik<RequestModel>({
    validateOnChange: true,
    validationSchema: requestSchema,
    initialValues: {
      title: '',
      exchange: '',
      requiredSkill: '',
      urgency: 'ด่วนมาก',
      location: '',
      details: '',
      phoneno: '',
      email: '',
      facebook: '',
      line: '',
      note: '',
    },
    onSubmit: data => request(data),
  });
  const history = useHistory();
  const request = async (data: RequestModel) => {
    if (user) {
      try {
        const ref = firestore().collection('requests');
        await ref.add({ ...data, user: user.uid });
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
        name="title"
        label="สิ่งที่ขอ (หัวเรื่อง)"
        onChange={form.handleChange}
        value={form.values.title}
        error={form.errors && form.errors.title}
      />
      <FormInput
        name="exchange"
        label="สิ่งที่ต้องการแลกเปลี่ยน"
        onChange={form.handleChange}
        value={form.values.exchange}
        error={form.errors && form.errors.exchange}
      />
      <FormInput
        name="requiredSkill"
        label="ความสามารถที่ต้องการ"
        onChange={form.handleChange}
        value={form.values.requiredSkill}
        error={form.errors && form.errors.requiredSkill}
      />
      <div className="mb-2">
        <label htmlFor="urgency" className="font-bold block text-base">
          ความเร่งด่วน
        </label>
        <select
          name="urgency"
          id="urgency"
          className="border border-r-md text-base"
          onChange={form.handleChange}
          value={form.values.urgency}
        >
          <option value="ด่วนมาก">ด่วนมาก</option>
          <option value="รีบ">รีบ</option>
          <option value="เฉยๆ">เฉยๆ</option>
          <option value="ไม่รีบ">ไม่รีบ</option>
          <option value="ชิว">ชิว</option>
        </select>
        {form.errors && form.errors.urgency && (
          <span className="font-bold text-red-400 block text-base">
            {form.errors.urgency}
          </span>
        )}
      </div>
      <FormInput
        name="location"
        label="สถานที่"
        onChange={form.handleChange}
        value={form.values.location}
        error={form.errors && form.errors.location}
      />
      <div className="mb-2">
        <label htmlFor="details" className="font-bold block text-base">
          รายละเอียด
        </label>
        <textarea
          name="details"
          id="details"
          className="border border-r-md text-base"
          onChange={form.handleChange}
          value={form.values.details}
        ></textarea>
        {form.errors && form.errors.details && (
          <span className="font-bold text-red-400 block text-base">
            {form.errors.details}
          </span>
        )}
      </div>
      <h2 className="text-lg">ข้อมูลติดต่อ *แล้วแต่สะดวกที่จะใส่</h2>
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
        name="facebook"
        label="Facebook"
        onChange={form.handleChange}
        value={form.values.facebook}
        error={form.errors && form.errors.facebook}
      />
      <FormInput
        name="line"
        label="Line"
        onChange={form.handleChange}
        value={form.values.line}
        error={form.errors && form.errors.line}
      />
      <div className="mb-2">
        <label htmlFor="note" className="font-bold block text-base">
          Note
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
      <br />
      <Button onClick={() => form.submitForm()}>สมัคร</Button>
    </div>
  );
};
