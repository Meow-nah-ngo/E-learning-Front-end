export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex flex-col items-center justify-center p-6 md:p-24 selection:bg-indigo-500 selection:text-white">
      {/* Container */}
      <div className="max-w-4xl w-full text-center space-y-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-8 md:p-16 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Tailwind CSS v4 Active
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          ยินดีต้อนรับสู่โปรเจกต์{" "}
          <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            E-Learning
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          เริ่มต้นเขียนโปรเจกต์ Next.js ด้วย TypeScript และ Tailwind CSS v4 ได้ทันที โครงสร้างโฟลเดอร์ถูกจัดระเบียบใหม่เรียบร้อยแล้ว
        </p>

        {/* Features / Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-xs space-y-2">
            <div className="text-2xl">📁</div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200">📂 Src Folder</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">โฟลเดอร์สำหรับเก็บโค้ดหลัก ถูกย้ายมาอยู่ที่ <code>src/app</code> เรียบร้อย</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-xs space-y-2">
            <div className="text-2xl">🧱</div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200">🧩 Components</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">สร้างโฟลเดอร์ <code>src/components</code> พร้อมให้สร้างคอมโพเนนต์ใหม่</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-xs space-y-2">
            <div className="text-2xl">✨</div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200">🎨 Tailwind v4</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">ทำงานร่วมกับ PostCSS พร้อมเอฟเฟกต์ไล่สีและ Glassmorphism ในตัว</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="pt-6">
          <a
            href="https://tailwindcss.com/docs/v4-beta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-200 rounded-2xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35"
          >
            ศึกษา Tailwind v4 Docs →
          </a>
        </div>
      </div>
    </main>
  );
}
