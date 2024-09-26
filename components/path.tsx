import styles from './path.module.css'

export default function Path() {
  return (
    <div className="nx-border-b nx-mb-2 dark:nx-border-neutral-800 contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400 nx-flex">
      <h1 className='nx-mt-2 nx-text-2xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-flex nx-items-center nx-gap-2'><p className={styles.badge}>GET</p>/api/trace</h1>
    </div>
  )
}
