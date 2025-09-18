import { useParams, Link } from 'react-router-dom';

function LabPage() {
    const { labId } = useParams();

    return (
        <>
            <div className='lab-container'>
                <h2>Лабораторна робота №{labId}</h2>
                <ul className='lab-list'>
                    <li>
                        <Link to={`/goal/${labId}`}>Мета роботи</Link>
                    </li>
                    <li>
                        <Link to={`/task/${labId}`}>Умова завдання</Link>
                    </li>
                    <li>
                        <Link to={`/analysis/${labId}`}>Аналіз задачі</Link>
                    </li>
                    <li>
                        <Link to={`/code/${labId}`}>Код</Link>
                    </li>
                    <li>
                        <Link to={`/screenshot/${labId}`}>Скріншот роботи та результату</Link>
                    </li>
                    <li>
                        <Link to={`/check/${labId}`}>Оцінка достовірності результату</Link>
                    </li>
                    <li>
                        <Link to={`/ai-review/${labId}`}>Перевірка коду інструментами ШІ</Link>
                    </li>
                    <li>
                        <Link to={`/conclusion/${labId}`}>Висновок</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default LabPage