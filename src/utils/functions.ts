export function stripLeadingValue(input: string) {
  // Match and remove all leading '5's
  return input.replace(/^&+/, "");
}

export function stripTrailingValue(input: string) {
  // Match and remove all trailing '5's
  return input.replace(/&+$/, "");
}

export function replaceMiddleValue(input: string) {
  return input.replace(/(?<=\w)&+(?=\w)/g, "&");
}
