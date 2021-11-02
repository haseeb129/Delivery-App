import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DialogTitle from '@material-ui/core/DialogTitle';
import './dashb.css';
import { AdminContext } from '../../context/AdminContext';
import Modals from './modalsPops';
import Helpone from './helpPropone';
import Helptwo from './helpProptwo';
import Helpthree from './helpPropthree';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: 'white',
    height: '300vh'
  }
}));

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    console.log('helere');
    setOpen(false);
  };
  const [help1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickClose1 = () => {
    setOpen1(false);
  };
  const [help2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickClose2 = () => {
    setOpen2(false);
  };
  const [help3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClickClose3 = () => {
    setOpen3(false);
  };
  const classes = useStyles();

  return (
    <AdminContext.Consumer>
      {(context) => {
        return context.isAuthenticated ? (
          <div className={classes.root}>
            {/* <div className="grid">{dialoginfo.map(renderDialog)}</div> */}
            <Grid container spacing={4}>
              <Grid item lg={3} md={6} xl={9} xs={12}>
                <div className="dashboa-rds">
                  <div className="ind-ex">
                    Index
                    <AccountBalanceIcon onClick={handleClickOpen} />
                    {open && (
                      <Modals open={open} onClose={handleClickClose}>
                        <DialogTitle
                          id="form-dialog-title"
                          style={{ textAlign: 'center' }}>
                          <h2>Know the cost of your move</h2>
                          <div>
                            <hr
                              style={{
                                backgroundColor: ' #cacacf',
                                height: '2px',
                                marginTop: '5%'
                              }}
                            />
                          </div>
                        </DialogTitle>
                        <Form className="dialog-frms">
                          <h4>Islandwide Coverage</h4>
                          <h6>Book your move today</h6>
                          <Row className="dialog-rws">
                            <Col>
                              <label></label>
                              <Form.Control as="textarea" rows={8} />
                            </Col>
                          </Row>
                          <Row className="dia-s">
                            <Col>
                              <p>
                                {' '}
                                Questions? Call us at <b>787-955-8832</b>
                              </p>
                            </Col>
                          </Row>

                          <Button
                            variant="primary"
                            type="submit"
                            style={{
                              width: '100%',
                              marginTop: '5%',
                              backgroundColor: 'black'
                            }}>
                            Submit
                          </Button>
                        </Form>
                      </Modals>
                    )}
                  </div>
                </div>
              </Grid>

              <Grid item lg={3} md={6} xl={3} xs={12}>
                <div className="dashboa-rds">
                  <div className="ind-ex">
                    Help 1
                    <AccountBalanceIcon onClick={handleClickOpen1} />
                    {help1 && (
                      <Helpone open={help1} onClose={handleClickClose1}>
                        <DialogTitle
                          id="form-dialog-title"
                          style={{ textAlign: 'center' }}>
                          <h2>How We Work</h2>
                          <div>
                            <hr
                              style={{
                                backgroundColor: ' #cacacf',
                                height: '2px',
                                marginTop: '5%'
                              }}
                            />
                          </div>
                        </DialogTitle>
                        <Form className="dialog-frms">
                          <Row className="dialog-rws">
                            <Col>
                              <label></label>
                              <Form.Control as="textarea" rows={8} />
                            </Col>
                          </Row>
                          <Row className="dia-s">
                            <Col>
                              <p>
                                * 100% Deposit Risk-Free with our Waranty Seal
                                Questions? Call us at <b>787-955-8832</b>
                              </p>
                            </Col>
                          </Row>

                          <Button
                            variant="primary"
                            type="submit"
                            style={{
                              width: '100%',
                              marginTop: '5%',
                              backgroundColor: 'black'
                            }}>
                            Submit
                          </Button>
                        </Form>
                      </Helpone>
                    )}
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={6} xl={3} xs={12}>
                <div className="dashboa-rds">
                  <div className="ind-ex">
                    Help 2
                    <AccountBalanceIcon onClick={handleClickOpen2} />
                    {help2 && (
                      <Helptwo open={help2} onClose={handleClickClose2}>
                        <DialogTitle
                          id="form-dialog-title"
                          style={{ textAlign: 'center' }}>
                          <h2>Be part of our network</h2>
                          <div>
                            <hr
                              style={{
                                backgroundColor: ' #cacacf',
                                height: '2px',
                                marginTop: '5%'
                              }}
                            />
                          </div>
                        </DialogTitle>
                        <Form className="dialog-frms">
                          <h4>Are you a moving company ?</h4>
                          <h6>Benefits and more</h6>
                          <Row className="dialog-rws">
                            <Col>
                              <label></label>
                              <Form.Control as="textarea" rows={8} />
                            </Col>
                          </Row>
                          <Row className="dialog-rws">
                            <Col>
                              <label></label>
                              <Form.Control as="textarea" rows={8} />
                            </Col>
                          </Row>

                          <Button
                            variant="primary"
                            type="submit"
                            style={{
                              width: '100%',
                              marginTop: '5%',
                              backgroundColor: 'black'
                            }}>
                            Submit
                          </Button>
                        </Form>
                      </Helptwo>
                    )}
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={6} xl={3} xs={12}>
                <div className="dashboa-rds">
                  <div className="ind-ex">
                    Help 3
                    <AccountBalanceIcon onClick={handleClickOpen3} />
                    {help3 && (
                      <Helpthree open={help3} onClose={handleClickClose3}>
                        <DialogTitle
                          id="form-dialog-title"
                          style={{ textAlign: 'center' }}>
                          <h2>Deposit Risk Free</h2>
                          <div>
                            <hr
                              style={{
                                backgroundColor: ' #cacacf',
                                height: '2px',
                                marginTop: '5%'
                              }}
                            />
                          </div>
                        </DialogTitle>
                        <Form className="dialog-frms">
                          <h6>Reasons for a full deposit refund</h6>
                          <Row className="dialog-rws">
                            <Col>
                              <label></label>
                              <Form.Control as="textarea" rows={8} />
                            </Col>
                          </Row>
                          <Row className="dia-s">
                            <Col>
                              <p>
                                *All the refund reasons above must be supported
                                with evidence, in every case moversconnections
                                will conduct an investigation within 48 hours
                                from the moment the request is received. For
                                more information related to our Deposit Risk
                                Free policy to report any situation, please
                                contact us <b>@ moversconnections@gmail.com</b>{' '}
                                or call us <b>@ 787-955-8832</b>
                              </p>
                            </Col>
                          </Row>

                          <Button
                            variant="primary"
                            type="submit"
                            style={{
                              width: '100%',
                              marginTop: '5%',
                              backgroundColor: 'black'
                            }}>
                            Submit
                          </Button>
                        </Form>
                      </Helpthree>
                    )}
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={6} xl={3} xs={12}>
                {/* <StorePayments /> */}
              </Grid>
              <Grid item lg={4} md={12} xl={9} xs={12}>
                {/* <DeliverymanPayments /> */}
              </Grid>
              <Grid item lg={3} md={12} xl={12} xs={12}></Grid>
              <Grid item lg={4} md={12} xl={9} xs={12}>
                {/* <PaymentDetails /> */}
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                {/* <BarChat /> */}
              </Grid>
            </Grid>
          </div>
        ) : (
          <Redirect to="/admin/Signin" />
        );
      }}
    </AdminContext.Consumer>
  );
};

export default Dashboard;