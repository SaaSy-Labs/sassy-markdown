export const replaceTermsWithValues = (termsArray: string[], values: any) => {
  console.log({ termsArray, values });
  return termsArray.map((newTerm) => {
    for (const key in values) {
      const placeholder = new RegExp(`\\$\\{${key}\\}`, "g");
      const injectedValue = values[key];

      newTerm = newTerm.replace(placeholder, injectedValue);
    }
    return newTerm;
  });
};
