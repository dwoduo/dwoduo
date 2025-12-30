/* 日志页面 - 个人日志
 * 使用生成的日志主题背景图
 */

import { FileText, Calendar } from "lucide-react";

const journalEntries = [
  {
    id: 1,
    date: "2024-12-28",
    title: "冬日的温暖",
    mood: "平静",
    content: "今天下了今年的第一场雪。站在窗前,看着雪花缓缓飘落,内心感到前所未有的宁静。泡了一杯热茶,翻开久违的书籍,这样的午后,简单而美好。",
  },
  {
    id: 2,
    date: "2024-12-20",
    title: "关于成长的思考",
    mood: "沉思",
    content: "回顾这一年,发现自己在不知不觉中成长了许多。不再急于求成,学会了欣赏过程中的风景。每一次挫折都是养分,每一次坚持都有意义。",
  },
  {
    id: 3,
    date: "2024-12-10",
    title: "音乐与情感",
    mood: "感动",
    content: "今晚听了很久没听的老歌,旋律响起的瞬间,记忆如潮水般涌来。音乐真是神奇,它能唤醒沉睡的情感,连接过去与现在。",
  },
  {
    id: 4,
    date: "2024-11-25",
    title: "秋天的尾巴",
    mood: "怀念",
    content: "秋天就要过去了。今天去公园散步,地上铺满了金黄的落叶,踩上去沙沙作响。拍了很多照片,想要留住这个季节的最后一抹色彩。",
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: "url('/images/journal-section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
        
        <div className="relative z-10 container animate-fade-in-up">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-primary/20 text-primary">
                <FileText className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground tracking-wide">
                日志
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-loose">
              文字是心灵的镜子。<br />
              在这里记录生活的点滴,沉淀内心的思考,留下时光的印记。
            </p>
          </div>
        </div>
      </section>

      {/* 日志列表 */}
      <section className="py-24 container">
        <div className="max-w-3xl mx-auto space-y-12">
          {journalEntries.map((entry, index) => (
            <article 
              key={entry.id}
              className="japanese-card p-8 md:p-10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 日期和心情 */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time>{entry.date}</time>
                </div>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {entry.mood}
                </span>
              </div>

              {/* 标题 */}
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-6">
                {entry.title}
              </h2>

              {/* 内容 */}
              <p className="text-muted-foreground leading-loose">
                {entry.content}
              </p>
            </article>
          ))}
        </div>

        {/* 提示文本 */}
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground tracking-wide">
            更多日志正在书写中...
          </p>
        </div>
      </section>
    </div>
  );
}
