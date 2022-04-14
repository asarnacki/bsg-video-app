export const API = `https://thebetter.bsgroup.eu`;

export const ENDPOINTS = {
  login: "Authorization/SignIn",
  homeScreen: "Media/GetMediaList",
  player: "Media/GetMediaPlayInfo"
};

export function createEndpoint(endpoint: string) {
  return `${API}/${endpoint}`;
}
