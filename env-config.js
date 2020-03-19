const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://nicotukiainen.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://nicotukiainen.herokuapp.com',
  'process.env.CLIENT_ID': 'YFnWnc4Y4OWyKkjBU6EikbkcIsIoQq4l'
}