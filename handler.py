def handle_id(id):
    with open("data.txt", "a") as f:
        f.write(f"{id}\n")
    return