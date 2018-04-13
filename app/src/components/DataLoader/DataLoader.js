import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import thunkify from '../../utils/thunkify';
import { STORE_KEY } from '../../constants/store';
import { URL as LicensesURL } from '../../constants/licenses';
import { URL as PermissionsURL } from '../../constants/permissions';
import { get as getLicenses } from '../../actions/licenses';
import { get as getPermissions } from '../../actions/permissions';


const childAsFunction = ({ children, ...rest }) => children(rest);

const mapStateToProps = state => {
  // return {
  //   isLoading: false,
  //   error: false,
  //   permissions: {
  //     permissions: true,
  //   },
  //   licenses: {
  //     licenses: true,
  //   },
  // };

  const licenses = state[STORE_KEY + LicensesURL];
  const permission = state[STORE_KEY + PermissionsURL];


  return {
    isLoading: (
      !permission.loaded ||
      !licenses.loaded ||
      permission.loading ||
      licenses.loading
    ),
    error: (
      !permission.error ||
      !licenses.error
    ),
    permissions: permission.data,
    licenses: licenses.data,
  }
};


const mapDispatchToProps = (dispatch, props) => {
  return {
    loadPermission: thunkify(dispatch, getPermissions(props.baseURL)),
    loadLicenses: thunkify(dispatch, getLicenses(props.baseURL)),
  }
};


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadPermission('test');
      this.props.loadLicenses();
    },
  }),
)(childAsFunction);

