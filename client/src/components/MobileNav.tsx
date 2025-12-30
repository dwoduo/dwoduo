/* 移动端导航 - 顶部固定栏 + 汉堡菜单 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, Music, Image, Gamepad2, BookOpen, FileText, Briefcase, User } from "lucide-react";

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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-card/95 backdrop-blur-sm border-b border-border/20 z-50 lg:hidden">
        <div className="container h-full flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-serif font-medium text-foreground tracking-wide cursor-pointer">
              Dwoduo
            </h1>
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 全屏菜单 */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-40 lg:hidden pt-16">
          <div className="container py-12 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <Link key={item.path} href={item.path}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-4 px-6 py-4 rounded-lg
                      transition-all duration-500 ease-out
                      ${isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                    <span className="text-lg tracking-wide">{item.label}</span>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
