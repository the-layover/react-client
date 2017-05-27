import axios from 'axios';

const BASE_URL = 'http://localhost:1337';

const config = {
  headers: {}
}

function getHelloWord() {
  const url = `${BASE_URL}/api/test/helloworld`;
  return axios.get(url, config).then(response => response.data);
}
