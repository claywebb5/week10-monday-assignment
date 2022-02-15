// This function will hold the inputs and buttons
function Inputs() {
    <>
        <label id="the-task-type">Task:</label>
        <input type="text" id="task-name" placeholder="Task"/>
        <label id="the-task-importance">Importance:</label>
            <select id="task-importance">
                <option></option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
    </>
}

// Export the function to App.jsx
export default Inputs;