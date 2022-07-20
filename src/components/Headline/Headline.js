import Filter from 'components/Filter/Filter'
import ExportBtn from 'components/ExportBtn/ExportBtn'
import s from './Headline.module.scss'

export default function Headline({ search, changeFilter }) {
  return (
    <div className={s.headlineWrap}>
      <h2>Students</h2>
      <Filter search={search} onChange={changeFilter} />
      <ExportBtn styles={s.active} />
    </div>
  )
}
