interface IRegExps {
  [key: string]: RegExp;
}

export const REG_EXPS: IRegExps = {
  'email': /(.+)@(.+){2,}\.(.+){2,}/,
  'phone': /^\d{7}$/
};
