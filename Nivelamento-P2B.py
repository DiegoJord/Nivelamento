alturamasculina = []
alturafeminina = []
masculino = []
feminino = []

for i in range (0,15):
    genero = input("Digite o seu sexo. M para masculino e F para feminino. ")

    if genero == "M":
        altura = float(input("Digite sua altura: "))
        masculino.append(genero)
        alturamasculina.append(altura)
    elif genero == "F":
        altura = float(input("Digite sua altura: "))
        feminino.append(genero)
        alturafeminina.append(altura)
    else:
        print("Informe se o genero é M ou F")

maioraltura = 0
for i in alturafeminina:
    if i > maioraltura:
        maioraltura = i

for i in alturamasculina:
    if i > maioraltura:
        maioraltura = i

menoraltura = 0
for i in alturafeminina:
    if menoraltura == 0:
        menoraltura = i
    elif i > maioraltura:
        maioraltura = i

for i in alturamasculina:
    if menoraltura == 0:
        menoraltura = i
    elif i > maioraltura:
        maioraltura = i

media = sum(alturamasculina) / len(alturamasculina)

print(f"Maior altura: {maioraltura}")
print(f"Menor altura: {menoraltura}")
print(f"Media da altura masculina: {media}")
print("Quantidade de mulheres: ", len(alturafeminina))