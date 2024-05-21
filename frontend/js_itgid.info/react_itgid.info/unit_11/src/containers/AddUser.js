import { connect, useDispatch } from "react-redux";
import { addNewUsers } from "../action";

const AddUser = () => {
    const dispatch = useDispatch();
    const formHandler = (e) => {
        e.preventDefault();
        dispatch(
            addNewUsers(
                e.target.elements.passport.value,
                e.target.elements.name.value,
                e.target.elements.age.value
            )
        );
    };
    return (
        <div>
            <form onSubmit={formHandler}>
                <input name="passport" defaultValue="" placeholder="Passport" />
                <input name="name" defaultValue="" placeholder="Name" />
                <input name="age" defaultValue="" placeholder="Age" />
                <button type="submit">Add </button>
            </form>
        </div>
    );
};
export default connect()(AddUser);
