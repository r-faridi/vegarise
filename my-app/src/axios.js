import axios from "axios";
//•Production
axios.defaults.baseURL = 'https://api.technikgo.com/api/'
//•Test
//axios.defaults.baseURL = 'https://localhost:7107/api/'

//axios.defaults.headers.common['Authorization']='Bearer' +' ' + localStorage.getItem('token');