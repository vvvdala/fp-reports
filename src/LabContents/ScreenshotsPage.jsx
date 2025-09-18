import { useParams } from 'react-router-dom';
import task1Image from '../assets/lab1/results/task1.png';
import task2Image from '../assets/lab1/results/task2.png';


function ScreenshotsPage() {
    const { labId } = useParams();
    const screenshots = [
        {
            id: 1,
            photos: [task1Image, task2Image]
        },
    ]
    const screenshot = screenshots.find(s => s.id === Number(labId));

    return (
        <>
            <div className='item-container'>
                <h2>Результати</h2>
                {
                    screenshot.photos.map(photo => (
                        <div>
                            <img src={`${photo}`} alt="photo" style={{ maxWidth: '100%' }} />
                        </div>

                    ))
                }
            </div>

        </>
    );
}

export default ScreenshotsPage