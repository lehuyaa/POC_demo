export interface IUser {
  display_name?: string;
  username: string;
  phone: string;
  email: string;
  lang: string;
  lock: boolean;
  status: string;
  has_migrade: boolean;
  has_email: boolean;
  has_pincode: boolean;
  has_password: boolean;
  accepted_term_and_condition: string;
  client_id: string;
  wallet_address: string;
  latest_term_and_condition: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
  id: string;
}
