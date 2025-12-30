/* 404 页面 - 日式极简主义设计 */

import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container text-center animate-fade-in-up">
        <div className="max-w-2xl mx-auto">
          {/* 404 数字 */}
          <h1 className="text-9xl md:text-[12rem] font-serif font-medium text-primary/20 mb-8">
            404
          </h1>
          
          {/* 标题 */}
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6 tracking-wide">
            迷失在数字空间
          </h2>
          
          {/* 描述 */}
          <p className="text-lg text-muted-foreground leading-loose mb-12">
            抱歉,你访问的页面似乎不存在。<br />
            让我们一起回到熟悉的地方吧。
          </p>
          
          {/* 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-base tracking-wide w-full sm:w-auto"
              >
                <Home className="mr-2 w-5 h-5" />
                返回首页
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 py-6 text-base tracking-wide w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              返回上一页
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
