import { Link, useParams } from "react-router-dom";

function CategoryDescription() {
    let nameCat = useParams();
    return (
        <>
            <Link to="/cat">Назад</Link>
            <h1>Category:{nameCat.name}</h1>
        </>
    );
}

export default CategoryDescription;
