export const API = `https://thebetter.bsgroup.eu`;

export const ENDPOINTS = {
  splash: "Authorization/SignIn",
  homeScreen: "Media/GetMediaList",
  player: "Media/GetMediaPlayInfo",
  login: "Authorization/SignIn"
};

export function createEndpoint(endpoint: string) {
  return `${API}/${endpoint}`;
}
