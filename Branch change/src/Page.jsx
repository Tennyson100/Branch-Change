import React, { useState } from 'react';
import './Page.css';
const Page = () => {
    const [rows, setRows] = useState([{ priority: 1, course: 'Bachelor of Technology', branch: 'Computer Science and Engineering' }]);

    const handleAddRow = () => {
        const newRow = {
            priority: rows.length + 1,
            course: 'Bachelor of Technology',
            branch: 'Computer Science and Engineering'
        };
        setRows([...rows, newRow]);
    };

    const handleRemoveRow = (indexToRemove) => {
        const updatedRows = rows.filter((row, index) => index !== indexToRemove);
        // Update priorities of remaining rows
        const updatedRowsWithPriority = updatedRows.map((row, index) => ({
            ...row,
            priority: index + 1
        }));
        setRows(updatedRowsWithPriority);
    };

    const handleSubmit = () => {
        // Implement your submit logic here
        console.log('Form submitted:', rows);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Priority</th>
                        <th>Choose Course</th>
                        <th>Choose Branch</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.priority}</td>
                            <td>
                                <select value={row.course} onChange={(e) => handleCourseChange(index, e.target.value)}>
                                    <option value="Bachelor of Technology">Bachelor of Technology</option>
                                    <option value="Master of Technology">Master of Technology</option>
                                </select>
                            </td>
                            <td>
                                <select value={row.branch} onChange={(e) => handleBranchChange(index, e.target.value)}>
                                    <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                    <option value="Chemical Engineering">Chemical Engineering</option>
                                    {/* Add more options for other branches */}
                                </select>
                            </td>
                            <td>
                                <button onClick={() => handleRemoveRow(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddRow}>Add More</button>
            <button onClick={handleSubmit}>Submit My Response</button>
        </div>
    );
};

export default Page;
