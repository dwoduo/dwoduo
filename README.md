# Dwoduo - 我的数字大脑
https://dwoduo-tpcsvvs2.manus.space
一个采用日式极简主义设计风格的个人网站,展示音乐、图像、游戏、学习心得、个人日志和项目作品。

## 设计理念

本网站采用**日式极简主义**设计风格,融合侘寂美学和现代极简主义:

- **留白的力量**: 大量空间营造呼吸感和冥想氛围
- **自然的不完美**: 接受微妙的不对称和有机的形态
- **材质感知**: 通过细腻的纹理和柔和的阴影传达触感
- **时间的流动**: 设计传达宁静和永恒感

### 色彩系统

- 温暖米白 (#F5F1E8) - 主背景色
- 深炭灰 (#2C2C2C) - 主文字色
- 抹茶绿 (#8B9D83) - 强调色
- 樱花粉 (#E8D5C4) - 辅助色
- 靛蓝 (#4A5F7F) - 点缀色

### 字体系统

- **标题**: Noto Serif SC - 优雅的衬线字体
- **正文**: Noto Sans SC - 清晰的无衬线字体

## 技术栈

- **框架**: React 19 + Vite
- **样式**: Tailwind CSS 4
- **UI 组件**: shadcn/ui
- **路由**: Wouter
- **语言**: TypeScript
- **包管理**: pnpm

## 项目结构

```
dwoduo/
├── client/
│   ├── public/
│   │   └── images/          # 静态图片资源
│   └── src/
│       ├── components/      # React 组件
│       ├── pages/          # 页面组件
│       ├── contexts/       # React Context
│       ├── hooks/          # 自定义 Hooks
│       └── lib/            # 工具函数
├── server/                 # 服务器配置(静态站点)
└── shared/                 # 共享类型和常量
```

## 页面结构

- **首页** (`/`) - 网站入口,展示各个板块预览
- **音乐** (`/music`) - 音乐收藏和推荐
- **图像** (`/gallery`) - 摄影作品和图片画廊
- **游戏** (`/games`) - 游戏经历和评价
- **学习** (`/learning`) - 学习笔记和心得
- **日志** (`/journal`) - 个人日志和思考
- **项目** (`/projects`) - 项目作品展示
- **关于** (`/about`) - 个人介绍

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

推送到 `main` 分支后,GitHub Actions 会自动:
1. 安装依赖
2. 构建项目
3. 部署到 GitHub Pages

## 许可证

MIT License

## 作者

Dwoduo - 用心记录,用爱分享

---

© 2025 Dwoduo. All rights reserved.
