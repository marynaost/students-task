import { nanoid } from 'nanoid'
import StudentTestsData from './StudentTestsData'
import s from './TestDetail.module.scss'
export default function TestTable({ tests, score, speed }) {
  return (
    <table>
      <thead>
        <tr className={s.tr}>
          <th className={s.th}>
            <span>#</span>
          </th>
          <th className={s.th}>
            <span>Test Label</span>
          </th>
          <th className={s.th}>
            <span>Score</span>
          </th>
          <th className={s.th}>
            <span>Speed</span>
          </th>
          <th className={s.th}>
            <span>Total Q-ns</span>
          </th>
          <th className={s.th}>
            <span>Exp. Speed</span>
          </th>
          <th className={s.th}>
            <span>Concept</span>
          </th>
          <th className={s.th}>
            <div>
              <span>Date</span>
            </div>
          </th>
          <th className={s.th}>
            <span>Absent</span>
          </th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {tests.map((test, index) => {
          const numberList = index + 1
          return (
            <StudentTestsData
              key={nanoid()}
              {...test}
              numberList={numberList}
            />
          )
        })}
      </tbody>
      <tfoot
        style={{
          height: '40px',
          marginTop: '17px',
          textTransform: 'uppercase',
          fontWeight: '700',
        }}
      >
        <tr>
          <td colSpan={2} style={{ paddingTop: '10px' }}>
            <span style={{ textTransform: 'uppercase' }}>Average</span>
          </td>
          <td style={{ paddingTop: '10px' }}>
            <span
              style={{
                color:
                  score < 50 + '%'
                    ? '#DB4437'
                    : score < 80 + '%'
                    ? '#E2B534'
                    : score < 90 + '%'
                    ? '#0F9D58'
                    : score >= 90 + '%'
                    ? '#4285F4'
                    : ' #828282',
              }}
            >
              {score}
            </span>
          </td>
          <td colSpan={6} style={{ paddingTop: '10px' }}>
            <div
              style={{
                color:
                  speed === 'As Expected'
                    ? '#0F9D58'
                    : speed === 'Above Expected'
                    ? '#4285F4'
                    : speed === 'Below Expected'
                    ? '#DB4437'
                    : ' #828282',
                width: '87px',
              }}
            >
              {speed}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
