import { connect } from 'react-redux';

import Index from '../pages/personal/index.jsx';

export default connect(state => {
    return {
        userInfo: state.getIn(['personal', 'userInfo']).toJS()
    }
})(Index)