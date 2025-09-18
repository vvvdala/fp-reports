import { useParams } from 'react-router-dom';
import task1Image from '../assets/lab1/task/task.png';

function TaskPage() {
    const { labId } = useParams();
    const tasks = [
        {
            id: 1,
            screen: task1Image
        },
    ]
    const task = tasks.find(t => t.id === Number(labId));

    return (
        <>
            <div className='task-container'>
                <h2>Умова завдання</h2>
                <img src={`${task.screen}`} alt="task condition" />
            </div>

        </>
    );
}

export default TaskPage