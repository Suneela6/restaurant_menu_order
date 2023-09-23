
import React from 'react';
import { connect } from 'react-redux';
import { RESETTABLENUMBER, addorder, resetfilter } from '../Action';
import itemsApi from './items-api.json'; // Import the local JSON file

const Card = ({ filter_name, addorder, table_number, RESETTABLENUMBER, resetfilter }) => {
  const [data, setData] = React.useState([]);
  const [cloneData, setCloneData] = React.useState([]);

  React.useEffect(() => {
    // Use the imported local JSON data instead of making a fetch request
    setData(itemsApi.items);
    setCloneData(itemsApi.items);
  }, []);

  React.useEffect(() => {
    if (filter_name !== 'All Items') {
      let specific = cloneData.filter(item => item.category === filter_name);
      setData(specific);
    } else {
      setData(cloneData);
    }
  }, [filter_name, cloneData]);

  const Handler = async (id, name, prize, url) => {
    if (table_number != null) {
      addorder(id, name, prize, table_number, url);
      RESETTABLENUMBER();
      resetfilter();
      alert('Order placed successfully');
    } else {
      alert('Please select the table number');
    }
  };

  return (
    <div>
      <center>
        {data.length > 0 ? (
          <div className='container'>
            <div className='row'>
              {data.map((item, index) => (
                <div key={index} className='col-md-4' style={{ padding: '5px' }}>
                  <div className='card' style={{ width: '18rem', padding: '3px', backgroundColor: 'rgb(158, 46, 133)' }}>
                    <img src={item.url} className='card-img-top' alt={`Item ${index}`} />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <div className='card-text'>RS.{item.prize}</div>
                      <button className='btn btn-primary' onClick={() => Handler(item.id, item.name, item.prize, item.url)}>
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='spinner-border text-primary'></div>
        )}
      </center>
    </div>
  );
};

const mapStateToProps = state => ({
  filter_name: state.filterreducer.filter_name,
  table_number: state.tablereducer.table_number,
});

export default connect(mapStateToProps, { addorder, RESETTABLENUMBER, resetfilter })(Card);
