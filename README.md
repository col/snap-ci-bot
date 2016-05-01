# SnapCI Telegram Bot

This is a simple AWS Lambda Function that broadcasts SnapCI build alerts to Telegram.

Run locally

    node-lambda run

Package

    node-lambda package -f deploy.env

Deploy

    node-lambda deploy -f deploy.env -o <Role ARN>

Configuration

You'll need to create a ``deploy.env`` file that contains the following params.

```
TELEGRAM_BOT_TOKEN=your telegram bot api token
TELEGRAM_CHAT_ID=your telegram user id or chat group id
AWS_ROLE_ARN=the arn of an aws role with lambda permissions
```
