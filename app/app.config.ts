export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    pageGrid: {
      base: 'relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
    },
    button: {
      slots: {
        base: [
          'rounded-2xl font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75',
          'transition-colors'
        ],
      }
    },
    input: {
      slots: {
        // wrapper: thêm ring khi focus + bo góc
        root: 'relative inline-flex items-center rounded-2xl focus-within:ring-2 focus-within:ring-sky-500/40 dark:focus-within:ring-sky-400/30',

        // phần <input>: màu nền, chữ, placeholder, viền theo theme
        base: [
          'w-full rounded-2xl appearance-none focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors',

          // nền & chữ
          'bg-white text-gray-900 placeholder:text-gray-500',
          'dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-gray-400',

          // viền
          'border border-gray-300 dark:border-neutral-700'
        ]
      }
    }
  }
})
