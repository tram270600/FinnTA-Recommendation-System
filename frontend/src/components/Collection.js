import React, {useState} from 'react'
import '../styles/collection.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Collection() {
    const [name, setcltName] = useState('Ubyie._');
    const [prodname1, setcltProdname] = useState("Name of the product");
    const [prodname2, setcltProdname1] = useState("Name of the product");
    const [price1, setcltPrice] = useState('300.000 VND');
    const [price2, setcltPrice1] = useState('300.000 VND');
    const [saveItem1,setsaveItem1]= useState(false);   
    const [saveItem2,setsaveItem2]= useState(false);    
    const [saveItem3,setsaveItem3]= useState(false);    
    const [saveItem4,setsaveItem4]= useState(false);    
    const [saveItem5,setsaveItem5]= useState(false);    
    const [saveItem6,setsaveItem6]= useState(false);    



             return (
         
      <div className=" clt2"><h1>Collections</h1>
       <div className ="content">Pick one to buy or saved it to your collection for later Mix n Match</div>
        <div className="cltCard">
            <div className="cltimage_1">
              <img src={process.env.PUBLIC_URL + `/Images/clt1.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detail-box1">
            <p>{name}</p>
            
                <h2>View set</h2>
                <h3>{ prodname1 }</h3>
                <h4>{price1}</h4>
                <h5>{ prodname2 }</h5>
                <h6>{ price2 }</h6>

                <div className="save_1" onClick={()=>{if(saveItem1 == true){setsaveItem1(false)}else {setsaveItem1(true)}}}> 
                <button>{saveItem1 ? <BookmarkIcon style={{ fill: '#025588' }} /> : <BookmarkBorderIcon style={{ fill: '#025588' }}/>}</button>
                </div>
                <div className="save_2" onClick={()=>{if(saveItem2 == true){setsaveItem2(false)}else {setsaveItem2(true)}}}> 
                <button>{saveItem2 ? <BookmarkIcon style={{ fill: '#025588' }} /> : <BookmarkBorderIcon style={{ fill: '#025588' }}/>}</button>
                </div>
                <div class="symbol2"><img src={process.env.PUBLIC_URL + `/Images/vector.png` } /></div>
                <div class="symbol1"><img src={process.env.PUBLIC_URL + `/Images/vector.png` } /></div>
                <div class="viewItem1"><button><ArrowForwardIcon style={{ fill: '#025588'}}/></button></div>
            </div>
       
            </div>
            <div className="cltCard_2">
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
                <div className="save_3" onClick={()=>{if(saveItem3 == true){setsaveItem3(false)}else {setsaveItem3(true)}}}> 
                <button>{saveItem3 ? <BookmarkIcon style={{ fill: '#025588' }} /> : <BookmarkBorderIcon style={{ fill: '#025588' }}/>}</button>
                </div>
                <div className="save_4" onClick={()=>{if(saveItem4 == true){setsaveItem4(false)}else {setsaveItem4(true)}}}> 
                <button>{saveItem4 ? <BookmarkIcon style={{ fill: '#025588' }} /> : <BookmarkBorderIcon style={{ fill: '#025588' }}/>}</button>
                </div>
                <div class="symbol3"><img src={process.env.PUBLIC_URL + `/Images/vector.png` } /></div>
                <div class="symbol4"><img src={process.env.PUBLIC_URL + `/Images/vector.png` } /></div>
                <div class="viewItem2"><button><ArrowForwardIcon style={{ fill: '#025588'}}/></button></div>
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
                <div className="save_5" onClick={()=>{if(saveItem5 == true){setsaveItem5(false)}else {setsaveItem5(true)}}}> 
                <button>{saveItem5 ? <BookmarkIcon style={{ fill: '#025588' }} /> : <BookmarkBorderIcon style={{ fill: '#025588' }}/>}</button>
                </div>
                <div className="save_6" onClick={()=>{if(saveItem6 == true){setsaveItem6(false)}else {setsaveItem6(true)}}}> 
                <button>{saveItem6 ? <BookmarkIcon style={{ fill: '#025588' }} /> : <BookmarkBorderIcon style={{ fill: '#025588' }}/>}</button>
                </div>
                <div class="symbol5"><img src={process.env.PUBLIC_URL + `/Images/vector.png` } /></div>

                <div class="symbol6"><img src={process.env.PUBLIC_URL + `/Images/vector.png` } /></div>
                <div class="viewItem3"><button><ArrowForwardIcon style={{ fill: '#025588'}}/></button></div>

            </div>
             
            </div>
        </div>
  
        )
    }

export default Collection
