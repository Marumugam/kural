#import http.client
import httplib
import json

#conn = http.client.HTTPConnection("10.0.0.4:8888")
conn = httplib.HTTPConnection("10.0.0.4:8888")

headers = { 'Content-Type': 'application/json'}
foo = {'text': 'nan oru muttalunga'}
json_foo = json.dumps(foo)
conn.request("GET", "/", json_foo, headers)
r1 = conn.getresponse()

print(r1)

print(r1.status, r1.reason)
resp = r1.read().decode("utf-8")

json_resp = json.loads(resp)
print(json_resp)

print("##########################################")

for r in json_resp:
    print(r["title"])
