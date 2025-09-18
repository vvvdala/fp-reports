import { useParams } from 'react-router-dom';

function GoalPage() {
    const { labId } = useParams();
    const goals = [
        {
            id: 1,
            text: "Написати процедури, що обчислюють задану функцію за допомогою рекурсивного процесу. Реалізувати код для звичайної та хвостової рекурсії. Здійснити аналіз ефективності коду для звичайної та хвостової рекурсії. "
        },
    ]
    const goal = goals.find(g => g.id === Number(labId));

    return (
        <>
            <div className='goal-container'>
                <h2>Мета роботи</h2>
                <p>{goal.text}</p>
            </div>

        </>
    );
}

export default GoalPage