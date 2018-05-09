import React, { Component } from 'react';
import './sell.css';
import axios from 'axios'

class Buy extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         file:null
    //     }
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    //     this.onChange = this.onChange.bind(this)
    //     this.fileUpload = this.fileUpload.bind(this)
    // }
    // onFormSubmit(e){
    //     e.preventDefault() // Stop form submit
    //     this.fileUpload(this.state.file).then((response)=>{
    //         console.log(response.data);
    //     })
    // }
    // onChange(e) {
    //     this.setState({file:e.target.files[0]})
    // }
    onFormSubmit(e){
        e.preventDefault();
        console.log("fileUpload");
        const url = '/product/upload';
        const formData = new FormData();
        formData.append('file',document.getElementById("image").files[0]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(url, formData,config).then(function (bb) {
            console.log(bb);
        });
    }


    // submit() {
    //     // let files = e.target.files || e.dataTransfer.files;
    //     // console.log(files[0]);
    //     var form_data = new FormData(document.getElementById("formfile")[0]);
    //     axios({
    //         method:'POST',
    //         url:'/product/test',
    //         processData: false,
    //         contentType: false,
    //         async: false,
    //         cache: false,
    //         data : form_data,
    //         success: function(response){
    //
    //         }
    //     });
    //
    //     // var data = new FormData();
    //     // data.append("logo", document.getElementById("image")[0]);
    //     // const config = {
    //     //     headers: { 'content-type': 'multipart/form-data' }
    //     // }
    //     // return axios.post("/upload/test", data, config);
    //
    //
    //     // var formData = new FormData(document.getElementById('#formFile')[0]);
    //     // axios({
    //     //         url: '/product/upload',
    //     //         method: 'POST',
    //     //         data: formData,
    //     //         async: false,
    //     //         cache: false,
    //     //         contentType: false,
    //     //         processData: false,
    //     //         success: function (data) {
    //     //             if (200 === 200) {
    //     //             } else {
    //     //             }
    //     //         },
    //     //         error: function (err) {
    //     //             console.log("err", err);
    //     //         }
    //     //     }
    //     // );
    // }

    render() {
        return (
            <body>
            <form onSubmit={this.onFormSubmit}>
                <h2>多图上传</h2>
                <input type="file" name="logo" id="image"/>
                <input type="file" name="111" multiple className="multiple-upload" />

                <input type="submit" id="btn" value="提交"/>
            </form>
            </body>
        )
    }
}

export default Buy;


// var React = require('react'),
//     FileInput = require('react-file-input');
//
// var Form = React.createClass({
//     handleChange: function(event) {
//         console.log('Selected file:', event.target.files[0]);
//     },
//
//     render: function() {
//         return (
//             <form>
//                 <FileInput name="myImage"
//                            accept=".png,.gif"
//                            placeholder="My Image"
//                            className="inputClass"
//                            onChange={this.handleChange} />
//             </form>
//         );
//     },
// });
