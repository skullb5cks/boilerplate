import { connect } from 'react-redux'
import { removeTodo, removeRecentTodo, removeCompleteTodo } from '../actions/index'
import Buttons from '../components/Button'

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            if(ownProps.filter === 'REMOVE_ALL') {
                dispatch(removeTodo());
            } else if(ownProps.filter === 'REMOVE_RECENT') {
                dispatch(removeRecentTodo());
            } else if(ownProps.filter === 'REMOVE_COMPLETED') {
                dispatch(removeCompleteTodo());
            }
        }
    }
};

const ButtonClick = connect(
    mapStateToProps,
    mapDispatchToProps
)(Buttons);
export default ButtonClick;