/* 音乐页面 - 展示音乐收藏
 * 使用生成的音乐主题背景图
 * 垂直流动布局,卡片式展示
 */

import { Music as MusicIcon, Play } from "lucide-react";

// 示例数据
const musicItems = [
  {
    id: 1,
    title: "夜的钢琴曲",
    artist: "石进",
    album: "夜的钢琴曲",
    year: "2010",
    description: "宁静的夜晚,钢琴的旋律如水般流淌,抚慰疲惫的心灵。",
  },
  {
    id: 2,
    title: "River Flows in You",
    artist: "Yiruma",
    album: "First Love",
    year: "2001",
    description: "如河流般温柔的旋律,诉说着爱与思念。",
  },
  {
    id: 3,
    title: "Summer",
    artist: "久石让",
    album: "菊次郎的夏天",
    year: "1999",
    description: "夏日的阳光,童年的回忆,简单而美好。",
  },
];

export default function Music() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: "url('/images/music-section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
        
        <div className="relative z-10 container animate-fade-in-up">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-primary/20 text-primary">
                <MusicIcon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground tracking-wide">
                音乐
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-loose">
              音乐是时间的艺术,是情感的语言。<br />
              这里收藏着那些触动心灵的旋律,陪伴我度过无数时光。
            </p>
          </div>
        </div>
      </section>

      {/* 音乐列表 */}
      <section className="py-24 container">
        <div className="max-w-4xl mx-auto space-y-12">
          {musicItems.map((item, index) => (
            <div 
              key={item.id}
              className="japanese-card p-8 md:p-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* 播放按钮 */}
                <div className="flex-shrink-0">
                  <button className="w-20 h-20 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-500 group">
                    <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </button>
                </div>

                {/* 音乐信息 */}
                <div className="flex-1">
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-3">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span>{item.artist}</span>
                    <span>·</span>
                    <span>{item.album}</span>
                    <span>·</span>
                    <span>{item.year}</span>
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
            更多音乐正在整理中...
          </p>
        </div>
      </section>
    </div>
  );
}
