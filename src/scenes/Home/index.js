import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Home = () => {

  const [inputValue, setInputValue] = useState(0)

  const [array, setArray] = useState([]);
  const [resultArray, setResultArray] = useState([]);

  const generateArray = (value) => {
    const valueParsed = parseInt(inputValue) + value
    var x = new Array(valueParsed);
    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(valueParsed).fill(0);
    }
    setInputValue(valueParsed)
    setArray(x)
  }
  const checkMinesweeper = () => {
    let resultArray = JSON.parse(JSON.stringify(array));
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === 1) {
          resultArray[i][j] = 9; //mine here
        } else {
          let arrayOfValuesNearNonMines = []
          // loop through all 8 elements around the mine.
          for (let adjecentValuesx = -1; adjecentValuesx <= 1; adjecentValuesx++) {
            for (let adjecentValuesy = -1; adjecentValuesy <= 1; adjecentValuesy++) {
              if (!(adjecentValuesx === 0 && adjecentValuesy === 0)) {
                if (array[i + adjecentValuesx] !== undefined && array[i + adjecentValuesx][j + adjecentValuesy] !== undefined) {
                  arrayOfValuesNearNonMines.push(array[i + adjecentValuesx][j + adjecentValuesy]);
                }
              }
            }
          }
          resultArray[i][j] = arrayOfValuesNearNonMines.filter(val => val === 1).length;
        }
      }
    }
    setResultArray(resultArray)
  }


  const changeValue = (index, index2) => {
    array[index][index2] = 1;
    setArray([...array]);
  }
  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button color="primary" style={{ padding: '7px 30px 7px 30px' }} disabled={!inputValue} onClick={() => generateArray(-1)}>-</Button>
        <span style={{ fontSize: 25 }}>{inputValue}</span>
        <Button color="primary" style={{ padding: '7px 30px 7px 30px' }} onClick={() => generateArray(1)}>+</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div>Minesweeper</div>
          <Button color="primary" style={{ padding: '7px 30px 7px 30px' }} disabled={!inputValue} onClick={() => checkMinesweeper()}>SUBMIT</Button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 50 }}>
        <div>
          {
            array.map((obj, index) => {
              return obj.map((obj2, index2) => {
                if (obj.length === index2 + 1) {
                  return <span key={index2}><span onClick={() => changeValue(index, index2)} style={{ padding: '1px 18px 1px 18px', border: '1px solid black' }}>{obj2}</span><br /></span>
                } else return <span key={index2} onClick={() => changeValue(index, index2)} style={{ padding: '1px 18px 1px 18px', border: '1px solid black' }}>{obj2}</span>
              })
            })
          }

        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 50 }}>
        <div>
          {
            resultArray.map((obj, index) => {
              return obj.map((obj2, index2) => {
                if (obj.length === index2 + 1) {
                  return <span key={index2}><span onClick={() => changeValue(index, index2)} style={{ padding: '1px 18px 1px 18px', border: '1px solid black' }}>{obj2}</span><br /></span>
                } else return <span key={index2} onClick={() => changeValue(index, index2)} style={{ padding: '1px 18px 1px 18px', border: '1px solid black' }}>{obj2}</span>
              })
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
