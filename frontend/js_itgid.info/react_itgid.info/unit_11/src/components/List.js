function List({ users }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Passport</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item) => (
                    <tr key={item.passport}>
                        <td>{item.passport}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default List;

// return (
//     <ul>

// user.users.map((item) => (
//                 <li>
//                     {item.passport}
//                     {item.name}
//                     {item.age}
//                 </li>
//         {goods.goods.map((item) => (
//             <li key={item.id}>
//                 {item.title}
//                 <img src={item.image} className="image" />
//             </li>
//         ))}
//     </ul>
// );
