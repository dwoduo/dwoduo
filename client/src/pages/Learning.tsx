/* 学习页面 - 展示学习心得 */

import { BookOpen, Calendar } from "lucide-react";

const learningItems = [
  {
    id: 1,
    title: "深入理解 React Hooks",
    category: "前端开发",
    date: "2024-12",
    summary: "从 useState 到 useEffect,再到自定义 Hooks,逐步理解 React 函数式组件的设计哲学。",
    tags: ["React", "JavaScript", "前端"],
  },
  {
    id: 2,
    title: "设计模式的实践应用",
    category: "软件工程",
    date: "2024-11",
    summary: "单例、工厂、观察者...这些经典模式不仅是代码的优雅,更是思维的升华。",
    tags: ["设计模式", "架构", "最佳实践"],
  },
  {
    id: 3,
    title: "日式美学与极简设计",
    category: "设计理论",
    date: "2024-10",
    summary: "侘寂之美,留白的力量。学习如何在设计中传达宁静与深度。",
    tags: ["设计", "美学", "极简主义"],
  },
  {
    id: 4,
    title: "TypeScript 类型体操",
    category: "编程语言",
    date: "2024-09",
    summary: "泛型、条件类型、映射类型...TypeScript 的类型系统比想象中更强大。",
    tags: ["TypeScript", "类型系统", "进阶"],
  },
];

export default function Learning() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-accent/30 text-foreground">
                <BookOpen className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground tracking-wide">
                学习
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-loose">
              学习是一场永不停歇的旅程。<br />
              在这里记录知识的积累,思想的成长,以及那些顿悟的时刻。
            </p>
          </div>
        </div>
      </section>

      {/* 学习笔记列表 */}
      <section className="pb-24 container">
        <div className="max-w-4xl mx-auto space-y-8">
          {learningItems.map((item, index) => (
            <div 
              key={item.id}
              className="japanese-card p-8 md:p-10 cursor-pointer hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 分类标签 */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* 标题 */}
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                {item.title}
              </h2>

              {/* 摘要 */}
              <p className="text-muted-foreground leading-loose mb-6">
                {item.summary}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs text-foreground/60 bg-muted px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 提示文本 */}
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground tracking-wide">
            更多学习笔记正在整理中...
          </p>
        </div>
      </section>
    </div>
  );
}
