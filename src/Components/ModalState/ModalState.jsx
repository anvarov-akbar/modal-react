import React from "react";

const ModalState = ({isModalOpen, setIsModalOpen}) =>{
    
    return (
        <div className={`modal ${isModalOpen ? 'modal--open':''}`}  
        onClick={(evt)=> {
            if(evt.target.matches('.modal')){
                setIsModalOpen(false);
            }
        }}>
        
        <div className="modal__inner">
        
        <h2>Modal State</h2>
        
        <button className="modal__close-btn" onClick={()=> setIsModalOpen(false)}>&times;</button>
        
        </div>
        
        </div>
        );
        
    };
    
    
    
    
    
    
    export default ModalState;