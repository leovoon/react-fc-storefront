import DOMPurify from 'dompurify'

import styles from '../styles/ProductDescription.module.css'
export default function ProductDescription({
  description,
}: {
  description: string
}) {
  return (
    <div
      className={`mt-10 max-h-[300px] overflow-scroll font-roboto text-base font-normal leading-6 text-gray-900 ${styles.description}`}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(description),
      }}
    />
  )
}
