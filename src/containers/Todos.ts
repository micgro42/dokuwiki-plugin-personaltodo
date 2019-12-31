import { connect } from 'react-redux'
import TodoList from '../components/TodoList/TodoList';

const mapStateToProps = (state: any) => ({
    todos: state.todos,
    projects: state.projects,
});

export default connect(
    mapStateToProps,
)(TodoList)
