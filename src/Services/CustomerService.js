import axios, {
    AxiosPromise
} from 'axios';



class CustomerServices {
    postCustomerData = (jsondata, callback) => {
        axios({
            method: 'post',
            url: "this.apiService.channelApi + 'email/addConquestCustomers'",
            data: jsondata,
        }).then((response) => {
            callback(null, {
                'response': response,
            })

        }).catch((err) => {
            callback(err);
        });
    }

}

export default CustomerServices;