export default function SidebarWidget() {
  return (
    <div
      className="
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]
      "
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        #1 Tailwind CSS Dashboard
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Leading Tailwind CSS Admin Template
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-400 text-theme-sm">
        Want more features? Contact me:
      </p>
      <div className="space-y-2">
        <a
          href="mailto:your-email@example.com"
          className="block rounded-lg bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600"
        >
          waqasgul369@gmail.com
        </a>
        <a
          href="tel:+1234567890"
          className="block rounded-lg bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600"
        >
          +92 3488446186
        </a>
      </div>
    </div>
  );
}
