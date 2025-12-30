/* 项目页面 - 展示项目作品
 * 使用生成的项目主题背景图
 */

import { Briefcase, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "个人博客系统",
    category: "Web 开发",
    year: "2024",
    description: "基于 React 和 Node.js 构建的全栈博客系统,支持 Markdown 编辑、标签分类、评论互动等功能。采用现代化的设计风格,注重用户体验和性能优化。",
    tech: ["React", "Node.js", "MongoDB", "TypeScript"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "天气可视化应用",
    category: "数据可视化",
    year: "2024",
    description: "实时天气数据可视化应用,使用 D3.js 和 Chart.js 创建动态图表,展示温度、湿度、降水等多维度天气信息。支持多城市对比和历史数据查询。",
    tech: ["Vue.js", "D3.js", "Chart.js", "Weather API"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "任务管理工具",
    category: "生产力工具",
    year: "2023",
    description: "简洁高效的任务管理工具,支持项目分组、优先级设置、截止日期提醒等功能。采用看板视图和列表视图双模式,适应不同使用场景。",
    tech: ["React", "Tailwind CSS", "Local Storage"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: "url('/images/projects-section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
        
        <div className="relative z-10 container animate-fade-in-up">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-accent/30 text-foreground">
                <Briefcase className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground tracking-wide">
                项目
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-loose">
              代码是思想的具现化。<br />
              这里展示我的创意实现,技能积累,以及对技术的热爱。
            </p>
          </div>
        </div>
      </section>

      {/* 项目列表 */}
      <section className="py-24 container">
        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="japanese-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* 项目图片 */}
                <div className={`aspect-[16/10] md:aspect-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 项目信息 */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {/* 分类和年份 */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-4">
                    {project.title}
                  </h2>

                  {/* 描述 */}
                  <p className="text-muted-foreground leading-loose mb-6">
                    {project.description}
                  </p>

                  {/* 技术栈 */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs text-foreground/60 bg-muted px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 链接按钮 */}
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      查看演示
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      源代码
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 提示文本 */}
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground tracking-wide">
            更多项目正在开发中...
          </p>
        </div>
      </section>
    </div>
  );
}
