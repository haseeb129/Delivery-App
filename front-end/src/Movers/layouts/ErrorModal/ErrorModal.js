import React, { Component, Fragment } from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Grid,
    Fade,
    Modal,
    Backdrop,
  
  } from '@material-ui/core';
  import { withStyles } from '@material-ui/styles';
  import { MoverContext } from '../../contexts/MoverContext'

  const styles = theme => ({
    Paper:{

        opacity: '1',
        width: '50%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'opacity'
    },
    PaperInner:{
        width: '100%',
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

  })


class ErrorModal extends Component {
    static contextType = MoverContext;

    render() {

        const {classes} = this.props
        return (
            <Fragment>
                <Modal
                    aria-describedby="transition-modal-description"
                    aria-labelledby="transition-modal-title"
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                    className="Modal"
                    closeAfterTransition
                    onClose={this.context.handleCloseModal}
                    open={this.context.showErroModal}
                    >
                    <Fade in={this.context.showErroModal}>
                    <div
                        className={classes.Paper}
                        // style={{ marginLeft: '10vh', marginTop: '10vh', marginRight: '10vh' }}
                    >
                        <Card className={classes.PaperInner}>
                        <CardContent>
                                <h3>{this.props.msg}</h3>
                        </CardContent>
                        </Card>
                    </div>
                    </Fade>
                    </Modal>

            </Fragment>
        )
    }
}

export default withStyles(styles)(ErrorModal);
