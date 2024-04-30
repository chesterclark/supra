const axios = require('axios');

const data = {
  email: 'johonob823@irnini.com',
  password: 'johonob823@irnini.com'
};

axios({
  method: 'post',
  url: 'https://integrations.malogica.com/api/v1/auth/login',
  headers: {
    'accept': '*/*',
    'Content-Type': 'application/json'
  },
  data: data
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
