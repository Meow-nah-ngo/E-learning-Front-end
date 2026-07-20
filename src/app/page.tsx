"use client";

import Button from '@/components/Button';
import CourseCard from '@/components/CourseCard';
import Badge from '@/components/Badge';

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

        {/* หมวดหมู่ 6: Badge Showcase */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">6. Badge (ป้ายกำกับและแท็ก)</h2>
          
          <div className="space-y-md p-md bg-light-2 rounded-2xl">
            {/* Variants & Colors */}
            <div className="space-y-xs">
              <h3 className="text-sm font-semibold text-secondary">6.1 Variants (รูปแบบ) & Colors (สี)</h3>
              
              <div className="space-y-xs">
                <div className="flex flex-wrap gap-xs items-center">
                  <span className="text-xs font-medium w-16 text-description-light">Fill:</span>
                  <Badge variant="fill" color="primary">Primary</Badge>
                  <Badge variant="fill" color="success">Success</Badge>
                  <Badge variant="fill" color="benefit">Benefit</Badge>
                  <Badge variant="fill" color="warning">Warning</Badge>
                  <Badge variant="fill" color="error">Error</Badge>
                  <Badge variant="fill" color="info">Info</Badge>
                </div>
                
                <div className="flex flex-wrap gap-xs items-center">
                  <span className="text-xs font-medium w-16 text-description-light">Outline:</span>
                  <Badge variant="outline" color="primary">Primary</Badge>
                  <Badge variant="outline" color="success">Success</Badge>
                  <Badge variant="outline" color="benefit">Benefit</Badge>
                  <Badge variant="outline" color="warning">Warning</Badge>
                  <Badge variant="outline" color="error">Error</Badge>
                  <Badge variant="outline" color="info">Info</Badge>
                </div>

                <div className="flex flex-wrap gap-xs items-center">
                  <span className="text-xs font-medium w-16 text-description-light">Soft:</span>
                  <Badge variant="soft" color="primary">Primary</Badge>
                  <Badge variant="soft" color="success">Success</Badge>
                  <Badge variant="soft" color="benefit">Benefit</Badge>
                  <Badge variant="soft" color="warning">Warning</Badge>
                  <Badge variant="soft" color="error">Error</Badge>
                  <Badge variant="soft" color="info">Info</Badge>
                </div>
              </div>
            </div>

            {/* Shapes */}
            <div className="space-y-xs">
              <h3 className="text-sm font-semibold text-secondary">6.2 Shapes (รูปทรง)</h3>
              <div className="flex flex-wrap gap-md items-center">
                <Badge shape="pill" color="primary">Pill Shape</Badge>
                <Badge shape="square" color="primary">Square Shape</Badge>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-xs">
              <h3 className="text-sm font-semibold text-secondary">6.3 Sizes (ขนาด)</h3>
              <div className="flex flex-wrap gap-md items-center">
                <Badge size="small" color="success">Small</Badge>
                <Badge size="medium" color="success">Medium</Badge>
                <Badge size="large" color="success">Large</Badge>
              </div>
            </div>

            {/* Removable & Icons */}
            <div className="space-y-xs">
              <h3 className="text-sm font-semibold text-secondary">6.4 Icon Position & Removable (ปุ่มลบแท็ก)</h3>
              <div className="flex flex-wrap gap-md items-center">
                <Badge color="info" iconPosition="left">
                  <span>ℹ️</span> Info Icon Left
                </Badge>
                <Badge color="info" iconPosition="right">
                  Info Icon Right <span>ℹ️</span>
                </Badge>
                <Badge 
                  color="error" 
                  removable 
                  onRemove={() => alert("ลบแท็กเรียบร้อย!")}
                >
                  คลิกเพื่อลบแท็ก
                </Badge>
              </div>
            </div>

          </div>
        </div>

        {/* หมวดหมู่ 7: Course Card Showcase */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">7. Course Card (การ์ดแสดงคอร์สเรียน)</h2>
          <div className="flex flex-wrap gap-md justify-center p-md bg-light-2 rounded-2xl">
            <CourseCard
              imageUrl="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop"
              title="Innovative Strategies in Tech Development"
              subject="คณิตศาสตร์ 10123"
              level="ม.1"
              teacher="ครูพิมพ์ชนก"
              date="23 กันยายน 2569"
              status="คอร์สเต็ม"
              isFull={true}
            />
            <CourseCard
              imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
              title="Introduction to React & Next.js Frameworks"
              subject="เทคโนโลยี 2024"
              level="ม.ปลาย"
              teacher="ครูสมชาย"
              date="1 ตุลาคม 2569"
              status="เปิดรับสมัคร"
              isFull={false}
            />
          </div>
        </div>

      </div>
    </main>
  );
}
