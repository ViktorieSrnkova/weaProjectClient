import { checkJWTValidity } from "../logics/api";

export const isAuthenticated = async () => {
  try {
    const res = await checkJWTValidity();
  } catch (e) {
    return false;
  }
};
