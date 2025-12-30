/* 首页 - 日式极简主义设计
 * 大幅英雄区域 + 垂直流动的内容卡片
 * 不对称布局,大量留白,柔和阴影
 */

import { Link } from "wouter";
import { ArrowRight, Music, Image, Gamepad2, BookOpen, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 使用生成的背景图 */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background"></div>
        
        <div className="relative z-10 container text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-foreground mb-6 tracking-wide">
            Dwoduo
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 tracking-wide max-w-2xl mx-auto leading-relaxed">
            我的数字大脑
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-16 max-w-xl mx-auto leading-loose">
            在这里,我收藏喜欢的音乐,珍藏美好的图像,记录游戏的足迹,<br />
            分享学习的心得,书写生活的日志,展示创作的项目
          </p>
          
          <Link href="/about">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-500"
            >
              了解更多
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 内容预览区域 */}
      <section className="py-32 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* 音乐 */}
          <a href="/music" className="block">
            <div className="japanese-card p-8 md:p-12 cursor-pointer group">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Music className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-3">音乐</h2>
                  <p className="text-muted-foreground leading-loose">
                    那些触动心灵的旋律,陪伴我度过无数时光
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* 图像 */}
          <a href="/gallery" className="block">
            <div className="japanese-card p-8 md:p-12 cursor-pointer group md:mt-16">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-full bg-accent/30 text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <Image className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-3">图像</h2>
                  <p className="text-muted-foreground leading-loose">
                    用镜头捕捉美好,用色彩记录生活
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* 游戏 */}
          <a href="/games" className="block">
            <div className="japanese-card p-8 md:p-12 cursor-pointer group">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Gamepad2 className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-3">游戏</h2>
                  <p className="text-muted-foreground leading-loose">
                    虚拟世界的探索,现实情感的延伸
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* 学习 */}
          <a href="/learning" className="block">
            <div className="japanese-card p-8 md:p-12 cursor-pointer group md:mt-16">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-full bg-accent/30 text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <BookOpen className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-3">学习</h2>
                  <p className="text-muted-foreground leading-loose">
                    知识的积累,思想的成长
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* 日志 */}
          <a href="/journal" className="block">
            <div className="japanese-card p-8 md:p-12 cursor-pointer group">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <FileText className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-3">日志</h2>
                  <p className="text-muted-foreground leading-loose">
                    记录生活的点滴,沉淀内心的思考
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* 项目 */}
          <a href="/projects" className="block">
            <div className="japanese-card p-8 md:p-12 cursor-pointer group md:mt-16">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-full bg-accent/30 text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <Briefcase className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-medium text-foreground mb-3">项目</h2>
                  <p className="text-muted-foreground leading-loose">
                    创意的实现,技能的展示
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/20">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground tracking-wide">
            © 2025 Dwoduo. 用心记录,用爱分享.
          </p>
        </div>
      </footer>
    </div>
  );
}
