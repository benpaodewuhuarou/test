import React, { Component } from 'react';
import './sell.css';
import axios from 'axios'

class Sell extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // onFormSubmit(e){
    //     e.preventDefault();
    //     console.log("fileUpload");
    //     const url = '/product/upload';
    //     const formData = new FormData();
    //     formData.append('file',document.getElementById("image").files[0]);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }
    //     axios.post(url, formData,config).then(function (bb) {
    //         console.log(bb);
    //     });
    // }


    handleSubmit(event) {
        event.preventDefault();
        var formdata = new FormData(document.getElementById("fuck")[0]);
        axios({ url: '/product/upload',
         method: 'POST', 
         data: formdata, 
         async: false, 
         cache: false,
          contentType: false, 
          processData: false, 
          success: function (data) 
          { if (200 === 200) { 
              alert("111"); } 
              else { } 
              console.log('imgUploader upload success, data:', data); }, 
              error: function (err) { console.log("err", err); alert("222") } });

        
        // const data = new FormData(event.target);
        // let title=data.get('itemTitle');
        // let type='3C';
        // let price=parseInt(data.get('price'));
        // let phoneNumber=data.get('phoneNumber');
        // let email = data.get('email');
        // let detial = data.get('Textarea');
        // //let files = data.get('image');
        // //let files = document.getElementById("fuck").value;
        // console.log(files);
        // // let files = (image)=>{
        // //     return axios.post('/product/upload',{image}).then((url)=>{
        // //         return url;
        // //     })
        // // }
        // let location = data.get('state');
        // let result ={title,type,price,phoneNumber,email,phoneNumber,email,detial,files,location};


        // axios.post('/product/upload', { result }).then((url) => {
        //     console.log(url);
        // })

        // axios.put('/product/addProduct',{result}).then((e)=>{
        //   console.log(e);
        // })
        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
    }

    render() {
        return (
            <div className='sell-container'>
                <form className='innerForm' onSubmit={this.handleSubmit} >
                    <div class="form-group">
                        <label for="title">item title</label>
                        <input type="text" class="form-control" name="itemTitle" aria-describedby="itemlHelp" placeholder="item title" />
                        <small id="itemlHelp" class="form-text text-muted">a brief stunning title please....</small>
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="price">expected price</label>
                        <input type="text" class="form-control" name="price" placeholder="input a price range" />
                    </div>
                    <div class="form-group">
                        <label for="phone-number">Phone Number</label>
                        <input type="text" class="form-control" name="phoneNumber" placeholder="input phoneNumber" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select class="form-control" name="state" data-dropup-auto="false" data-size="5">
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
                    <div class="form-group" >
                    <form id="image" method="post" enctype="">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" class="form-control-file" id="fuck" name="image" aria-describedby="image" />
                        <small id="image" class="form-text text-muted">max for 5 pictures</small>
                    </form>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" name="Textarea" rows="5"></textarea>

                    </div>
                </form>
            </div>
        )}
    }

    export default Sell;