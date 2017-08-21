interface ICreatedUser {
  user: {
    us_name: string;
    us_last_name: string;
    us_position: string;
    us_phone: string;
    us_passport_id: string;
    us_email: string;
    us_pass: string;
  };
  company: {
    comapny_name: string;
    comapny_vat_number: number;
    comapny_address: string;
    comapny_city: string;
    comapny_zip_code?: string;
  };
}

export class CreatedUser implements ICreatedUser {
  constructor(
    public user: {
      us_name: string;
      us_last_name: string;
      us_position: string;
      us_phone: string;
      us_passport_id: string;
      us_email: string;
      us_pass: string;
    } = {
      us_name: '',
      us_last_name: '',
      us_position: '',
      us_phone: '',
      us_passport_id: '',
      us_email: '',
      us_pass: ''
    },
    public company: {
      comapny_name: string;
      comapny_vat_number: number;
      comapny_address: string;
      comapny_city: string;
      comapny_zip_code?: string;
    } = {
    comapny_name: '',
    comapny_vat_number: null,
    comapny_address: '',
    comapny_city: ''
    }
  ) {}
}
