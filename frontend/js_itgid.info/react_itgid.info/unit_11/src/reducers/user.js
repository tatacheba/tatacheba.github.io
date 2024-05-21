const user = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            console.log("we add new user");
            console.log(state);
            return [
                ...state,
                {
                    passport: action.passport,
                    name: action.name,
                    age: action.age,
                },
                // console.log("we add new user 2"),
                // console.log(action),
            ];
        default:
            return state;
    }
};

export default user;
