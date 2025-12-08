import { v4 as uuidv4 } from "uuid";

function useFindVisitToken() {
  const visitToken = localStorage.getItem("visitToken");
  if (!visitToken) {
    const token = uuidv4();
    localStorage.setItem("visitToken", token);
    return token;
  }
  return visitToken;
}

export default useFindVisitToken;
