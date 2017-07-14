import React,{Component} from 'react';
import { Modal, ModalManager } from 'react-dynamic-modal';

class ProModal extends Component{
   render(){
      const { details, onRequestClose } = this.props;

      const ScaleUp = {
            transition : { // transition for the modal window
               property : 'all',
               duration : 500, // millisecond
               timingfunction : 'ease-in-out'
            },
            begin : { //beginning style of transition
              'transform': 'scale(0.25)',
              'opacity': 0
            },
            end : { // end style of transition
              'transform': 'scale(1)',
              'opacity': 1
            }
      }

      const style = {
        overlay : {
          backgroundColor: 'rgba(0, 0, 0, .7)',
          overflow: 'auto'
        },
        content: {
          padding: '20px',
          margin: '5% auto',
          width: '80%',
          maxWidth: '800px',
          borderRadius: '0px'
        }
      }

      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={ScaleUp}
            style={style}>
            {details}
            <a className="closeModal" onClick={ModalManager.close}>Close Modal</a>
         </Modal>
      );
   }
}

export default ProModal;
