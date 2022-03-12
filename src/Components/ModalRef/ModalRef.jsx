import React from "react";





const ModalRef = React.forwardRef((_,modalRef) =>{

return (
    <div className="modal" ref={modalRef}
    onClick = {(evt)=> {
        if(evt.target.matches('.modal')){
            modalRef.current.classList.remove('modal--open')
        }
     }}>

 <div className="modal__inner">

 <h2>Modal Ref</h2>

 <button className='modal__close-btn'
  onClick={()=> 
     modalRef.current.classList.remove('modal--open')
 }> &times;</button>

 </div>

</div>
);


});






export default ModalRef;