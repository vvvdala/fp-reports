import { useParams } from 'react-router-dom';

function CodePage() {
    const { labId } = useParams();
    const codes = [
        {
            id: 1,
            text: `
;4 варіант
;1 завдання
(define (power x n depth)
  (display "Глибина: ") 
  (display depth)
  (newline)
  (cond
    ((= n 0) 1)
    ((= n 1) x)                                 
    ((even? n) (* (power x (/ n 2)(+ depth 1)) (power x (/ n 2) (+ depth 1)))) 
    ((odd? n)  (* x (power x (/ (- n 1) 2) (+ depth 1)) (power x (/ (- n 1) 2) (+ depth 1))))
    ))

(display "Введіть x:")
(define x (read))
(display "Введіть n:")
(define n (read))
(power x n 0)

;2 завдання
(define (sum n)
    (if (= n 0)
        0
        (+ (modulo n 10) (sum (quotient n 10))))
  )
      
(display "Введіть n:")
(define n (read))
(display "Результат: ")
(sum n)
            `
        },
    ];

    const code = codes.find(c => c.id === Number(labId));

    return (
        <>
            <div className='item-container'>
                <h2>Код</h2>
                <div className='code-container'>
                    <pre>
                        <code>
                            {code.text}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}

export default CodePage