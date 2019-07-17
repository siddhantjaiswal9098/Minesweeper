import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  var x = new Array(10);
  for (var i = 0; i < x.length; i++) {
    x[i] = new Array(10).fill('0');
  }
  console.log(x);
  return (
      <div>
        Minesweeper 
        <div>

        </div>
      </div>
    );
  }

Home.defaultProps = {
  comments: [{}],
};
Home.propTypes = {
  comments: PropTypes.array,
  getCommentsFunction: PropTypes.func.isRequired,
  commentsLoading: PropTypes.bool.isRequired,
};

export default Home;
