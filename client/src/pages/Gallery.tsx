/* 图像页面 - 图片画廊
 * 瀑布流布局,展示图像作品
 */

import { Image as ImageIcon } from "lucide-react";

// 示例图片数据 - 使用 Unsplash 占位图
const galleryItems = [
  {
    id: 1,
    title: "山间晨雾",
    description: "清晨的山间,薄雾缭绕,宁静而神秘",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "风景",
  },
  {
    id: 2,
    title: "城市夜景",
    description: "霓虹闪烁,车水马龙,都市的繁华与孤独",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
    category: "城市",
  },
  {
    id: 3,
    title: "静物茶具",
    description: "一壶清茶,一缕茶香,生活的禅意",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
    category: "静物",
  },
  {
    id: 4,
    title: "秋日枫叶",
    description: "层林尽染,秋意浓浓",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "自然",
  },
  {
    id: 5,
    title: "海边日落",
    description: "夕阳西下,海天一色",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "风景",
  },
  {
    id: 6,
    title: "建筑几何",
    description: "线条与光影的交织",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80",
    category: "建筑",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-accent/30 text-foreground">
                <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground tracking-wide">
                图像
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-loose">
              用镜头捕捉美好,用色彩记录生活。<br />
              每一张照片都是时光的切片,情感的凝固。
            </p>
          </div>
        </div>
      </section>

      {/* 图片网格 */}
      <section className="pb-24 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="japanese-card overflow-hidden group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 图片 */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 信息 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-serif font-medium text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 提示文本 */}
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground tracking-wide">
            更多作品正在整理中...
          </p>
        </div>
      </section>
    </div>
  );
}
