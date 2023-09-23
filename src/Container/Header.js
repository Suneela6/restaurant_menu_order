
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // Corrected import

const Header = ({ count }) => {
  return (
    <div>
      <nav className="navbar navbar-light " style={{backgroundColor:'rgb(158, 46, 133)'}} >
        <a className='navbar-brand ' style={{fontSize:'32px',fontWeight:'bold',color:'white'}}>RESTAURANT</a>
        <button className='btn ' style={{marginRight:'20px' , borderRadius:'9px' , backgroundColor:'rgb(240, 177, 235)'}}>
          <Link to='/orders' style={{ color: 'white', textDecoration: 'none',fontSize:'22px' }}> Orders</Link> <span className='badge bg-secondary' style={{fontSize:"20px"}}>{count}</span>
        </button>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.orderreducer.length,
});

export default connect(mapStateToProps)(Header);
