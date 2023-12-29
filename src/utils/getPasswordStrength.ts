const getPasswordStrength = (password: string): number => {
  const validationRulesArray: Array<RegExp> = [
    /\d/,
    /[A-Z]/,
    /[a-z]/,
    /[$&+,:;=?@#|'<>.^*()%!-]/,
    /.{8,}/,
  ];
  const strength: number = validationRulesArray.reduce(
    (res: number, regexp: RegExp) => {
      res = res + Number(password.search(regexp) > -1);
      return res;
    },
    0,
  );
  return strength;
};

export default getPasswordStrength;
