import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Row, Col} from "react-bootstrap";
import "./dashb.css";


 const Helpone = (props) => {

    const [help1, setOpen1] = React.useState(props.open);
  
    const handleClickClose1 = () => {
        setOpen1(false);
    };
  
 
 


  return (
    
        <div>
        
           
         
              <Dialog open={help1} onClose={handleClickClose1}
         
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

export default Helpone;
