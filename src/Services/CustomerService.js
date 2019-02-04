import axios from 'axios';



class CustomerServices {
    postCustomerData = (jsondata, callback) => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/customers/postcustomerdata',
            data: jsondata,
        }).then((response) => {
            callback(null, {
                'response': response,
            })

        }).catch((err) => {
            callback(err);
        });
    }

    getCustomerData = async () => {
        try {
            return await axios.get('http://localhost:3000/customers/getallcustomers', {
                headers: { "Access-Control-Allow-Origin": "*" }
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export default CustomerServices;