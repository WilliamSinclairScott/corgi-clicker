import axios from 'axios';

const api = axios.create({
  baseURL: `https://dog.ceo/api/`,
});

export default async function getCorgi(){
  const { data } = await api.get(`breed/pembroke/images/random`);
  console.log(data);
  return data;
}