import { useParams } from 'react-router-dom';
import task1Image from '../assets/lab1/ai/ChatGpt.png';
import task2Image from '../assets/lab1/ai/Gemini.png';
import task3Image from '../assets/lab1/ai/ChatGpt_2.png';
import task4Image from '../assets/lab1/ai/Gemini_2.png';

function AiReviewPage() {
  const { labId } = useParams();
  const aiReviews = [
    {
      id: 1,
      photos: [task1Image, task2Image, task3Image, task4Image]
    },
  ]
  const aiReview = aiReviews.find(a => a.id === Number(labId));

  return (
    <>
      <div className='ai-container'>
        <h2>Перевірка коду інструментами ШІ</h2>
        {aiReview && aiReview.photos.length > 0 ? (
          aiReview.photos.map((photo, index) => {
            const photoName = photo.split('/').pop().replace(/\.[^/.]+$/, "");

            return (
              <div key={index} style={{ marginBottom: '20px' }}>
                <h3>{photoName}</h3>
                <img src={photo} alt={photoName} style={{ maxWidth: '100%' }} />
              </div>
            );
          })
        ) : (
          <p>Фото для цієї лабораторної не задані.</p>
        )}
      </div>

    </>
  );
}

export default AiReviewPage