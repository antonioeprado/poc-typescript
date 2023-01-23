export function invalidDataError(
  details: string[]
): ApplicationInvalidateDataError {
  return {
    name: "InvalidDataError",
    message: "Invalid data",
    details,
  };
}

type ApplicationInvalidateDataError = {
  name: string;
  message: string;
  details: string[];
};
