import { connect, useDispatch } from "react-redux";
import { addNewUsers } from "../action";

const AddUser = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.dir(e.target.elements.passport.value);
                    console.dir(e.target.elements.name.value);
                    console.dir(e.target.elements.age.value);
                    console.dir("we push button");
                    dispatch(
                        addNewUsers(
                            e.target.elements.passport,
                            e.target.elements.name,
                            e.target.elements.age
                        )
                    );
                }}
            >
                <input name="passport" defaultValue="" />
                <input name="name" defaultValue="" />
                <input name="age" defaultValue="" />
                {/* <button type="submit" onClick={formHandler}> */}
                <button type="submit">Add </button>
            </form>
        </div>
    );
};
export default connect()(AddUser);
