import React, {useState, useEffect} from 'react';
import useCollapse from 'react-collapsed';
import '../styles/Collapsible.scss'


function Collapsible(props) {
    const config = {
      defaultExpanded: props.defaultExpanded || false,
      collapsedHeight: props.collapsedHeight || 0
    };
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ config });
    function handleOnClick() {
            // Do more stuff with the click event!
            // Or, set isExpanded conditionally 
            setExpanded(!isExpanded);
    }
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {/* {isExpanded ? 'Collapse' : 'Expand'} */}
              {/* <div className="control-collapse"></div> */}
              <div className="title">{props.title}</div>
              <div className="icon">
                <i className={'fas fa-chevron-' + (isExpanded ? 'up' : 'down')}></i>
              </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
  }

export default Collapsible