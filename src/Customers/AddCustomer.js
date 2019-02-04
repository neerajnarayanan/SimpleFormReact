import React from 'react';
import CustomerServices from '../Services/CustomerService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner'



class AddCustomer extends React.Component {

    constructor(props) {
        super(props)
        this.customerService = new CustomerServices();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullName: '',
            dob: '',
            company: '',
            phone_number: '',
            mobile_number: '',
            sex: '',
            loading: false
        };
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    onSubmit(e) {
        e.preventDefault();
        this.setState({
            loading: true
        })
        console.log(this.state);
        const post = {
            customer_name: this.state.fullName,
            customer_dob: this.state.dob,
            company: this.state.company,
            telephone: this.state.phone_number,
            mobile: this.state.mobile_number,
            gender: this.state.sex,
        }

        console.log(post);
        this.customerService.postCustomerData(post, (err, response) => {
            if (err) {
                console.log(err);
                this.setState({
                    loading: false
                })
            } else {
                console.log('response after posting', response);
                if (response) {
                    toast.success("Customer Added Successfully !");
                    this.setState({
                        fullName: '',
                        dob: '',
                        company: '',
                        phone_number: '',
                        mobile_number: '',
                        sex: ''
                    })
                    this.setState({
                        loading: false
                    })
                } else {
                    toast.error("Some error occured !");
                    this.setState({
                        fullName: '',
                        dob: '',
                        company: '',
                        phone_number: '',
                        mobile_number: '',
                        sex: ''
                    })
                    this.setState({
                        loading: false
                    })
                }
            }
        });
    }



    render() {
        return (
            <div className="container">
                <ToastContainer />
                {this.state.loading &&
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Full Name</label>
                        <input name="fullName" onChange={this.onChange} value={this.state.fullName} className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>DOB</label>
                        <input name="dob" onChange={this.onChange} value={this.state.dob} className="form-control" placeholder="Enter DOB" />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select name='sex' className="form-control" value={this.state.sex} onChange={this.onChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Company</label>
                        <input name="company" onChange={this.onChange} value={this.state.company} className="form-control" placeholder="Enter Company Name" />
                    </div>
                    <div className="form-group">
                        <label>Telephone</label>
                        <input name="phone_number" onChange={this.onChange} value={this.state.phone_number} className="form-control" placeholder="Enter Phone Number" />
                    </div>
                    <div className="form-group">
                        <label	>Mobile</label>
                        <input name="mobile_number" onChange={this.onChange} value={this.state.mobile_number} className="form-control" placeholder="Enter Mobile Number" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}


// export default User;
export default AddCustomer;