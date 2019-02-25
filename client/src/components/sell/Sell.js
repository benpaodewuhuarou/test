import React, { Component } from 'react';
import './sell.css';
import axios from 'axios'
import { Link,withRouter} from 'react-router-dom';
class Sell extends Component {

    async onFormSubmit(e){
        e.preventDefault();
        console.log("fileUpload");
        const url = '/product/upload';
        const formData = new FormData();
        formData.append('file',document.getElementById("image").files[0]);
        var imagedata = await axios.post(url, formData);
        var imagepath = [];
        imagepath.push(imagedata.data);
        var product = {
            title: document.getElementById("title").value,
            email: document.getElementById("email").value,
            price: parseFloat(document.getElementById("price").value),
            phoneNumber: document.getElementById("phoneNumber").value,
            location: document.getElementById("location").value,
            detail: document.getElementById("detail").value,
            image: imagepath,
            type: document.getElementById("type").value
        }
        var result = await axios.put("/product/addProduct", product);
        if(result){
            this.props.history.push('/home');
        }

    }

    render(){
        return(
            <body>
            <div className='sell-container'>
                <form className='innerForm' id="formproduct" onSubmit={this.onFormSubmit}>
                    <div class="form-group">
                        <label for="title">item title</label>
                        <input type="text" class="form-control" name="itemTitle" id="title" aria-describedby="itemlHelp" placeholder="item title" required />
                        <small id="itemlHelp" class="form-text text-muted">a brief stunning title please....</small>
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="price">expected price</label>
                        <input type="text" class="form-control" name="price" id="price" placeholder="input a price range" required />
                    </div>
                    <div class="form-group">
                        <label for="phone-number">Phone Number</label>
                        <input type="text" class="form-control" name="phoneNumber" id="phoneNumber" placeholder="input phoneNumber" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Location</label>
                        <select class="form-control" name="state" id="location" data-dropup-auto="false" data-size="5">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Type</label>
                        <select class="form-control" name="type" id="type" data-dropup-auto="false">
                            <option value="electric">electric</option>
                            <option value="clothing">clothing</option>
                            <option value="shoes">shoes</option>
                            <option value="furniture">furniture</option>
                            <option value="daily use">daily use</option>
                            <option value="book">book</option>
                            <option value="car">car</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>PhotoUpload</label>
                        <input type="file" name="logo" id="image" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Detail</label>
                        <textarea class="form-control" name="Textarea" id="detail" rows="5" required></textarea>
                    </div>

                    <label id="wrongMessage"></label>
                    <input class="btn  btn-primary" type="submit" id="btn" value="Submit" />
                </form>
            </div>
            </body>
        )
    }

}

export default withRouter(Sell);

