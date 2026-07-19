import Button from '@/components/Button';

export default function Page() {
  return (
    <main className="min-h-screen bg-light-2 flex flex-col items-center justify-center p-gutter-xs md:p-gutter-sm lg:p-gutter-lg">
      <div className="max-w-4xl w-full space-y-xl bg-white p-2xl rounded-3xl border border-neutral/50 shadow-xs">
        
        {/* หัวข้อโปรเจกต์ */}
        <div className="space-y-xs">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Ant Design Token Mapping
          </div>
          <h1 className="text-4xl font-bold text-primary">Ant Design Button Showcase</h1>
          <p className="text-md text-description-light">
            ปุ่มคอมโพเนนต์ที่คุณปรับปรุงและเรียบเรียงใหม่ แสดงคุณสมบัติที่อัปเดตล่าสุด
          </p>
        </div>

        {/* หมวดหมู่ 1: Type */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">1. Type (รูปแบบปุ่ม)</h2>
          <div className="flex flex-wrap gap-md items-center">
            <Button type="primary" title="Primary" />
            <Button type="secondary" title="Secondary" />
            <Button type="tertiary" title="Tertiary" />
            <Button type="text" title="Text Button" />
            <Button type="link" title="Link Button" />
            <Button type="disabled" title="Disabled State" />
          </div>
        </div>

        {/* หมวดหมู่ 2: Shape */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">2. Shape (รูปทรง)</h2>
          <div className="flex flex-wrap gap-md items-center">
            <Button type="primary" shape="standard" title="Standard Button" />
            <Button type="primary" shape="circle" title="A" />
            <Button type="secondary" shape="circle" icon={<span>🔍</span>} />
          </div>
        </div>

        {/* หมวดหมู่ 3: Size */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">3. Size (ขนาดปุ่ม)</h2>
          <div className="flex flex-wrap gap-md items-center">
            <Button type="primary" size="small" title="Small Button" />
            <Button type="primary" size="medium" title="Medium Button" />
            <Button type="primary" size="large" title="Large Button" />
          </div>
        </div>

        {/* หมวดหมู่ 4: Danger & State */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">4. Danger & State (สถานะและอันตราย)</h2>
          <div className="flex flex-wrap gap-md items-center">
            <Button type="primary" danger title="Danger Primary" />
            <Button type="secondary" danger title="Danger Secondary" />
            <Button type="tertiary" danger title="Danger Tertiary" />
            <Button type="primary" loading title="Loading Button" />
            <Button type="primary" disabled title="Disabled Prop" />
          </div>
        </div>

        {/* หมวดหมู่ 5: Ghost */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">5. Ghost (ปุ่มโปร่งแสงบนพื้นหลังสีเข้ม)</h2>
          <div className="p-md rounded-2xl bg-secondary/95 flex flex-wrap gap-md items-center">
            <Button type="primary" ghost title="Ghost Primary" />
            <Button type="secondary" ghost title="Ghost Secondary" />
            <Button type="tertiary" ghost title="Ghost Tertiary" />
            <Button type="disabled" ghost title="Ghost Disabled" />
          </div>
        </div>

      </div>
    </main>
  );
}
