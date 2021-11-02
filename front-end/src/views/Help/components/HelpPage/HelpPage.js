import React from 'react';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const styles = theme => ({});
class HelpPage extends React.Component {
  componentDidMount() {
    console.log(this.props.location.page);
  }
  render() {
    return (
      <div>
        {this.props.location.page === 'page1' ? (
          <Page1 />
        ) : this.props.location.page === 'page2' ? (
          <Page2 />
        ) : (
          <Page3 />
        )}
      </div>
    );
  }
}

HelpPage.propTypes = {
  className: PropTypes.string
};

export default withRouter(withStyles(styles)(HelpPage));
