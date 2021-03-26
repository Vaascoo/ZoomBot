import json

CLASSES = { \
    "<class>" : "",\
    "<class>" : "",\
    "<class>" : "",\
    "<class>" : "",\
    "<class>" : "",\
}

if __name__ == "__main__":
    for name in CLASSES:
        print(f"{name}:")
        teoricas = []
        n = int(input("Numero de teoricas: "))
        print("Inserir links das teoricas 1 a 1: ")
        for i in range(n):
            teoricas.append(input("-> "))
        print("Inserir links das praticas :")
        praticas = input("-> ")
        print("Inserir links das laboratoriais :")
        laboratoriais = input("-> ")
        CLASSES[name] = { "teoricas" : teoricas, "praticas" : praticas, "laboratoriais" : laboratoriais}
    
    with open("json.txt", "w+") as f:
        print(json.dumps(CLASSES), file=f, end="")
