import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';




class Footer extends Component {
  render() {
    return (
        <div className= "Footer">
          <div className='Footer-1'>
              <div style={{textAlign: 'center'}}>
              <img height={'100px'} src= {require('./image/logo.png')} />
              <br />
              <b>
                Sự hài lòng của khách hàng là niềm vui của chúng tôi
              </b>
              </div>
          </div>
          <div className='Footer-2'>
            <div>
              <b>© 2023 Copyright: NO NAME</b>
            </div>    
          </div>
        </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
}
export default withRouter(Footer);