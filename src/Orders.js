
import React from 'react';
import { connect } from 'react-redux';
import Header from './Container/Header';
import GrandTotal from './GrandTotal';

const Orders = ({ list }) => {
  const cancelOrderHandler = (orderId) => {
    alert('Order cancelled successfully');
    // You don't need to set any state here to hide the order; it will be handled by not rendering it in the mapping function.
  };

  // Calculate the total amount based on the items in the list
  const totalAmount = list.reduce((total, item) => total + item.prize, 0);

  return (
    <div>
      <Header />
      <center>
        {list.length > 0 ? (
          <div className='container'>
            <div className='row'>
              {list.map((item, index) => (
                <div className='col-md-4' style={{ padding: '5px' }} key={item.id}>
                  <div className='card' style={{ width: '18rem', padding: '3px' }}>
                    <img src={item.url} className='card-img-top' alt={`Item ${index}`} />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <div className='card-text'>BILLING AMOUNT RS.{item.prize}</div>
                      <p>table number: {item.table_number}</p>
                      <button
                        className='btn btn-danger'
                        onClick={() => cancelOrderHandler(item.id)} // Pass the orderId to the cancelOrderHandler
                      >
                        Cancel Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='h4' style={{color:'rgb(158, 46, 133)',fontSize:'36px',fontWeight:'bold'}}>no order placed yet</div>
        )}
      </center>
      <center>
        <GrandTotal totalAmount={totalAmount} /> {/* Pass the total amount as a prop */}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.orderreducer,
});

export default connect(mapStateToProps)(Orders);
