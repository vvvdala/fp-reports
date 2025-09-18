import { useParams } from 'react-router-dom';
import task1Image from '../assets/lab1/check/task1.png';
import task2Image from '../assets/lab1/check/task2.png';

function CheckPage() {
    const { labId } = useParams();
    const checks = [
        {
            id: 1,
            photos: [task1Image, task2Image]
        },
    ]
    const check = checks.find(c => c.id === Number(labId));

    return (
        <>
            <div className='item-container'>
                <h2>Оцінка достовірності результату</h2>
                {
                    check.photos.map(photo => (
                        <div>
                            <img src={`${photo}`} alt="photo" style={{ maxWidth: '100%' }} />
                        </div>
                    ))
                }
            </div>

        </>
    );
}

export default CheckPage