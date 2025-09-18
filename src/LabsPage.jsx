import { Link } from 'react-router-dom';

function LabsPage() {
    const labs = [
        { id: 1, name: "Лабораторна робота №1" }
    ];
    return (
        <>
            <div className='labs-container'>
                <h2>Лабораторні роботи</h2>
                <ul className='lab-list'>
                    {labs.map(lab => (
                        <li>
                            <Link to={`/labs/${lab.id}`}>{lab.name}</Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    );
}

export default LabsPage;