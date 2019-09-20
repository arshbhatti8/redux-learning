import {connect} from 'react-redux';
import {increment,decrement} from './Counter.actions';

import Counter from "./Counter";

const mapStateToProps = state => ({
    randomNumber:state.payload,
    value : state.number,
    randomNumberString: state.randomNumberString
})

const mapDispatchToProps = dispatch => ({
    increment : () => dispatch(increment()),
    decrement : () => dispatch(decrement())
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);