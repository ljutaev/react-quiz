import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-da56b.firebaseio.com'
})