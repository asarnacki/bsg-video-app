export const API = `https://thebetter.bsgroup.eu`;

export const ENDPOINTS = {
  login: "Authorization/SignIn",
  homeScreen: "Media/GetMediaList",
};

export function createEndpoint(endpoint: string) {
  return `${API}/${endpoint}`;
}
