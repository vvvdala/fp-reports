import {Link} from 'react-router-dom';

function MainPage() {
  return (
    <>
      <div className="title-container">
        <h2>Київський національний університет імені Тараса Шевченка </h2>
        <h2>Факультет інформаційних технологій</h2>
        <h2>Кафедра прикладних та системних технологій</h2>
        <h2>ІПЗ-41(6 підгрупа), 4 курс, 2025 рік</h2>
        <h1 className="fio">Маношина Вероніка</h1>
        <Link to="/labs" className='labs-link'>До лабораторних робіт</Link>
      </div>
    </>
  )
}

export default MainPage
