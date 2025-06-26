import os
import google.generativeai as genai

# APIキーを環境変数から取得
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("APIキーが設定されていません。GEMINI_API_KEY環境変数を設定してください。")

genai.configure(api_key=api_key)

# モデルの初期化
model = genai.GenerativeModel('gemini-pro')

# ここでGitHubから受け取ったコンテキストを処理し、
# モデルにプロンプトを送信するロジックを実装します。
# 今回はダミーとして固定のプロンプトを送信します。
prompt = "こんにちは、Gemini。"
response = model.generate_content(prompt)

print(response.text)
