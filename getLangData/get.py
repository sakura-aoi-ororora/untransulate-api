# This file is get Language-code

import requests
from bs4 import BeautifulSoup
import json

res = requests.get("https://cloud.google.com/translate/docs/languages")
soup = BeautifulSoup(res.text, "html.parser")

table = soup.select_one("tbody")

ret = []

for item in table.select("tr"):
    j = item.select("td")
    k = j[1].select_one("code")
    ret.append({"name": j[0].string, "code": k.string})

print(ret)
print(json.dumps(ret, indent=4))