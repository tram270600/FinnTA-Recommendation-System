import React, {useState} from 'react'
// import './collection.css'
import '../styles/collection.css'
function Collection() {
    const [name, setcltName] = useState('Ubyie._');
    const [prodname1, setcltProdname] = useState("Name of the producy");
    const [prodname2, setcltProdname1] = useState("Name of the product");
    const [price1, setcltPrice] = useState('300.000 VND');
    const [price2, setcltPrice1] = useState('300.000 VND');
             return (
      <div className=" clt2"><h1>Collections</h1>
       <div className ="content">Pick one to buy or saved it to your collection for later Mix n Match</div>
        <div className="cltCard_1">
            <div className="cltimage_1">
              <img src={process.env.PUBLIC_URL + `/Images/clt1.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detail-box_1">
            <p>{name}</p>
                <h2>View set</h2>
                <h3>{ prodname1 }</h3>
                <h4>{price1}</h4>
                <h5>{ prodname2 }</h5>
                <h6>{ price2 }</h6>
                
            </div>
        </div>
        <div className="cltCard2">
            <div className="cltimage2">
              <img src={process.env.PUBLIC_URL + `/Images/clt1.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detail-box2">
            <p>{name}</p>
                <h2>View set</h2>
                <h3>{ prodname1 }</h3>
                <h4>{price1}</h4>
                <h5>{ prodname2 }</h5>
                <h6>{ price2 }</h6>
                
            </div>
        </div>
        <div className="cltCard2">
            <div className="cltimage2">
              <img src={process.env.PUBLIC_URL + `/Images/clt1.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detail-box2">
            <p>{name}</p>
                <h2>View set</h2>
                <h3>{ prodname1 }</h3>
                <h4>{price1}</h4>
                <h5>{ prodname2 }</h5>
                <h6>{ price2 }</h6>
                
            </div>
            </div>
            <div className="cltCard2">
            <div className="cltimage2">
              <img src={process.env.PUBLIC_URL + `/Images/clt2.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detail-box2">
            <p>{name}</p>
                <h2>View set</h2>
                <h3>{ prodname1 }</h3>
                <h4>{price1}</h4>
                <h5>{ prodname2 }</h5>
                <h6>{ price2 }</h6>
                
            </div>
        </div>
        <div className="cltCard3">
            <div className="cltimage3">
              <img src={process.env.PUBLIC_URL + `/Images/clt3.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detail-box3">
            <p>{name}</p>
                <h2>View set</h2>
                <h3>{ prodname1 }</h3>
                <h4>{price1}</h4>
                <h5>{ prodname2 }</h5>
                <h6>{ price2 }</h6>
                
            </div>
            </div>
        </div> 
        )
    }

export default Collection
