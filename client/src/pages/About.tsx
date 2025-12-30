/* 关于页面 - 个人介绍
 * 使用生成的关于主题背景图
 */

import { User, Mail, MapPin, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/about-accent.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        
        <div className="relative z-10 container text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-8 flex items-center justify-center">
              <User className="w-16 h-16 text-primary" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6 tracking-wide">
              关于我
            </h1>
            <p className="text-xl text-muted-foreground leading-loose">
              一个热爱生活、追求美好的普通人
            </p>
          </div>
        </div>
      </section>

      {/* 个人介绍 */}
      <section className="py-24 container">
        <div className="max-w-4xl mx-auto">
          {/* 主要介绍 */}
          <div className="japanese-card p-12 md:p-16 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-medium text-foreground mb-8">
              你好,我是 Dwoduo
            </h2>
            <div className="space-y-6 text-muted-foreground leading-loose">
              <p>
                欢迎来到我的数字大脑。这里是我记录生活、分享思考、展示创作的私人空间。
              </p>
              <p>
                我相信,生活不仅仅是柴米油盐,更是诗和远方。我喜欢用音乐抚慰心灵,用镜头捕捉美好,
                在游戏中探索另一种可能,通过学习不断成长,用文字记录内心的波澜,用代码实现创意的火花。
              </p>
              <p>
                这个网站是我的数字花园,每一个页面都是我精心培育的花朵。希望你在这里能感受到我的热情、
                我的思考、我的成长,以及我对生活的热爱。
              </p>
            </div>
          </div>

          {/* 兴趣爱好 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="japanese-card p-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-xl font-serif font-medium text-foreground">兴趣爱好</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>🎵 聆听各种风格的音乐</li>
                <li>📷 摄影与视觉艺术</li>
                <li>🎮 独立游戏与叙事体验</li>
                <li>📚 阅读与写作</li>
                <li>💻 编程与创作</li>
                <li>🎨 设计与美学</li>
              </ul>
            </div>

            <div className="japanese-card p-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-xl font-serif font-medium text-foreground">基本信息</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-foreground/60">位置:</span>
                  <span>中国</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground/60">职业:</span>
                  <span>创作者</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground/60">状态:</span>
                  <span>持续学习中</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="japanese-card p-12 text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
              保持联系
            </h3>
            <p className="text-muted-foreground leading-loose mb-6">
              如果你想和我交流,分享想法,或者只是打个招呼,<br />
              欢迎通过以下方式联系我
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:hello@dwoduo.com" 
                className="text-primary hover:text-primary/80 transition-colors duration-300"
              >
                hello@dwoduo.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/20">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground tracking-wide mb-4">
            感谢你的访问
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Dwoduo. 用心记录,用爱分享.
          </p>
        </div>
      </footer>
    </div>
  );
}
