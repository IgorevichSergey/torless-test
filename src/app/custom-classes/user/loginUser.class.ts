interface ILoginUser {
  us_log_email: string;
  us_log_pass: string;
}
export class LoginUser implements ILoginUser {
  constructor(
    public us_log_email: string = '',
    public us_log_pass: string = ''
  ) {}
}

