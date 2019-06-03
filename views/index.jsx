var React = require('react');
var DefaultLayout = require('./layouts/default');
import Header from './layouts/Header'
import Footer from './layouts/Footer'

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout  title="Trang chủ">
        <Header/>  
        <Footer/>    
      </DefaultLayout>
    );
  }
}

module.exports = Index;
