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
// "user":{"us_name":"test name", "us_last_name":"test last name", "us_position":"test position", "us_phone":"122234234", "us_passport_id":"121121121", "us_email":"email@mailinator.com", "us_pass":"123qweqwe"},
// "company": {"comapny_name":"test company name", "comapny_vat_number":"123123123", "comapny_address":"test company address", "comapny_city":"test city", "comapny_zip_code":"12345"}
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
