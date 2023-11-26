import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }

  render() {
    const slideProperties = {
      duration: 3000, 
      autoplay: true, 
      onChange: () => {}, 
      onStartChange: () => {} 
    };

    return (
      <Slide {...slideProperties}>
        {/* Các slide của bạn */}
        <div className="each-slide-effect">
          <div width={'100%'}>
            <img height={'100%'} width={'100%'} src={require('./image/theme1.png')} alt="Slide 1" />
          </div>
        </div>
        <div className="each-slide-effect">
          <div width={'100%'}>
            <img height={'100%'} width={'100%'} src={require('./image/theme2.png')} alt="Slide 2" />
          </div>
        </div>
        <div className="each-slide-effect">
          <div width={'100%'}>
            <img height={'100%'} width={'100%'} src={require('./image/theme3.png')} alt="Slide 3" />
          </div>
        </div>
      </Slide>
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

export default withRouter(Animation);
