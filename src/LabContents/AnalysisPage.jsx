import { useParams } from 'react-router-dom';

function AnalysisPage() {
    const { labId } = useParams();
    const analysises = [
        {
            id: 1,
            text: [
                ` Задача 4.1.
                Потрібно звести число X у степінь N за допомогою рекурентного співвідношення.
                Для цього використовуємо метод "піднесення до степеня множенням навпіл" (exponentiation by squaring).
                Глибина рекурсії визначається як O(log2 N).`,
                ` Задача 4.2.
                Потрібно знайти суму цифр числа n.
                Алгоритм: беремо останню цифру (n % 10), додаємо до суми і ділимо число націло на 10 (n // 10),
                доки n > 0.
                Приклад: n=179 → 1+7+9=17.`
            ]
        },
    ];
    const analysis = analysises.find(a => a.id === Number(labId));

    return (
        <>
            <div className='item-container'>
                <h2>Аналіз задачі</h2>
                {analysis.text.map(a => (
                    <p>{a}</p>
                ))
                }
            </div>
        </>
    );
}

export default AnalysisPage