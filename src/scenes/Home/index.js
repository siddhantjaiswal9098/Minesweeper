import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Home = () => {
  
  const [inputValue, setInputValue] = useState(0)

  const [array, setArray] = useState([]);

  const generateArray = (value) => {
    const valueParsed = parseInt(inputValue)+value
    var x = new Array(valueParsed);
    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(valueParsed).fill('0');
    }
    console.log(x);
    setInputValue(valueParsed)
    setArray(x)
  }

  const changeValue = (index, index2) => {
    array[index][index2] = '1'
    console.log('arrrayyyyyy', array)
    setArray([...array]);
  }
  return (
      <div style={{padding: 20}}>
        <FormGroup>
          <Label for="exampleEmail">Minesweeper</Label>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button style={{padding: 20}} disabled={!inputValue} onClick={() => generateArray(-1)}>-</Button>
                <span style={{fontSize: 25}}>{inputValue}</span>
            <Button style={{padding: 20}} onClick={() => generateArray(1)}>+</Button>
          </div>
        </FormGroup>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>
        {
          array.map((obj, index) => {
            return obj.map((obj2, index2) => {
              // console.log('obj2obj2obj2', obj.length, index2)
              if(obj.length === index2 + 1 ) {
                return <><span onClick={() => changeValue(index, index2)} style={{padding: '1px 18px 1px 18px', border: '1px solid black'}}>{obj2}</span><br /></>
              } else return <span onClick={() => changeValue(index, index2)} style={{padding: '1px 18px 1px 18px', border: '1px solid black'}}>{obj2}</span>
            })
          })
        }
        </div>
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
