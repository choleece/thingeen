import { connect } from 'react-redux';

import Index from '../pages/home/index.jsx';

export default connect(state => {

    console.log(`pageIndexReduce: ${state.getIn(['home', 'pageIndex'])}`);

    return {
        harmList: state.getIn(['home', 'harmList']) ? state.getIn(['home', 'harmList']).toJS() : [],
        pageIndex: state.getIn(['home','pageIndex']) || 0
    }
})(Index);

