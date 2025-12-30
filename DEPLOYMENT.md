# Dwoduo 网站部署指南

## GitHub Pages 部署步骤

### 1. 访问 GitHub 仓库
打开: https://github.com/dwoduo/dwoduo

### 2. 配置 GitHub Pages

1. 点击仓库页面顶部的 **Settings** (设置)
2. 在左侧菜单中找到 **Pages**
3. 在 "Build and deployment" 部分:
   - **Source**: 选择 "GitHub Actions"

### 3. 创建部署工作流

1. 回到仓库主页
2. 点击 **Actions** 标签
3. 点击 "set up a workflow yourself" 或 "New workflow"
4. 创建文件 `.github/workflows/deploy.yml`
5. 复制以下内容:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 10

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. 点击 "Commit changes"

### 4. 等待部署完成

1. 在 **Actions** 标签页查看部署进度
2. 等待工作流运行完成(通常需要 2-3 分钟)
3. 部署成功后,网站将在以下地址访问:
   - **https://dwoduo.github.io/dwoduo/**

### 5. 自定义域名(可选)

如果你有自己的域名:

1. 在 **Settings** → **Pages** 中找到 "Custom domain"
2. 输入你的域名(例如: `www.dwoduo.com`)
3. 在你的域名提供商处添加 DNS 记录:
   ```
   类型: CNAME
   名称: www
   值: dwoduo.github.io
   ```
4. 等待 DNS 生效(可能需要几小时)

## 更新网站内容

每次推送到 `main` 分支时,GitHub Actions 会自动重新构建和部署网站:

```bash
# 在本地修改代码后
git add .
git commit -m "Update content"
git push origin main
```

## 故障排查

### 部署失败
- 检查 Actions 标签页的错误日志
- 确保 `pnpm build` 在本地能成功运行
- 检查 `package.json` 中的构建脚本

### 页面显示 404
- 确认 GitHub Pages 已启用
- 检查部署是否成功完成
- 等待几分钟让 CDN 缓存更新

### 样式或图片不显示
- 检查资源路径是否正确
- 确保所有资源都在 `client/public` 目录下
- 清除浏览器缓存后重试

## 本地预览

在推送到 GitHub 之前,可以先在本地预览:

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 技术支持

如有问题,请查看:
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Vite 部署文档](https://vitejs.dev/guide/static-deploy.html)
