import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import './Postcode.css';
 
export const Postcode =({ isOpen, close, onChangePost, localname })=>{
  
 function handleAddress(data){
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(fullAddress);
    onChangePost(localname, fullAddress)
  }
 
    return (
      <React.Fragment>
      {
        isOpen ?
      <React.Fragment>
         <div className="Modal-overlay" onClick={close} />
          <div className="Modal">
          <DaumPostcode
            onComplete={handleAddress}
              />
            <div className="button-wrap">
              <button onClick={close}> 입력 </button>
            </div>
          </div>
      </React.Fragment>
      :
      null }
      </React.Fragment>
    );
  }
  export default Postcode
