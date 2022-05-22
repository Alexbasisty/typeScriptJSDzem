import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import states from '../../states.json';
import classnames from 'classnames';
import StatePage from './StatePage';

const options = {
  keys: [
    "state",
    "code",
  ]
};


const fuse = new Fuse(states, options);

const App = () => {
  const [query, setQuery] = useState('');
  const [resultList, setResultList] = useState([]);
  const [selected, setSelected] = useState(0);
  const [picked, setPicked] = useState(null);
  
  const onSelect = event => {
    const { key } = event;
  
    if(key === 'ArrowUp') {
        const newSelected = selected - 1;
        
        if(newSelected < 0) {
          return
        } 

        setSelected(newSelected);
    }

    if(key === 'ArrowDown') {
        const newSelected = selected + 1;

        if(newSelected > resultList.length - 1) {
          return;
        }
        setSelected(newSelected);
    }

    if(key === 'Enter') {
        setPicked(selected);
    }
  }
  
    useEffect(() => {
      setResultList(fuse
                      .search(query)
                      .slice(0, 6));
    }, [query]);

    if(picked !== null) {
      const pickedState = resultList[picked];


      return (
        <StatePage state={pickedState.item} />
      )
    }

    return (
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <input
                value={query}
                onChange={({ target }) => setQuery(target.value)} 
                className="input" 
                type="text" 
                placeholder="Wyszukaj..." 
                onKeyUp={(event) => onSelect(event)}
                />
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {resultList.map(({ item: {state, code} }, index) => {
                return (
                  <a href="#" 
                    key={code} 
                    className={classnames("dropdown-item", {
                      'is-active': selected === index
                    })}
                    onMouseEnter={() => setSelected(index)}
                    >
                    {state}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
    )
};

export default App;