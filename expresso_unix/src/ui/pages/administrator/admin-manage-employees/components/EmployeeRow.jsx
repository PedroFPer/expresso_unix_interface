function EmployeeRow({ employee }) {
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.role}</td>
            <td>{employee.status}</td>
        </tr>
    );
}

export default EmployeeRow;
