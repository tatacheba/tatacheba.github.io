import { useParams } from "react-router-dom";

function CategoryDescription() {
    let nameCat = useParams();
    return (
        <>
            <a href="/cat">Назад</a>
            <h1>Category:{nameCat.name}</h1>
        </>
    );
}

export default CategoryDescription;
