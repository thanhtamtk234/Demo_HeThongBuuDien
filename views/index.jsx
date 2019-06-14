var React = require('react');
import DefaultLayout from '../layouts/default'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

export default class Index extends React.Component {
  render() {
    return (
      <DefaultLayout  title="Trang chủ">
        <Header/>  
        <Footer/>    
      </DefaultLayout>
    );
  }
}
