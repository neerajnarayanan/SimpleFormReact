import React from 'react';
import CustomerServices from '../Services/CustomerService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListCustomers extends React.Component {
    constructor(props) {
        super(props)
        this.customerService = new CustomerServices();
        this.state = {
            customerData: []
        }
    }

    componentWillMount() {
        this.customerService.getCustomerData().then(response => {
            if (response && response.status ==200 && response.data && response.data.data) {
                console.log(response);
                this.setState({
                    customerData: response.data.data
                })
            } else {
                toast.error("Some error occured !");
            }
        })
    }
    render() {

        return (
            <div className="container">
                Customer List
                <ToastContainer />
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer DOB</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Company</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Telephone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customerData &&
                            this.state.customerData.length > 0 &&
                            this.state.customerData.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{item.customer_id}</th>
                                    <td>{item.customer_name}</td>
                                    <td>{item.customer_dob}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.company}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.telephone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListCustomers;