import requests

response = requests.post("http://127.0.0.1:5000/search", json={"query": "AI"})
print(response.json())
