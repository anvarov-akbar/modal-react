import React from 'react';
import './App.scss';

import ModalRef from './Components/ModalRef/ModalRef';
import ModalState from './Components/ModalState/ModalState';

function App(){

	const modalRef = React.useRef(null);
    
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	
	return (
		<main>
    
	<button className='btn--ref' onClick={()=> {
		modalRef.current.classList.add('modal--open')
	}}>Ref Open </button>

    <button className='btn--state' onClick={()=> setIsModalOpen(true)}>State Open </button>

	
	<ModalState isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
	
	<ModalRef ref={ modalRef} />
	
	</main>

	);
	
}


export default App;