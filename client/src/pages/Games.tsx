/* 游戏页面 - 展示游戏经历 */

import { Gamepad2, Star } from "lucide-react";

const gameItems = [
  {
    id: 1,
    title: "塞尔达传说:旷野之息",
    platform: "Nintendo Switch",
    year: "2017",
    rating: 5,
    hours: "120+",
    description: "一场关于自由与探索的冒险。广阔的海拉鲁大陆,每一次探索都是新的发现,每一次战斗都是成长的印记。",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
  },
  {
    id: 2,
    title: "空洞骑士",
    platform: "PC",
    year: "2017",
    rating: 5,
    hours: "80+",
    description: "精致的 2D 横版动作游戏,在黑暗的地下王国中探索,每一次失败都让我更加坚韧。",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    id: 3,
    title: "星露谷物语",
    platform: "PC",
    year: "2016",
    rating: 4,
    hours: "200+",
    description: "在宁静的乡村生活中找到内心的平静,种田、钓鱼、交友,简单而美好的日常。",
    image: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=800&q=80",
  },
];

export default function Games() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-primary/20 text-primary">
                <Gamepad2 className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground tracking-wide">
                游戏
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-loose">
              游戏是另一种生活的可能性。<br />
              在虚拟世界中探索,在挑战中成长,在故事中感动。
            </p>
          </div>
        </div>
      </section>

      {/* 游戏列表 */}
      <section className="pb-24 container">
        <div className="max-w-5xl mx-auto space-y-12">
          {gameItems.map((item, index) => (
            <div 
              key={item.id}
              className="japanese-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* 游戏图片 */}
                <div className="md:col-span-2 aspect-[16/10] md:aspect-auto">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 游戏信息 */}
                <div className="md:col-span-3 p-8 md:p-12">
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-4">
                    {item.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span>{item.platform}</span>
                    <span>·</span>
                    <span>{item.year}</span>
                    <span>·</span>
                    <span>{item.hours} 小时</span>
                  </div>

                  {/* 评分 */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-5 h-5 ${i < item.rating ? "fill-primary text-primary" : "text-muted"}`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-loose">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 提示文本 */}
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground tracking-wide">
            更多游戏经历正在整理中...
          </p>
        </div>
      </section>
    </div>
  );
}
