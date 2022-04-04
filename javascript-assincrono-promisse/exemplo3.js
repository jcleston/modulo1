import axios from "axios";
axios.get('https://api.github.com/users/jcleston')
    .then(res => {
        console.log(res.data);
    });