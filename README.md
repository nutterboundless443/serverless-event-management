# 事件管理平台

欢迎来到事件管理平台的项目！这是一个基于无服务器架构的事件管理系统，旨在帮助用户创建、管理和参与各种活动。

## 功能
- 用户注册和登录
- 创建新事件（包括时间、地点、描述等）
- 管理个人事件（查看、编辑和删除事件）
- 参加事件并与其他参与者互动
- 发送事件提醒和通知。

## 技术栈
- AWS Lambda
- API Gateway
- DynamoDB
- S3（用于存储相关的文件和图片）
- React.js（前端框架）

## 安装
1. 克隆这个仓库：
   ```bash
   git clone https://github.com/yourusername/serverless-event-management.git
   ```
2. 安装依赖：
   ```bash
   cd serverless-event-management
   npm install
   ```
3. 部署至AWS：
   请确保已配置AWS CLI。
   ```bash
   serverless deploy
   ```

## 使用
- 登录后，你可以创建新的事件，管理已创建的事件，参加其他用户创建的事件，和与参与者互动。

## 贡献
欢迎贡献！请提交问题和拉取请求，帮助我们改进这个项目。

## License
这个项目是开源的，遵循MIT协议。
