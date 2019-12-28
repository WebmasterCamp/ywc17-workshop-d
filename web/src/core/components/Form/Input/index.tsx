import React from 'react';

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  onChange,
  error,
  value,
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="text-base font-bold block">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type="text"
        className="border border-r-md text-base"
        onChange={onChange}
        value={value}
      />
      {error && (
        <span className="text-base font-bold text-red-400 block">{error}</span>
      )}
    </div>
  );
};

export interface FormInputProps extends FormProps {}

export interface FormProps {
  name: string;
  label: string;
  value: string | undefined;
  onChange: (a: any) => void;
  error?: string;
}
