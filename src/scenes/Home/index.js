import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Home = () => {
  const [inputValue, setInputValue] = useState(0)
  var x = new Array(inputValue);
  for (var i = 0; i < x.length; i++) {
    x[i] = new Array(inputValue).fill('0');
  }
  console.log(x);
  return (
      <div style={{padding: 20}}>
        <FormGroup>
          <Label for="exampleEmail">Minesweeper</Label>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button disabled={!inputValue} onClick={() => setInputValue(parseInt(inputValue)-1)}>-</Button>
                <span>{inputValue}</span>
            <Button onClick={() => setInputValue(parseInt(inputValue)+1)}>+</Button>
          </div>
        </FormGroup>
        <div>
        {
          x.map((obj) => {
            return obj.map((obj2, index) => {
              if(obj2.length === index ) {
                return <span><span>0</span><br /></span>
              } else return <span>0</span>
            })
          })
        }
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
