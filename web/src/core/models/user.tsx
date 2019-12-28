import { RegisterModel } from '../../views/Register/model';

export interface User extends RegisterModel {
  username: string;
}
