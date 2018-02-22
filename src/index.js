import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

// TrelloContainer
    // Trello List Title - FontAwesome Icon
        // List Item
        // List Item
        // List Item
        // List Item
    // Add a card

const Title = ({milestone}) => (
    <div className="mileStone-Title">
        {milestone.title}
    </div>
);
Title.propTypes = {
    milestone: PropTypes.object.isRequired
}

const TaskList = ({tasks}) => (
    <ul className="taskList">
{/* looping over array of tasks to get a singular task, then we're mapping on that single task to get the name */}
        {tasks.map((task)=> (
            // componentize the list item
           <TaskListItem task={task} key={task.id}/>
        ))}
    </ul>
);
TaskList.propTypes = {
    tasks: PropTypes.object
}

const TaskListItem = ({task}) => (
    <li className="taskListItem">
        {task.name}
    </li>
);
TaskListItem.propType = {
    task: PropTypes.object.isRequired
}

const AddList = ({more}) => (
    <div className="add-more">
        <a href="/">{more}</a>
    </div>
);
AddList.propType= {
    more: PropTypes.object.isRequired
}

const TrelloCard = ({list}) => (
    <div className="card-container">
        <Title milestone={list.milestones}/>
        <TaskList tasks={list.milestones.tasks}/>
        <AddList more={list.milestones.add}/>
    </div>
);


const cardItems = {
    milestones: {
        title: "GraciousHome.com Home Page Development",
        tasks: [
            {
                id: 1,
                name: "Home Page Design"
            },
            {
                id: 2,
                name: "Navigation Development"
            },
            {
                id: 3,
                name: "Home Page Development"
            },
            {
                id: 4,
                name: "PM Review and Call"
            },
            {
                id: 5,
                name: "Client Approval"
            }
        ],
        add: "Add More..."
    }
}

ReactDOM.render(<TrelloCard list={cardItems} />, document.getElementById('root'));
