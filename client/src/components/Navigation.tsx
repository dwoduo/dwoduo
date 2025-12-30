/* 日式极简主义导航设计
 * 采用固定侧边栏,垂直布局,大量留白
 * 细线边框,柔和阴影,优雅的悬停效果
 */

import { Link, useLocation } from "wouter";
import { Home, Music, Image, Gamepad2, BookOpen, FileText, Briefcase, User } from "lucide-react";

const navItems = [
  { path: "/", label: "首页", icon: Home },
  { path: "/music", label: "音乐", icon: Music },
  { path: "/gallery", label: "图像", icon: Image },
  { path: "/games", label: "游戏", icon: Gamepad2 },
  { path: "/learning", label: "学习", icon: BookOpen },
  { path: "/journal", label: "日志", icon: FileText },
  { path: "/projects", label: "项目", icon: Briefcase },
  { path: "/about", label: "关于", icon: User },
];

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border/20 z-50 hidden lg:flex flex-col">
      {/* Logo */}
      <div className="p-8 border-b border-border/20">
        <Link href="/">
          <h1 className="text-2xl font-serif font-medium text-foreground tracking-wide cursor-pointer hover:text-primary transition-colors duration-500">
            Dwoduo
          </h1>
          <p className="text-xs text-muted-foreground mt-2 tracking-wider">我的数字大脑</p>
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 py-12 px-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <a
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-lg
                  transition-all duration-500 ease-out
                  ${isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }
                `}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm tracking-wide">{item.label}</span>
              </a>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-border/20">
        <p className="text-xs text-muted-foreground text-center">
          © 2025 Dwoduo
        </p>
      </div>
    </nav>
  );
}
