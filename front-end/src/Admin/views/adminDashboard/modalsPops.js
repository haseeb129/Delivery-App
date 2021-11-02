import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Row, Col} from "react-bootstrap";
import "./dashb.css";


 const Modals = (props) => {

  const [open, setOpen] = React.useState(props.open);
  
  const handleClickClose = () => {
      setOpen(false);
  };
  
  
 
 


  return (
    
        <div>
        
           
         
              <Dialog open={open} onClose={handleClickClose}
         
          aria-labelledby="form-dialog-title"
        >
          
          <DialogContent>
            
            
        {props.children}         
          </DialogContent>
          <DialogActions>
          
            <Row className="dialog-rws"></Row>
          </DialogActions>
        </Dialog>
          
      </div>
    
   );
};

export default Modals;
