import requests
import sys

class APIRequest:

    def __init__(self, name, type):
        self._name = name
        self._type = type

    def do(self):
        self._req = requests.get("http://localhost:8000/api", params={"name" : self._name, "type" : self._type })
        print(self._req.status_code)
        self._res = self._req.json()

if __name__ == "__main__":
    req = APIRequest(sys.argv[1], sys.argv[2])
    req.do()
    c = req._res["content"]
    print(f"{c}")
