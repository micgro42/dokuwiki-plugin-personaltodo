import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList/ProjectList';

const mapStateToProps = (state: any) => ({
    projects: state.projects
});

export default connect(
    mapStateToProps,
)(ProjectList)
