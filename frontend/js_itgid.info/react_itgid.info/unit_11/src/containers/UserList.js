import { connect } from "react-redux";
import List from "../components/List";

function mapStateToProps(state) {
    return { users: state.user };
}

export default connect(mapStateToProps, null)(List);
