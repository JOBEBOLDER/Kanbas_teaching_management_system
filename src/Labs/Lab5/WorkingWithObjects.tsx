import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with Express25",
        due: "2021-10-18",
        completed: false,
        score: 0,
    });
    // 添加module state
    const [module, setModule] = useState({
        id: "M101",
        name: "Web Development",
        description: "Full Stack Web Development with MERN Stack",
        course: "CS5610"
    });


    return (
        <div id="wd-working-with-objects">
            {/* 现有的assignment相关UI保持不变 */}
            
            <h4>Module Management</h4>
            <div>
                <a className="btn btn-primary me-2" href={`${MODULE_API_URL}`}>
                    Get Module
                </a>
                <a className="btn btn-success me-2" href={`${MODULE_API_URL}/name`}>
                    Get Module Name
                </a>
            </div>
            <br/>
            
            <h5>Update Module</h5>
            <input 
                className="form-control w-75 mb-2"
                value={module.name}
                onChange={(e) => setModule({ 
                    ...module, 
                    name: e.target.value 
                })}
            />
            <a 
                className="btn btn-primary me-2"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            
            <input 
                className="form-control w-75 mb-2"
                value={module.description}
                onChange={(e) => setModule({ 
                    ...module, 
                    description: e.target.value 
                })}
            />
            <a 
                className="btn btn-warning me-2"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Description
            </a>

            <h5>Update Assignment</h5>
            <input 
                type="number"
                className="form-control w-75 mb-2"
                value={assignment.score}
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
            />
            <a 
                className="btn btn-success me-2"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>

            <div className="form-check mb-2">
                <input 
                    type="checkbox"
                    className="form-check-input"
                    checked={assignment.completed}
                    onChange={(e) => setAssignment({
                        ...assignment,
                        completed: e.target.checked
                    })}
                />
                <label className="form-check-label">
                    Completed
                </label>
            </div>
            <a 
                className="btn btn-info"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed Status
            </a>
            <hr />
        </div>
    );
}