import s from './Loader.module.scss'
export default function Loader() {
  return (
    <>
      <div className={`${s.loader} ${s.book}`}>
        <figure className={s.page}></figure>
        <figure className={s.page}></figure>
        <figure className={s.page}></figure>
      </div>

      <h1 className={s.h1}>Loading</h1>
    </>
  )
}
