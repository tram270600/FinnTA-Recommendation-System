import React, {useState, useEffect} from 'react';
import useCollapse from 'react-collapsed';
import '../styles/Collapsible.scss'


function Collapsible(props) {
  const {showCategory, defaultExpanded, collapsedHeight, title} = props;
    const config = {
      defaultExpanded: defaultExpanded || false,
      collapsedHeight: collapsedHeight || 0
    };
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ config });
    function handleOnClick() {
            // Do more stuff with the click event!
            // Or, set isExpanded conditionally 
            setExpanded(!isExpanded);
    }
    return (
        <div className="collapsible" onClick={showCategory}>
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
            {/* <div className="title">{props.title}</div> */}
              <div className="title">{title}</div>
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